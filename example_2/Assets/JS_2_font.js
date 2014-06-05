#pragma strict
//自定义皮肤
var mySkin:GUISkin;
function OnGUI () {
	GUI.skin=mySkin;
	GUILayout.Box("C64字体");
	GUILayout.Button("xirod字体");
	GUILayout.Label("默认字体");
}

