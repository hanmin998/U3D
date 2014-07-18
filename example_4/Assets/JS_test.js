#pragma strict

function OnGUI () {
	if(GUI.Button(Rect(100,50,200,100),"JavaScript调用C#")){
		var cs=this.GetComponent("CS_test");
		cs.CallMe("我是来自JavaScript");
	}
}

function CallMe (test:String) {
	Debug.Log(test);
}