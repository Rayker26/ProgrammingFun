class branch{
	constructor(x,y,length,dir){
		this.length = length;
		
		line(x,y,x+Math.sign(dir)*(sqrt(Math.abs(dir))*length),y-((sqrt(1-Math.abs(dir)))*length))
		if(length>=5){
			new branch(x+Math.sign(dir)*(sqrt(Math.abs(dir))*length),y-((sqrt(1-Math.abs(dir))*length)),length*0.75,dir-angle);
			new branch(x+Math.sign(dir)*(sqrt(Math.abs(dir))*length),y-((sqrt(1-Math.abs(dir))*length)),length*0.75,dir+angle);
		}
	}
}
print("hey");
angle = 0;
timer = 0;
fps = 0;
let slider;
function setup() 
{
	createCanvas(400, 400);
	slider = createSlider(0,1,0,0.01);
 	slider.position(10, 10);
  	slider.style('width', '80px');
	
	
}

function draw()
{
	angle = slider.value();
	timer += deltaTime;
	background(255);
	if(timer>=1000){
		fps = frameCount;
		frameCount = 0;
		timer = 0;
		
	}
	
	fill(200,0,0);
	textSize(10);
	text(fps,20,40);
	fill(0);
	new branch(200,400,75,0);
	
}
