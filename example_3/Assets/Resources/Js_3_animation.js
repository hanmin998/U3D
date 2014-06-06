#pragma strict
//动画数组
private var anim:Object[];
//帧序列
private var nowFram:int;
//动画帧的总数
private var mFrameCount:int;
//限制一秒多少帧
private var fps:float=5;
//限制帧的时间
private var time:float=0;
function Start () {
	//得到帧动画中的所有图片资源
	anim=Resources.LoadAll("animation");
	//得到该动画共有多少帧
	mFrameCount=anim.Length;
}

function OnGUI () {
	//绘制动画
	DrawAnimation(anim,Rect(100,100,32,48));
}
function DrawAnimation(tex:Object[],rect:Rect){
	//绘制动画信息
	GUILayout.Label("当前动画播放：第"+nowFram+"帧");
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
		//超过帧动画总是，从0开始
		if(nowFram>=mFrameCount){
			nowFram=0;
		}
	}
}