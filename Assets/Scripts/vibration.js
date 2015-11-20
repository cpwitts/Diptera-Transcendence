#pragma strict
var camObj : GameObject;
var player : GameObject;
var playerRB : Rigidbody2D;

function Start () 
{
	camObj = GameObject.Find("Main Camera");
	player = GameObject.Find("Fly");
	playerRB = player.GetComponent("Rigidbody2D");
}

function FixedUpdate () 
{
	if(playerRB.velocity.y > 10)
	{
		transform.localPosition.x = 0;
		transform.position.x += Random.Range ( 0.05 * camObj.transform.position.z / 2,  -0.05 * camObj.transform.position.z / 2);
	}
}