#pragma strict

//获得立方体对象
var obj:GameObject;

function Start () {
	obj=GameObject.Find("Cube");

}
function OnGUI(){
	if(GUILayout.Button("给立方体添加脚本组件",GUILayout.Height(50))){
		//添加cebu_script脚本
		if(obj)
		obj.AddComponent("cube_script");
	}
	if(GUILayout.Button("删除立方体脚本组件",GUILayout.Height(50))){
		if(obj)
		Destroy(obj.GetComponent("cube_script"));
	}
	if(GUILayout.Button("立即删除立方体对象",GUILayout.Height(50))){
		if(obj)
		Destroy(obj);
	}
	if(GUILayout.Button("5秒后删除立方体",GUILayout.Height(50))){
		if(obj)
		Destroy(obj,5);
	}
}

function Update () {

}