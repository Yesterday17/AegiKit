import * as vscode from "vscode";
import registerFormatLua from "./services/formatLua";
import registerMinifyLua from "./services/minifyLua";

export function activate(context: vscode.ExtensionContext) {
  registerFormatLua(context);
  registerMinifyLua(context);
}

export function deactivate() {}
