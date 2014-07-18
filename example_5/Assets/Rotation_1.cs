using UnityEngine;
using System.Collections;

public class Rotation_1 : MonoBehaviour {
	//是否开始插值旋转
	bool isRotation=false;
	// Use this for initialization
	void OnGUI () {
		if (GUILayout.Button ("旋转固定角度", GUILayout.Height (50))) {
			gameObject.transform.rotation=Quaternion.Euler(0.0f,50.0f,0.0f);		

		}
		if (GUILayout.Button ("插值旋转固定角度", GUILayout.Height (50))) {
			isRotation=true;		
		}
	
	}
	
	// Update is called once per frame
	void Update () {
		//开始插值旋转
		if (isRotation) {
			gameObject.transform.rotation=Quaternion.Slerp
				(gameObject.transform.rotation,Quaternion.Euler(0.0f,50.0f,0.0f),
				 Time.time*0.1f);		

		}
	
	}
}
