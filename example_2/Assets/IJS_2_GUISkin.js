#pragma strict
//自定义皮肤
var mySkin:GUISkin;
//单选控件是否被选中
private var choose:boolean=false;
//拖动窗口的位置
var windowRect:Rect=Rect(20,20,120,50);
//输入框中默认显示的内容
var edit:String="请输入字符串";

function OnGUI() {
	//设置GUI皮肤为自定义皮肤
	GUI.skin=mySkin;
	//绘制自定义按钮
	GUI.Button(Rect(100,100,100,100),"自定义按钮");
	//单项选择
	choose=GUI.Toggle(Rect(10,50,100,30),choose,"单选选择");
	//输入框
	edit=GUI.TextField(Rect(200,10,200,20),edit,25);
	//注册窗口
	windowRect=GUI.Window(0,windowRect,setWindow,"这是一个窗口");
	
}
//绘制窗口内容
function setWindow(windowID:int){
	//创建一个可以自由拖动的窗口
	GUI.DragWindow();
	//绘制自定义按钮
	GUI.Button(Rect(10,20,100,30),"自定义按钮");
}