#pragma strict


//接收外部赋值字符串
var str:String;
//接收外部赋值贴图
var imageTexture:Texture;
//贴图宽度
private var imageWidth:int;
//贴图高度
private var imageHeight:int;
//当前屏幕宽度
private var screenWidth:int;
//当前屏幕高度
private var screenHeight:int;
function Start () {
	//得到屏幕宽高
	screenWidth=Screen.width;
	screenHeight=Screen.height;
	//得到图片宽高
	imageWidth=imageTexture.width;
	imageHeight=imageTexture.height;
}

function OnGUI () {
	//将文字内容显示在屏幕中
	GUI.Label(Rect(100,10,100,30),str);
	GUI.Label(Rect(100,40,100,30),"当前屏幕宽："+screenWidth);
	GUI.Label(Rect(100,80,100,30),"当前屏幕高："+screenHeight);
	//将贴图显示在屏幕中
	GUI.Label(Rect(100,120,imageWidth,imageHeight),imageTexture);
}
