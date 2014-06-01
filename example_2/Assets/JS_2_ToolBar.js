#pragma strict
//工具栏选择按钮的ID
private var select:int;
//工具栏显示按钮的字符串
private var barResource:String[];
//选择按钮是否被按下
private var selectToggle0:boolean;
private var selectToggle1:boolean;

function Start () {
	//初始化
	select=0;
	barResource=["第一个工具栏","第二个工具栏","第三个工具栏","第四个工具栏"];
	selectToggle0=false;
	selectToggle1=false;
}

function OnGUI () {
	//备份上一次工具栏选择的ID
	var oldSelect=select;
	//重新计算本次工具栏选择的ID
	select=GUI.Toolbar(Rect(10,10,barResource.Length*100,30),select,barResource);
	//如果两次选择的是不同的工具栏，将选择按钮全部释放掉
	if(oldSelect!=select){
		selectToggle0=false;
		selectToggle1=false;
	}
	//根据工具栏选择的ID显示不同的信息
	switch(select){
		case 0:
			selectToggle0=GUI.Toggle(Rect(10,50,180,30),selectToggle0,"第一个工具栏单项选择1");
			selectToggle1=GUI.Toggle(Rect(10,80,180,30),selectToggle1,"第一个工具栏单项选择2");
			break;
		case 1:
			selectToggle0=GUI.Toggle(Rect(10,50,150,30),selectToggle0,"第二个工具栏单项选择1");
			selectToggle1=GUI.Toggle(Rect(10,80,150,30),selectToggle1,"第二个工具栏单项选择2");
			break;
		case 2:
			selectToggle0=GUI.Toggle(Rect(10,50,150,30),selectToggle0,"第三个工具栏单项选择1");
			selectToggle1=GUI.Toggle(Rect(10,80,150,30),selectToggle1,"第三个工具栏单项选择2");
			break;
		case 3:
			selectToggle0=GUI.Toggle(Rect(10,50,150,30),selectToggle0,"第四个工具栏单项选择1");
			selectToggle1=GUI.Toggle(Rect(10,80,150,30),selectToggle1,"第四个工具栏单项选择2");
			break;
	}
	if(selectToggle0==false && selectToggle1==false){
		GUI.Label(Rect(10,110,150,30),"您未选择单选按钮");
	}
	if(selectToggle0!=false && selectToggle1==false){
		GUI.Label(Rect(10,110,150,30),"您选择了第一个单选按钮");
	}
	if(selectToggle0==false && selectToggle1!=false){
		GUI.Label(Rect(10,110,150,30),"您选择了第二个单选按钮");
	}
	if(selectToggle0!=false && selectToggle1!=false){
		GUI.Label(Rect(10,110,150,30),"您选择了两个单选按钮");
	}
}