#pragma strict
var progressStyle : GUIStyle;
var winStyle : GUIStyle;
var fly : GameObject;
var time : float;
var finished : boolean = false;
var percent : int;

function Start()
{
	fly = GameObject.Find("Fly");
}

function Update()
{
	percent = fly.transform.position.y / 50;
	
	if ( percent > 100 )
	{
		percent = 100;
	}
	
	progressStyle.fontSize = 10 + percent * 0.4;
	if ( !finished )
	{
		time = Time.timeSinceLevelLoad;
	}
}

function OnGUI()
{
	GUI.Box(Rect(Screen.width/2 - 75, Screen.height - 50,150,45), percent + "%", progressStyle);
	
	if ( fly.transform.position.y > 5000 )
	{
		GUI.Box(Rect(Screen.width/2 - 75, Screen.height/2 - 50,150,45), "You win! \nYour time:\n" + time.ToString("F2") + " seconds!", winStyle);
		finished = true;
	}
}