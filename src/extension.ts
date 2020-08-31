import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable: vscode.Disposable[] = [];
	disposable.push(vscode.commands.registerCommand('vscode-find-files:echoFiles', () => {
		vscode.window.showInformationMessage('Files Files...');
		vscode.workspace.findFiles('**/README.md', undefined, 50).then(values => {
			values.forEach(v => {
				if (v.path.includes('node_modules')) {
					vscode.window.showInformationMessage(v.path);
				}
			});
		});
	}));
	disposable.push(vscode.commands.registerCommand('vscode-find-files:echoFiles:ignored', () => {
		vscode.window.showInformationMessage('Find Ignored Files...');
		vscode.workspace.findFiles('**/README.md', null, 50).then(values => {
			values.forEach(v => {
				if (v.path.includes('node_modules')) {
					vscode.window.showInformationMessage(v.path);
				}
			});
		});
	}));
	context.subscriptions.push(...disposable);
}

export function deactivate() { }
