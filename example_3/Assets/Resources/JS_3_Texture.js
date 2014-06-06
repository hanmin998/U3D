#pragma strict
//贴图
private var texSingle:Texture2D;
//贴图数组
private var texAll:Object[];

function OnGUI () {
	if(GUI.Button(Rect(0,10,100,50),"加载第一张贴图")){
		if(texSingle==null){
			//加载贴图
			texSingle=Resources.Load("Single/1");
		}
	}
	if(GUI.Button(Rect(0,130,100,50),"加载一组贴图")){
		if(texAll==null){
			//加载所有贴图
			texAll=Resources.LoadAll("texAll");
		}
	}
	//绘制贴图
	if(texSingle!=null){
		//绘制一张贴图
		GUI.DrawTexture(Rect(110,10,120,120),texSingle,ScaleMode.StretchToFill
		,true,0);
	}
	if(texAll!=null){
		for(var i=0;i<texAll.length;i++){
			//绘制贴图
			GUI.DrawTexture(Rect(110+i*120,130,120,120),texAll[i],
			ScaleMode.StretchToFill,true,0);
		}
	}
}

