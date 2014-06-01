#pragma strict
//滚动条位置
var scrollPosition:Vector2;

function Start () {
	//初始化滚动条位置
	scrollPosition[0]=50;
	scrollPosition[1]=50;
}

function OnGUI () {
	//开始滚动视图
	scrollPosition=GUI.BeginScrollView(Rect(400,0,200,200),scrollPosition,Rect(400,0,Screen.width,300),true,true);
	GUI.Label(Rect(200,100,Screen.width,30),"测试滚动视图，测试滚动视图，测试滚动视图，测试滚动视图。");
	//结束滚动视图
	GUI.EndScrollView();
}