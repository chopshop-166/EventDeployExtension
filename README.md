# Event Deploy for WPILib

A VSCode extension for quickly committing all changes before deploying robot code. Click "Deploy Robot Code (Event)" in the editor menu. The current branch *must* begin with "event" (e.g. "event_nhgrs"). After an event, these commits can be squashed and merged to another branch.

We record the Git SHA as metadata in the log file; by making a new commit before every deploy, this extension guarantees that there are no uncommitted changes.

An example commit message is shown below.

> Update at "1/31/2022, 8:30:00 AM"

## Installation

To install, clone the repository to the VSCode extensions folder.

### Windows
```
git clone "https://github.com/chopshop-166/EventDeployExtension" C:\Users\Public\wpilib\2022\vscode\data\extensions\EventDeployExtension
```
