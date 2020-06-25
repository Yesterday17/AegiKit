import * as vscode from "vscode";
import registerFormatLua from "./services/formatLua";
import registerMinifyLua from "./services/minifyLua";
import registerTemplateColor from "./services/templateColor";

export function activate(context: vscode.ExtensionContext) {
  registerFormatLua(context);
  registerMinifyLua(context);

  registerTemplateColor(context);
}

export function deactivate() {}
