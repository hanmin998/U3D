#pragma strict
var addStr:String="待测试字符串";
function OnGUI () {
	//普通按钮
	if(GUI.Button(Rect(50,50,100,30),addStr)){
		addStr+=addStr;
	}
	//界面布局按钮
	if(GUILayout.Button(addStr)){
		addStr+=addStr;
	}
}
