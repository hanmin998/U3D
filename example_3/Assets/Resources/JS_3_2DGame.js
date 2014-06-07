#pragma strict

//主角对象
private var hero:GameObject;
//按键是否被按下
private var keyUp:boolean;
private var keyDown:boolean;
private var keyLeft:boolean;
private var keyRight:boolean;
//记录当前时间
private var time:float;
//限制一秒多少帧
private var fps:float=10;
//帧序列
private var nowFram:int;
//动画数组
private var animUp:Object[];
private var animDown:Object[];
private var animLeft:Object[];
private var animRight:Object[];
private var nowAnim:Object[];
private var backAnim:Object[];
function Start () {
	//得到主角对象
	hero=GameObject.Find("hero");
	//得到上下左右四组动画
	animUp=Resources.LoadAll("up");
	animDown=Resources.LoadAll("down");
	animLeft=Resources.LoadAll("left");
	animRight=Resources.LoadAll("right");
	nowAnim=animDown;
	backAnim=animDown;
}

function OnGUI() {
	//控制主角移动的按钮
	keyUp=GUILayout.RepeatButton("向上");
	keyDown=GUILayout.RepeatButton("向下");
	keyLeft=GUILayout.RepeatButton("向左");
	keyRight=GUILayout.RepeatButton("向右");
}
function FixedUpdate(){
	if(keyUp){
		//向上移动
		SetAnimation(animUp);
		hero.transform.Translate(-Vector3.forward*0.001f);
	}
	if(keyDown){
		//向下移动
		SetAnimation(animDown);
		hero.transform.Translate(Vector3.forward*0.001f);
	}
	if(keyLeft){
		//向左移动
		SetAnimation(animLeft);
		hero.transform.Translate(Vector3.right*0.001f);
	}
	if(keyRight){
		//向右移动
		SetAnimation(animRight);
		hero.transform.Translate(-Vector3.right*0.001f);
	}
	//播放动画
	DrawAnimation(nowAnim);
}
function DrawAnimation(tex:Object[]){
	//计算限制帧的时间
	time+=Time.deltaTime;
	//超过限制帧则切换贴图
	if(time>1.0/fps){
		//帧序列切换
		nowFram++;
		//限制帧清空
		time=0;
		//超过帧动画总数时，从0开始
		if(nowFram>=tex.Length){
			nowFram=0;
		}
	}
	//将对应的贴图赋予主角对象
	hero.renderer.material.mainTexture=tex[nowFram];
}
function SetAnimation(tex:Object[]){
	//设置播放动画
	nowAnim=tex;
	if(!backAnim.Equals(nowAnim)){
		nowFram=0;
		backAnim=nowAnim;
	}
}