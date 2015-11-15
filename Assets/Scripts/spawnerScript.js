#pragma strict

var web : Rigidbody2D;
var spawnTime : float = 0.5f;            // How long between each spawn.	
var camObj : GameObject;
var cam : cameraScript;
function Start () 
{
    InvokeRepeating ("Spawn", spawnTime, spawnTime);
    camObj = GameObject.Find("Main Camera");
    cam = camObj.GetComponent("cameraScript");
}

function Spawn ()
{
	var webInstance:Rigidbody2D;

	if ( camObj.transform.position.y < 5000 )
	{
		var chanceweb = Random.Range(0, 100);
		if(chanceweb > 25)
		{
			webInstance = Instantiate(web, Vector3(0, -camObj.transform.position.z, 0) + camObj.transform.position - cam.offset , Quaternion.Euler(Vector3(0,0,0)));
		}
	}
}