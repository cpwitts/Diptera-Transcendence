#pragma strict
var camObj : GameObject;
var cam : cameraScript;
var lane : int;
var fly : GameObject;
var playerScript : playerScript;
var scale : float;

function Start () 
{
	lane = Random.Range(0, 3) + 1;
	camObj = GameObject.Find("Main Camera");
    cam = camObj.GetComponent("cameraScript");
    fly = GameObject.Find("Fly");
    playerScript = fly.GetComponent("playerScript");
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
	
	if ( playerScript.velocity > 0)
	{
		scale = 1 + playerScript.velocity / 10;
		transform.localScale = new Vector3(scale, scale, 1);
	}
	
	if ( transform.position.y < camObj.transform.position.y + camObj.transform.position.z)
	{
		Destroy(gameObject);
	}
}