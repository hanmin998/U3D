using UnityEngine;
using System.Collections;


public class CS_test : MonoBehaviour {
	public JS_test jsScript;

	// Use this for initialization
	void OnGUI () {
		if (GUI.Button (new Rect (100, 170, 200, 100), "C#调用JavaScript")) {
			jsScript=(JS_test)GetComponent("JS_test");
			jsScript.CallMe("我是来自C#");
		}
	}
	
	// Update is called once per frame
	public void CallMe (string test) {
		Debug.Log (test);
	}
}
