#pragma strict

var rb : Rigidbody2D;
var jumpPower : float = 90;
var frames : float = 0;
var lane : int = 2;
var camObj : GameObject;
var cam : cameraScript;
var velocity : float;
var stage1 : ParticleSystem;
var stage2 : ParticleSystem;
var stage3 : ParticleSystem;

function Start () 
{
	rb = GetComponent(Rigidbody2D);
	camObj = GameObject.Find("Main Camera");
    cam = camObj.GetComponent("cameraScript");
}

function Update () 
{
	velocity = rb.velocity.y;

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
	
	if ( stage1.isStopped && velocity > 15 )
	{
		stage1.Play(true);
	}
	
	else if ( velocity < 15 && stage1.isPlaying )
	{
		stage1.Stop(true);
	}
	
	if ( stage2.isStopped && velocity > 60 )
	{
		stage2.Play(true);
	}
	
	else if ( velocity < 60 && stage2.isPlaying )
	{
		stage2.Stop(true);
	}
	
	if ( stage3.isStopped && velocity > 180 )
	{
		stage3.Play(true);
	}
	
	else if ( velocity < 180 && stage3.isPlaying )
	{
		stage3.Stop(true);
	}
	
	if ( transform.position.y > 5000 )
	{
		rb.gravityScale = 0;
	}
}

function OnCollisionEnter2D(other : Collision2D)
{
	if (other.gameObject.name == ("Web(Clone)"))
	{
		Destroy(other.gameObject);
		rb.AddForce(new Vector3 (0, -200, 0));
	}
}