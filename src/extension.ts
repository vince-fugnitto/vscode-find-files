import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('vscode-find-files:echoFiles', () => {
		vscode.window.showInformationMessage('Files Echoed...');
		vscode.workspace.findFiles('**/*getting-started*/**/*.md', null, 50).then(values => {
			values.forEach(v => {
				vscode.window.showInformationMessage(v.path);
			});
		});
	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
