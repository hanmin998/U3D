#pragma strict

var obj:GameObject;
var i=1;
function Start () {
	//获得球体对象
	obj=GameObject.Find("Sphere");
}
function OnGUI(){
		if(GUILayout.Button("开始克隆实例",GUILayout.Height(50),GUILayout.Width(200))){
		//克隆一个obj实例
		
		var clone:GameObject=Instantiate(obj,obj.transform.position*i,
		obj.transform.rotation);
		i++;
		Debug.Log(i);
		//5秒后销毁
		Destroy(clone,5);
	}
}

function Update () {

}