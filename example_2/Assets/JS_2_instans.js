#pragma strict

//使用ArrayList存储窗口
var winArrayList=new ArrayList();
//图标
var icon:Texture;

function Start () {
	//添加一个窗口
	winArrayList.Add(Rect(winArrayList.Count*100,50,150,100));
}

function OnGUI () {
	//遍历每个窗口，并且加入视图
	//winArrayList.Add(Rect(winArrayList.Count*100,50,150,100));
	var count=winArrayList.Count;
	for(var i=0;i<count;i++){
		winArrayList[i]=GUILayout.Window(i,winArrayList[i],AddWindow,"窗口ID："+i);
	}
}
function AddWindow(windowID:int){
	//开始一个水平布局
	GUILayout.BeginHorizontal();
	//绘制图标
	GUILayout.Label(icon,GUILayout.Width(50),GUILayout.Height(50));
	//绘制文字
	GUILayout.Label("这是一个新的窗口");
	//关闭布局
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("添加新窗口")){
		winArrayList.Add(Rect(winArrayList.Count*100,50,150,100));
	}
	if(GUILayout.Button("关闭窗口")){
		winArrayList.RemoveAt(windowID);
	}
	GUILayout.EndHorizontal();
	GUI.DragWindow(Rect(0,0,Screen.width,Screen.height));
	
}