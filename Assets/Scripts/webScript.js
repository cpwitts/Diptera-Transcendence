#pragma strict
var camObj : GameObject;
var cam : cameraScript;
var lane : int;

function Start () 
{
	lane = Random.Range(0, 3) + 1;
	camObj = GameObject.Find("Main Camera");
    cam = camObj.GetComponent("cameraScript");
}

function Update () 
{
	if (lane == 1)
	{
		transform.position.x = camObj.transform.position.z / 2;
	}
	else if (lane == 2)
	{
		transform.position.x = 0;
	}
	else
	{
		transform.position.x = -camObj.transform.position.z / 2;
	}
}