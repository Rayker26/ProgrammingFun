res = 10;
cx = 1000;
cy = 1000;
class entity{
	constructor(posx,posy,alife){
		this.pos = [posx,posy];
		this.life = alife;
		this.nt = 0;
	};
	check(){
		this.surr = 0;
		if(this.pos[0] >0){
			if(this.pos[1]>0){
				if(grid[this.pos[0]-1][this.pos[1]-1].life == 1){
					this.surr++;
					
				}
			}
			if(this.pos[1]<cy/res-1){
				if(grid[this.pos[0]-1][this.pos[1]+1].life == 1){
					this.surr++;
				}
			}
			if(grid[this.pos[0]-1][this.pos[1]].life == 1){
				this.surr++;
			}
			
		}
		if(this.pos[0] <cx/res-1){
			if(this.pos[1]>0){
				if(grid[this.pos[0]+1][this.pos[1]-1].life == 1){
					this.surr++;
					
				}
			}
			if(this.pos[1]<cy/res-1){
				if(grid[this.pos[0]+1][this.pos[1]+1].life == 1){
					this.surr++;
				}
			}
			if(grid[this.pos[0]+1][this.pos[1]].life == 1){
				this.surr++;
			}
			
		}
		if(this.pos[1]>0){
			if(grid[this.pos[0]][this.pos[1]-1].life == 1){
				this.surr++;
			}
		}
		if(this.pos[1]<cy/res-1){
			if(grid[this.pos[0]][this.pos[1]+1].life == 1){
				this.surr++;
			}
		}
		
		if(this.surr == 3&&this.life == 0){
			this.nt = 1;
		}
		if(this.surr <=1){
			this.nt = 0;
		}
		if(this.surr <= 3 &&this.surr >=2 && this.life == 1){
			this.nt = 1;
		}
		
		if(this.surr >3){
			this.nt = 0;
		}
		
		
	}
	update(){
		this.life = this.nt
	}
	drawThis(){
		if(this.life==1){
			fill(255);
		}else{
			fill(0);
		}
		stroke(5);
		rect(this.pos[0]*res,this.pos[1]*res,res-1,res-1);
	}

} 
function setup() 
{
	time = 0;
	speed = 1;
	pause = true;
	button = createButton('Pause');
  	button.position(19, 19);
  	button.mousePressed(setPause);
	grid = [];
	for(i=0;i<cx/res;i++){
		grid.push([]);
		for(o=0;o<cy/res;o++){
			grid[i].push(new entity(i,o,0));
		};
	};
	createCanvas(cx,cy);
}
function setPause(){
	if(pause){
		pause = false;
	}else{
		pause = true;
	}
}
function mousePressed() {
	if(grid[floor(mouseX/res)][floor(mouseY/res)].life==0){
		grid[floor(mouseX/res)][floor(mouseY/res)].life = 1;
	}else{
		grid[floor(mouseX/res)][floor(mouseY/res)].life = 0;
	}
  }
function draw()
{
	
	if(pause){
		
		for(i=0;i<grid.length;i++){
			for(o=0;o<grid[i].length;o++){
				grid[i][o].drawThis();
				grid[i][o].check();
			}
		}
		textSize(20);
		fill(255,0,0);
		text("Pause", cx-60,cy-5);
	}else{
	
	time++;
		if(time >= speed){
			background(0);
			for(i=0;i<grid.length;i++){
				for(o=0;o<grid[i].length;o++){
					grid[i][o].check();
				}
			}
			for(i=0;i<grid.length;i++){
				for(o=0;o<grid[i].length;o++){
					grid[i][o].update();
					grid[i][o].drawThis();
				}
			}
			time = 0;
		}
	}
	if(mouseX<cx&&mouseY<cy&&mouseX>0&&mouseY>0){
		console.clear();
		print(floor(mouseX/res));
		print(floor(mouseY/res));
		print("life: "+grid[floor(mouseX/res)][floor(mouseY/res)].life);
		print("nt: "+grid[floor(mouseX/res)][floor(mouseY/res)].nt);
		print("surr: "+grid[floor(mouseX/res)][floor(mouseY/res)].surr);

	}
}
