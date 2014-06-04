#pragma strict
//贴图
var texture:Texture2D;
function OnGUI () {
	//开始水平线性布局
	GUILayout.BeginHorizontal();
	GUILayout.Box("开始水平布局");
	GUILayout.Button("按钮");
	GUILayout.Label("文本框");
	GUILayout.TextField("输入框");
	GUILayout.Box(texture);
	//结束水平线性布局
	GUILayout.EndHorizontal();
	//开始垂直线性布局
	GUILayout.BeginVertical();
	GUILayout.Box("开始垂直按钮");
	GUILayout.Button("按钮");
	GUILayout.Label("文本框");
	GUILayout.TextField("输入框");
	GUILayout.Box(texture);
	//结束垂直线性布局
	GUILayout.EndVertical();
}
