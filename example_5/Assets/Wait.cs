using UnityEngine;
using System.Collections;

public class Wait : MonoBehaviour {

	// Use this for initialization
	IEnumerator Start () {
		Debug.Log ("开始等待"+Time.time);
		yield return new WaitForSeconds (2);
		Debug.Log ("结束等待"+Time.time);
	}
}
