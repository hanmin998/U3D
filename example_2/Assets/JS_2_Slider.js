#pragma strict
//纵向滑动条数值
var verticalValue:int=0;
//横向滑动条数值
var horizontalValue:float=0.0f;

function OnGUI () {
	//计算滑动进度
	verticalValue=GUI.VerticalSlider(Rect(300,150,40,100),verticalValue,100,0);
	horizontalValue=GUI.HorizontalSlider(Rect(200,150,100,40),horizontalValue,0.0f,100.0f);
	//将滑动进度显示在屏幕中
	GUI.Label(Rect(10,170,Screen.width,30),"纵向滑动条当前进度："+verticalValue+"%");
	GUI.Label(Rect(10,190,Screen.width,30),"横向滑动条当前进度："+horizontalValue+"%");
	
}