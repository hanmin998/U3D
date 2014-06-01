#pragma strict

//按钮贴图
var buttonTexture:Texture2D;
//提示信息
private var str:String;
//时间计数器
private var frameTime:int;

function Start () {
	//初始化赋值
	str="请你点击按钮";
}

function OnGUI () {
	//显示提示信息内容
	GUI.Label(Rect(300,10,Screen.width,30),str);
	if(GUI.Button(Rect(300,140,buttonTexture.width,buttonTexture.height),buttonTexture)){
		//点击按钮修改提示信息
		str="您点击了图片按钮";
	}
	//设置按钮中文字颜色
	GUI.color=Color.green;
	//设置按钮的背景色
	GUI.backgroundColor=Color.red;
	if(GUI.Button(Rect(300,50,70,30),"文字按钮")){
		//点击按钮修改提示信息
		str="您点击了文字按钮";
	}
	//设置按钮中文字颜色
	GUI.color=Color.yellow;
	//设置按钮的背景色
	GUI.backgroundColor=Color.blue;
	if(GUI.RepeatButton(Rect(300,100,100,30),"按钮按下中")){
		//点击按钮修改提示信息
		str="按钮按下中的时间："+frameTime;
		//时间计数器
		frameTime++;
	}
}