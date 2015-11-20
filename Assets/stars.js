#pragma strict
var fly : GameObject;

function Start () 
{
	fly = GameObject.Find("Fly");
}

function Update () 
{
	if (fly.transform.position.y > 5000)
	{
		transform.position.x = 0;
	}
}