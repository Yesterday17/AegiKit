import * as vscode from "vscode";

export const inlineVariables: vscode.CompletionItem[] = [
  ["layer", "行所在层数"],
  ["lstart", "行的开始时间\n以毫秒(ms)为单位"],
  ["lend", "行的结束时间\n以毫秒(ms)为单位"],
  ["ldur", "行的持续时间\n以毫秒(ms)为单位"],
  ["lmid", "行的中点时间\n以毫秒(ms)为单位\n0.5*[开始时间+结束时间]"],
  ["style", "行的样式名称"],
  ["actor", "说话人名称"],
  ["margin_l", "有效左边距\n当该值小于等于 0 时取决于样式"],
  ["margin_r", "有效右边距\n当该值小于等于 0 时取决于样式"],
  ["margin_v", "有效垂直边距\n和顶部边距含义相同"],
  ["margin_t", "有效顶部边距\n和垂直边距含义相同"],
  ["margin_b", "有效底部边距"],
  ["syln", "行内音节的个数"],
  ["li", "行数\n文件中的第一个自然行对应数值为1"],
  ["lleft", "行的左边缘距离\n会将设置好的边距和对齐方式算在内, 取整数"],
  ["lcenter", "行的水平中心距离\n会将设置好的边距和对齐方式算在内, 取整数"],
  ["lright", "行的右边缘距离\n会将设置好的边距和对齐方式算在内, 取整数"],
  ["ltop", "行的上边缘距离\n会将设置好的边距和对齐方式算在内\n取整数"],
  ["lmiddle", "行的垂直中心距离\n会将设置好的边距和对齐方式算在内\n取整数"],
  ["lbottom", "行的下边缘距离\n会将设置好的边距和对齐方式算在内\n取整数"],
  ["lx", "对 \\pos 代码使用的 x 坐标（当对齐方式未被重写时）"],
  ["ly", "对 \\pos 代码使用的 y 坐标（当对齐方式未被重写时）"],
  ["lwidth", "以像素为单位的行的宽度\n会被取整，所以也许和位置变量不完全吻合"],
  ["lheight", "以像素为单位的行的高度\n会被取整，所以也许和位置变量不完全吻合"],

  ["sstart", "音节相对于行的开始时间\n适合配合 \\t 和 \\move 使用"],
  ["send", "音节相对于行的结束时间\n适合配合 \\t 和 \\move 使用"],
  ["smid", "音节相对于行的中点时间\n适合配合 \\t 和 \\move 使用"],
  ["sdur", "音节的持续时间\n以毫秒为单位"],
  ["skdur", "音节的持续时间\n以厘秒为单位"],
  ["si", "该行的第几个音节"],
  ["sleft", "音节的绝对左边缘距离,从屏幕左边缘开始计算\n配合 \\pos 和 \\move"],
  [
    "scenter",
    "音节的绝对水平中心距离\n从屏幕左边缘开始计算\n配合 \\pos和 \\move",
  ],
  [
    "sright",
    "音节的绝对右边缘距离\n从屏幕左边缘开始计算\n配合 \\pos 和 \\move",
  ],
  [
    "sbottom",
    "音节的绝对下边缘距离\n从屏幕左边缘开始计算\n配合 \\pos 和 \\move\n可根据假名定位进行调整",
  ],
  [
    "smiddle",
    "音节的绝对垂直中心距离\n从屏幕左边缘开始计算\n配合 \\pos 和 \\move\n可根据假名定位进行调整",
  ],
  [
    "stop",
    "音节的绝对上边缘距离\n从屏幕左边缘开始计算\n配合 \\pos 和 \\move\n可根据假名定位进行调整",
  ],
  ["sx", "音节在默认对齐方式下的绝对位置(x)\n配合 \\pos 和 \\move"],
  ["sy", "音节在默认对齐方式下的绝对位置(y)\n配合 \\pos 和 \\move"],
  ["swidth", "以像素为单位的音节宽度\n会被取整，所以也许和位置变量不完全吻合"],
  ["sheight", "以像素为单位的音节高度\n会被取整，所以也许和位置变量不完全吻合"],

  ["start", ""],
  ["end", ""],
  ["mid", ""],
  ["dur", ""],
  ["kdur", ""],
  ["i", "行数或音节数"],
  ["left", ""],
  ["center", ""],
  ["right", ""],
  ["top", ""],
  ["middle", ""],
  ["bottom", ""],
  ["x", ""],
  ["y", ""],
  ["width", ""],
  ["height", ""],
].map((entry) => {
  return {
    label: entry[0],
    kind: vscode.CompletionItemKind.Variable,
    detail: entry[1],
  };
});

export default function (context: vscode.ExtensionContext) {
  vscode.languages.registerCompletionItemProvider(
    "karatmpl",
    {
      async provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
      ): Promise<
        vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>
      > {
        return inlineVariables;
      },
    },
    "$"
  );
}
