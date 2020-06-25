import * as fmt from "lua-fmt";
import * as vscode from "vscode";

export default function (context: vscode.ExtensionContext) {
  vscode.languages.registerDocumentFormattingEditProvider("lua", {
    async provideDocumentFormattingEdits(
      document: vscode.TextDocument,
      options: vscode.FormattingOptions,
      token: vscode.CancellationToken
    ): Promise<vscode.TextEdit[]> {
      return [
        new vscode.TextEdit(
          document.validateRange(new vscode.Range(0, 0, Infinity, Infinity)),
          fmt.formatText(document.getText(), {
            useTabs: !options.insertSpaces,
            indentCount: options.tabSize,
          })
        ),
      ];
    },
  });
}
