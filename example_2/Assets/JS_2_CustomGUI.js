#pragma strict

//自定义皮肤
var mySkin:GUISkin;

function OnGUI () {
	//设置GUI皮肤为我们自定义的皮肤
	GUI.skin=mySkin;
	//绘制按钮，通过名称找到对应风格
	GUI.Button(Rect(0,100,300,100),"","Custom0");
	GUI.Button(Rect(300,100,300,100),"","Custom1");
}
