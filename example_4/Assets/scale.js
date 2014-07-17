#pragma strict
var obj:GameObject;
var scaleX:float=1.0;
var scaleY:float=1.0;
var scaleZ:float=1.0;
function Start () {
	obj=GameObject.Find("Cube");
}

function OnGUI () {
	GUILayout.Label("X轴缩放");
	scaleX=GUILayout.HorizontalSlider(scaleX,1.0,2.0,GUILayout.Width(100));
	GUILayout.Label("Y轴缩放");
	scaleY=GUILayout.HorizontalSlider(scaleY,1.0,2.0,GUILayout.Width(100));
	GUILayout.Label("Z轴缩放");
	scaleZ=GUILayout.HorizontalSlider(scaleZ,1.0,2.0,GUILayout.Width(100));
	obj.transform.localScale=Vector3(scaleX,scaleY,scaleZ);
}