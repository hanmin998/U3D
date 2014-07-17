#pragma strict
//游戏对像
public var obj1:GameObject;
//渲染器
private var render:Renderer;
//贴图
public  var texture:Texture;

function Start () {
	obj1=GameObject.Find("Cube");
	obj1.AddComponent("Test");
	render=obj1.GetComponent("Renderer");

}
function OnGUI(){
	if(GUILayout.Button("添加颜色",GUILayout.Width(100),GUILayout.Height(50))){
		//修改渲染颜色
		renderer.material.color=Color.green;
		//将贴图置空
		renderer.material.mainTexture=null;
	}
	if(GUILayout.Button("添加贴图",GUILayout.Width(100),GUILayout.Height(50))){
		renderer.material=null;
		renderer.material.mainTexture=texture;
		
	}
}

function Update () {

}