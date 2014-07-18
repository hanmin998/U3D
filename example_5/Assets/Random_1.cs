using UnityEngine;
using System.Collections;

public class Random_1 : MonoBehaviour {

	// Use this for initialization
	void Start () {
		int a = Random.Range (1, 100);

		float b = Random.Range (1.0f, 10.0f);
		Debug.Log ("获取一个0-100之间的整形随机数" + a);
		Debug.Log ("获取一个0.0f-10.0f之间的浮点型随机数" + b);
	}
}
