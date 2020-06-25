import * as vscode from "vscode";

export function getRange(selection: boolean = false): vscode.Range | undefined {
  let editor = vscode.window.activeTextEditor;

  if (!editor) {
    return undefined;
  }

  if (selection) {
    return new vscode.Range(editor.selection.start, editor.selection.end);
  } else {
    let luaCode = getText(false);

    if (!luaCode) {
      return undefined;
    }

    return new vscode.Range(
      editor.document.positionAt(0),
      editor.document.positionAt(luaCode.length)
    );
  }
}

export function getText(selection: boolean = false): string {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    return "";
  }

  if (selection) {
    return editor.document.getText(getRange(true));
  } else {
    return editor.document.getText();
  }
}

export function editFileText(selection: boolean, text: string) {
  const editor = vscode.window.activeTextEditor;
  let range = getRange(selection);

  if (!editor || !range) {
    throw new Error("Unable to edit the file!");
  }

  editor.edit((builder: vscode.TextEditorEdit) => {
    builder.replace(range as vscode.Range, text);
  });
}
