#pragma strict
//贴图
var viewTexture0:Texture2D;
var viewTexture1:Texture2D;

function OnGUI () {
	//开始这个群组
	GUI.BeginGroup(new Rect(10,50,200,400));
	//显示贴图，坐标相对群组的点(10,50)的坐标
	GUI.DrawTexture(Rect(10,20,viewTexture0.width,viewTexture0.height),viewTexture0);
	//标签提示信息
	GUI.Label(Rect(10,150,100,40),"群组视图1");
	//按钮
	GUI.Button(Rect(10,190,100,40),"按钮");
	//结束这个群组
	GUI.EndGroup();
	//开始这个群组
	GUI.BeginGroup(new Rect(300,0,500,400));
	//显示贴图，坐标为相对群组的点（300,0）的坐标
	GUI.DrawTexture(Rect(10,20,viewTexture1.width,viewTexture1.height),viewTexture1);
	//显示提示信息
	GUI.Label(Rect(10,150,100,40),"群组视图2");
	//按钮
	GUI.Button(Rect(10,190,100,40),"按钮");
	GUI.EndGroup();
}