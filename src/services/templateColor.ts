import * as vscode from "vscode";

export default function (context: vscode.ExtensionContext) {
  vscode.languages.registerColorProvider("karatmpl", {
    async provideDocumentColors(
      document: vscode.TextDocument,
      token: vscode.CancellationToken
    ): Promise<vscode.ColorInformation[]> {
      const result: vscode.ColorInformation[] = [];

      const text = document.getText();
      for (const match of text.matchAll(/\\[1-4]?c(?:&H([0-9a-fA-F]{6})&)/g)) {
        // BBGGRR
        const color = Number("0x" + match[1]);
        const offset = match[0].indexOf(match[1]);
        const range = new vscode.Range(
          document.positionAt((match.index as number) + offset),
          document.positionAt(
            (match.index as number) + offset + match[1].length
          )
        );
        result.push(
          new vscode.ColorInformation(
            range,
            new vscode.Color(
              ((color & 0x0000ff) >> 0) / 0xff,
              ((color & 0x00ff00) >> 8) / 0xff,
              ((color & 0xff0000) >> 16) / 0xff,
              0xff
            )
          )
        );
      }

      return result;
    },

    async provideColorPresentations(
      color: vscode.Color,
      context: { document: vscode.TextDocument; range: vscode.Range },
      token: vscode.CancellationToken
    ): Promise<vscode.ColorPresentation[]> {
      return [
        {
          label:
            Math.floor(color.blue * 0xff).toString(16) +
            Math.floor(color.green * 0xff).toString(16) +
            Math.floor(color.red * 0xff).toString(16),
        },
      ];
    },
  });
}
