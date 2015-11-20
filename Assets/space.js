#pragma strict
var fade : float = 0;
var space : SpriteRenderer;
var fly : GameObject;

function Start () 
{
	fly = GameObject.Find("Fly");
	space = GetComponent(SpriteRenderer);
	space.color = new Color(1f, 1f, 1f, fade);
}

function LateUpdate () 
{
	transform.position.z = 1;
	
	if ( fly.transform.position.y > 4500 && fade < 1 )
	{
		fade += 0.1 * Time.deltaTime;	
		space.color = new Color(1f, 1f, 1f, fade);
	}
}