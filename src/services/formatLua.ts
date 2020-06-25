import * as vscode from "vscode";
import * as fmt from "lua-fmt";

export default function (context: vscode.ExtensionContext) {
  vscode.languages.registerDocumentFormattingEditProvider(
    { language: "lua", scheme: "*" },
    {
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
    }
  );
}
