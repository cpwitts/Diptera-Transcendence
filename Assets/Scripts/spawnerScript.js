#pragma strict

var web : Rigidbody2D;
var spawnTime : float = 0.5f;            // How long between each spawn.	
var camObj : GameObject;
var cam : cameraScript;
var fly : GameObject;
var playerScript : playerScript;

function Start () 
{
    InvokeRepeating ("Spawn", 3, spawnTime);
    camObj = GameObject.Find("Main Camera");
    cam = camObj.GetComponent("cameraScript");
    fly = GameObject.Find("Fly");
    playerScript = fly.GetComponent("playerScript");
}

function Spawn ()
{
	var webInstance:Rigidbody2D;

	if ( camObj.transform.position.y < 4500 )
	{
		var chanceweb = Random.Range(0, 100);
		if(chanceweb > 25)
		{
			webInstance = Instantiate(web, Vector3(0, -camObj.transform.position.z, 0) + camObj.transform.position - cam.offset , Quaternion.Euler(Vector3(0,0,0)));
			webInstance.velocity.y = playerScript.velocity / 2;
		}
	}
}