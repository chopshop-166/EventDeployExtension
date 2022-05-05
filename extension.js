const vscode = require("vscode")
const cp = require("child_process")

const branchPrefix = "event"


/**
 * @param {vscode.ExtensionContext} context
 */

const windowOut = vscode.window.createOutputChannel('Event Deploy');
function activate(context) {

	function runCommand(command, callback) {
		cp.exec(command, { cwd: vscode.workspace.workspaceFolders[0].uri.fsPath }, (err, stdout, stderr) => {
			callback(stdout)
		})
	}



	context.subscriptions.push(vscode.commands.registerCommand("event-deploy.deploy", function () {
		runCommand("git branch --show-current", branch => {
			if (!branch.startsWith(branchPrefix)) {
				windowOut.appendLine("Current branch '" + branch.trim() + '" is not a valid event branch.')
				vscode.commands.executeCommand("wpilibcore.deployCode")

			} else {
				var commitMessage = "Update at '" + new Date().toLocaleString() + "'"
				vscode.window.showInputBox().then((input) => {
					if (input === undefined) {
						return;
					}
					if (input != '') {
						commitMessage = input;
					}
					runCommand("git add -A", () => {
						runCommand('git commit -m "' + commitMessage + '"', () => {
							vscode.commands.executeCommand("wpilibcore.deployCode")
						})
					})

				});





			}
		})
	}))
}
// @ts-ignore
exports.activate = activate

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
