#pragma strict
var fly : GameObject;
var playerScript : playerScript;
var scale : float;
var rb : Rigidbody2D;

function Start () 
{
	fly = GameObject.Find("Fly");
    playerScript = fly.GetComponent("playerScript");
    rb = GetComponent(Rigidbody2D);
}

function Update () 
{
	if ( playerScript.velocity > 0)
	{
		scale = 4 - playerScript.velocity / 80;
		transform.localScale = new Vector3(scale, scale, 1);
		rb.velocity.y = playerScript.velocity / 1.5;
	}
	
	if ( fly.transform.position.y > 4500 )
	{
		gameObject.SetActive(false);
	}
}

function OnTriggerExit2D ( other : Collider2D )
{
	if( other.gameObject.name == "Fly" )
	{
		transform.position = other.transform.position + new Vector3 (0, 0, 1);
	}
}

