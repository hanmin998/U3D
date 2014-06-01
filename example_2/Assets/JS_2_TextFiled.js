#pragma strict

//用户名
private var username:String;
//密码
private var password:String;
//提示信息
private var info:String;
function Start () {
	info="请您输入正确的用户名与密码";
	username="请输入用户名";
	password="请输入密码";
}

function OnGUI () {
	//显示提示信息内容
	GUI.Label(Rect(600,10,Screen.width,30),info);
	if(GUI.Button(Rect(600,150,50,40),"登陆")){
		//点击按钮修改提示信息
		info="您输入的用户名为："+username+"您输入的密码为："+password;
	}
	//编辑框提示信息
	GUI.Label(Rect(600,40,100,50),"用户名：");
	GUI.Label(Rect(600,100,100,50),"密码：");
	//获取输入框的内容
	username=GUI.TextField(Rect(650,40,100,30),username,15);
	password=GUI.PasswordField(Rect(650,100,100,30),password,"*"[0],15);
}