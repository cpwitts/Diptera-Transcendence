#pragma strict

var initOffset : Vector3 = new Vector3(0, 2.5, -10);
var offset : Vector3;
var player : GameObject;
var playerRB : Rigidbody2D;

function Start () 
{
	player = GameObject.Find("Fly");
	playerRB = player.GetComponent("Rigidbody2D");
	offset = initOffset;
}

function Update () 
{
	if(playerRB.velocity.y > 0)
	{
		offset = initOffset + new Vector3(0, playerRB.velocity.y / 4, -playerRB.velocity.y);
	}
		transform.position = new Vector3 (0, player.transform.position.y, 0) + offset;
}