#pragma strict

//背景贴图
private var bg:Texture2D;
//标题贴图
private var title:Texture2D;
//动画数组
private var tex:Object[];
//动画X坐标
private var x:int;
//动画Y坐标
private var y:int;
//帧序列
private var nowFram:int;
//动画帧的总数
private var mFrameCount:int;
//限制一秒多少帧
private var fps:float=5;
//限制帧时间
private var time:float=0;

function Start () {
	//载入资源
	bg=Resources.Load("bg");
	title=Resources.Load("title");
	tex=Resources.LoadAll("anim");
	//初始化动画坐标
	x=Screen.width;
	y=200;
}

function OnGUI () {
	//绘制贴图
	GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height),bg,
	ScaleMode.StretchToFill,true,0);
	//绘制标题
	GUI.DrawTexture(Rect((Screen.width-title.width)>>1,30,title.width,title.height),
	title,ScaleMode.StretchToFill,true,0);
	//绘制帧动画
	DrawAnimation(tex,Rect(x,y,40,60));
	//动画越界检测
	x--;
	if(x<-42){
		x=480;
	}
	//绘制按钮
	GUI.Button(Rect(230,200,100,30),"开始游戏");
	GUI.Button(Rect(230,240,100,30),"读取进度");
	GUI.Button(Rect(230,280,100,30),"关于游戏");
	GUI.Button(Rect(230,320,100,30),"退出游戏");
}
function DrawAnimation(tex:Object[],rect:Rect){
	//绘制当前帧
	GUI.DrawTexture(rect,tex[nowFram],ScaleMode.StretchToFill,true,0);
	//计算限制帧时间
	time+=Time.deltaTime;
	//超过限制帧则切换图片
	if(time>=1.0/fps){
		//帧序列切换
		nowFram++;
		//限制帧清空
		time=0;
		//超过帧总数，从0开始
		if(nowFram>=tex.Length){
			nowFram=0;
		}
	}
}