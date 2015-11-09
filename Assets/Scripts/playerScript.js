#pragma strict

var rb : Rigidbody2D;
var jumpPower : float = 90;
var frames : float = 0;
var lane : int = 2;
var camObj : GameObject;
var cam : cameraScript;

function Start () 
{
	rb = GetComponent(Rigidbody2D);
	camObj = GameObject.Find("Main Camera");
    cam = camObj.GetComponent("cameraScript");
}

function Update () 
{
	if(Input.GetKeyDown(KeyCode.Return))
	{
		frames = Time.deltaTime * 3;
		print("frames set");
		print(Time.deltaTime);
	}
	
	if(Input.GetKeyDown(KeyCode.Q) && lane > 1)
	{
		lane--;
	}
	
	if(Input.GetKeyDown(KeyCode.E) && lane < 3)
	{
		lane++;
	}
	
	if (frames > 0)
	{
		rb.AddForce(new Vector3 (0, (jumpPower/3), 0));
		print("jump applied");
		frames -= Time.deltaTime;
		if (frames < 0)
		{
			frames = 0;
		}
	}
	
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

function OnCollisionEnter2D(other : Collision2D)
{
	if (other.gameObject.name == ("Web(Clone)"))
	{
		Destroy(other.gameObject);
		Destroy(this.gameObject);
	}
}