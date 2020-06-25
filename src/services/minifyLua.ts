import * as vscode from "vscode";
import { editFileText, getText } from "../utils/editor";
const luamin = require("luamin");

export default function (context: vscode.ExtensionContext) {
  const command = vscode.commands.registerCommand("aegikit.minifyLua", () => {
    let code = getText();

    try {
      code = luamin.minify(code);
      editFileText(false, code); // TODO: Preview instead of edit directly
    } catch (error) {
      vscode.window.showErrorMessage(String(error));
      return;
    }
  });

  context.subscriptions.push(command);
}
