﻿#pragma strict

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
var animator : Animator;
var boost : AudioSource;

function Start () 
{
	rb = GetComponent(Rigidbody2D);
	camObj = GameObject.Find("Main Camera");
    cam = camObj.GetComponent("cameraScript");
    animator = GetComponent("Animator");
    boost = GetComponent("AudioSource");
}

function Update () 
{
	velocity = rb.velocity.y;

	if(Input.GetKeyDown(KeyCode.Return))
	{
		frames = Time.deltaTime * 3;
		animator.SetBool("fly", true);
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
		frames -= Time.deltaTime;
		if (frames <= 0)
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
	
	else if ( velocity < 10 && stage1.isPlaying )
	{
		stage1.Stop(true);
	}
	
	if ( stage2.isStopped && velocity > 60 )
	{
		stage2.Play(true);
	}
	
	else if ( velocity < 50 && stage2.isPlaying )
	{
		stage2.Stop(true);
	}
	
	if ( stage3.isStopped && velocity > 180 )
	{
		stage3.Play(true);
	}
	
	else if ( velocity < 170 && stage3.isPlaying )
	{
		stage3.Stop(true);
	}
	
	if ( transform.position.y > 5000 )
	{
		rb.gravityScale = 0;
	}
	
	if (Input.GetKey("escape"))
	{
		Application.Quit();
	}

	if (Input.GetKeyDown(KeyCode.T))
	{
		Application.LoadLevel (Application.loadedLevel);
	}	
}

function OnCollisionEnter2D(other : Collision2D)
{
	if (other.gameObject.name == ("Web(Clone)"))
	{
		Destroy(other.gameObject);
		rb.AddForce(new Vector3 (0, -400, 0));
	}
}

function OnTriggerEnter2D(other : Collider2D)
{
	if (other.gameObject.name == ("Nectar(Clone)"))
	{
		Destroy(other.gameObject);
		rb.AddForce(new Vector3 (0, 200, 0));
		boost.Play();
	}
}