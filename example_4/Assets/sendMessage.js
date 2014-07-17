#pragma strict
//向子类发送消息
gameObject.BroadcastMessage("ReceiveBroadcastMessage","A0------BroadcastMessage()");
//给自己发送消息
gameObject.SendMessage("ReceiveSendMessage","A0----SendMessage()");
//向父类发送消息
gameObject.SendMessageUpwards("ReceiveSendMessageUpwards","A0---SendMessageUpwards()");
//接收父类发送的消息
function ReceiveBroadcastMessage(str:String){
	Debug.Log("A0---Receive"+str);
}
function ReceiveSendMessage(str : String){
	Debug.Log("A0---Receive"+str);
}
function ReceiveSendMessageUpwards(str : String){
	Debug.Log("A0---Receive"+str);
}
function Start () {

}

function Update () {

}