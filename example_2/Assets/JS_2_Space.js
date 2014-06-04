#pragma strict

function OnGUI () {
	//开始最外层的水平线性布局
	GUILayout.BeginHorizontal();
	//开始内层垂直线性布局
	GUILayout.BeginVertical();
	//两个空间
	GUILayout.Button("垂直1_1");
	//间距10
	GUILayout.Space(10);
	GUILayout.Button("垂直1_2");
	//结束第一个垂直线性布局
	GUILayout.EndVertical();
	//两个垂直线性布局间隔10
	GUILayout.Space(10);
	//开始第二个垂直线性布局
	GUILayout.BeginVertical();
	//两个空间
	GUILayout.Button("垂直2_1");
	//间距10
	GUILayout.Space(10);
	GUILayout.Button("垂直2_2");
	//结束第二个垂直线性布局
	GUILayout.EndVertical();
}