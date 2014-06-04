#pragma strict

function OnGUI () {
	//开始一个显示区域
	GUILayout.BeginArea(Rect(0,0,Screen.width,Screen.height));
	//开始一个横向布局
	GUILayout.BeginHorizontal();
	//开始一个纵向布局
	GUILayout.BeginVertical();
	//两个控件
	GUILayout.Box("Box1_1");
	//两个控件上下对齐
	GUILayout.FlexibleSpace();
	GUILayout.Box("Box1_2");
	//结束纵向布局
	GUILayout.EndVertical();
	//两纵向布局左右对齐
	GUILayout.FlexibleSpace();
	//开始一个纵向布局
	GUILayout.BeginVertical();
	//两个控件
	GUILayout.Box("Box1_1");
	//两个控件上下对齐
	GUILayout.FlexibleSpace();
	GUILayout.Box("Box1_2");
	//结束纵向布局
	GUILayout.EndVertical();
	//结束一个横向布局
	GUILayout.EndHorizontal();
	//结束显示区域
	GUILayout.EndArea();
}