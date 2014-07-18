using UnityEngine;
using System.Collections;

public class time : MonoBehaviour {

	// Use this for initialization
	void OnGUI () {
		GUILayout.Label ("当前游戏时间："+Time.time);
		GUILayout.Label ("上一帧所消耗的时间："+Time.deltaTime);
		GUILayout.Label ("固定增量时间："+Time.fixedTime);
		GUILayout.Label ("上一帧所消耗固定时间："+Time.fixedDeltaTime);
	}
	

}
