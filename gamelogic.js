window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var playmap = new function() {
	this.map = document.getElementById("playmap");
	this.leftBound = 4;
	this.topBound = 2;
	this.rightBound = this.map.clientWidth - this.leftBound;
	this.bottomBound = this.map.clientHeight - this.topBound;
	this.warpTop = 262;
	this.warpBottom = 302
	this.vertWallCoords = [
		// xWall, xTop, xBottom
		[this.leftBound, this.topBound, this.warpTop], // 4, 2, 262
		[this.leftBound, this.warpBottom, this.bottomBound], // 4, 302, 602
		[44, 42, 82], [104, 42, 82], // box1
		[144, 42, 82], [229, 42, 82], // box2
		[269, 2, 82], [289, 2, 82], // box3
		[329, 42, 82], [414, 42, 82], // box4
		[454, 42, 82], [514, 42, 82], // box5
		[44, 122, 142], [104, 122, 142], // box6
		[144, 122, 261], [164, 122, 261], // box7
		[164, 182, 202], [229, 182, 202], // box8
		[204, 122, 142], [352, 122, 142], // box9
		[269, 142, 202], [289, 142, 202], // box10
		[329, 182, 202], [394, 182, 202], // box11
		[394, 122, 261], [414, 122, 261], // box12
		[454, 122, 142], [514, 122, 142], // box13
		[0, 182, 262], [104, 182, 262], // box14
		[454, 182, 262], [558, 182, 262], // box15
		[204, 242, 321], [354, 242, 321], // box16
		[0, 302, 382], [104, 302, 382], // box17
		[144, 302, 382], [164, 302, 382], // box18
		[204, 362, 382], [354, 362, 382], // box19
		[394, 302, 382], [414, 302, 382], // box20
		[454, 302, 382], [558, 302, 382], // box21
		[44, 422, 442], [104, 422, 442], // box22
		[144, 422, 442], [229, 422, 442], // box23
		[269, 382, 442], [289, 382, 442], // box24
		[329, 422, 442], [414, 422, 442], // box25
		[454, 422, 442], [514, 422, 442], // box26
		[0, 482, 502], [44, 482, 502], // box27
		[84, 442, 502], [104, 442, 502], // box28
		[144, 482, 542], [164, 482, 542], // box29
		[204, 482, 502], [352, 482, 502], // box30
		[394, 482, 542], [414, 482, 542], // box31
		[454, 442, 502], [474, 442, 502], // box32
		[514, 482, 502], [548, 482, 502], // box33
		[44, 542, 562], [229, 542, 562], // box34
		[269, 502, 562], [289, 502, 562], // box35
		[329, 542, 562], [514, 542, 562], // box36
		[this.rightBound, this.topBound, this.warpTop], // 554, 2, 602
		[this.rightBound, this.warpBottom, this.bottomBound], // 4, 302, 602
	];
	this.horzWallCoords = [
		// yWall, yLeft, yRight
		[this.topBound, this.leftBound, this.rightBound], // 2, 4, 554
		[42, 44, 104], [82, 44, 104], // box1
		[42, 144, 229], [82, 144, 229], // box2
		[2, 269, 289], [82, 269, 289], // box3
		[42, 329, 414], [82, 329, 414], // box4
		[42, 454, 514], [82, 454, 514], // box5
		[122, 44, 104], [142, 44, 104], // box6
		[122, 144, 164], [261, 144, 164], // box7
		[182, 164, 229], [202, 164, 229], // box8
		[122, 204, 352], [142, 204, 352], // box9
		[142, 269, 289], [202, 269, 289], // box10
		[182, 329, 394], [202, 329, 394], // box11
		[122, 394, 414], [261, 394, 414], // box12
		[122, 454, 514], [142, 454, 514], // box13
		[182, 0, 104], [262, 0, 104], // box14
		[182, 454, 558], [262, 454, 558], // box15
		[242, 204, 354], [321, 204, 354], // box16
		[302, 0, 104], [382, 0, 104], // box17
		[302, 144, 164], [382, 144, 164], // box18
		[362, 204, 354], [382, 204, 354], // box19
		[302, 394, 414], [382, 394, 414], // box20
		[302, 454, 558], [382, 454, 558], // box21
		[422, 44, 104], [442, 44, 104], // box22
		[422, 144, 229], [442, 144, 229], // box23
		[382, 269, 289], [442, 269, 289], // box24
		[422, 329, 414], [442, 329, 414], // box25
		[422, 454, 514], [442, 454, 514], // box26
		[482, 0, 44], [502, 0, 44], // box27
		[442, 84, 104], [502, 84, 104], // box28
		[482, 144, 164], [542, 144, 164], // box29
		[482, 204, 352], [502, 204, 352], // box30
		[482, 394, 414], [542, 394, 414], // box31
		[442, 454, 474], [502, 454, 474], // box32
		[482, 514, 548], [502, 514, 548], // box33
		[542, 44, 229], [562, 44, 229], // box34
		[502, 269, 289], [562, 269, 289], // box35
		[542, 329, 514], [562, 329, 514], // box36
		[this.bottomBound, this.leftBound, this.rightBound] // 602, 4, 554
	];
}

var keydown = false;
function setKeydown(e) {
	var e = e || window.event;
    switch (e.keyCode){
    	case 37:
    		keydown = 'left';
    		pacman.setDirection();
        	break;
	    case 38:
	    	keydown = 'up';
	    	pacman.setDirection();
	        break;
	    case 39:
	    	keydown = 'right';
	    	pacman.setDirection();
	        break;
	    case 40:
	    	keydown = 'down';
	    	pacman.setDirection();
	        break;
	    default:
	    	break;
 	}
}
function unsetKeydown(e) {
	keydown = false;
}

function Character(name,element) {
	this.characterName = name;
	this.character = element;
	this.direction = 'right';
	this.offset = 40;
	this.xPos = playmap.leftBound;
	this.yPos = playmap.topBound;
	this.fps = 30;
	this.speedStep = 5;
	this.moveMouthSpeed = this.fps / 5;
	this.timeout = 1000 / this.fps;
	this.moveMouthCounter = 0;
	this.mouthOpen = true;

	requestAnimationFrame(this.move.bind(this));
}
Character.prototype.setDirection = function(newDirection) {
	if(newDirection !== undefined) {
		keydown = newDirection;
	}
    var currentDirection = this.direction;
    if(this.checkBoundary(keydown)) {
		this.character.className = this.character.className.replace(currentDirection,keydown);
    	this.direction = keydown;
    }
}
Character.prototype.moveMouth = function() {
	if(this.moveMouthCounter++ == this.moveMouthSpeed) {
		if(this.mouthOpen) {
			this.mouthOpen = false;
			this.character.className += ' closed';
		}
		else {
			this.mouthOpen = true;
			this.character.className = this.character.className.replace(' closed','');
		}
		this.moveMouthCounter = 0;
	}
}
Character.prototype.openMouth = function() {
	if(!this.mouthOpen) {
		this.mouthOpen = true;
		this.character.className = this.character.className.replace(' closed','');
	}
}
Character.prototype.checkBoundary = function(side) {
	var nextStep;
	var valid = true;
	switch(side) {
		case 'left':
			var xWall, xTop, xBottom;
			nextStep = this.xPos - this.speedStep;
			for(var i = 0;i < playmap.vertWallCoords.length;i++) {
				xWall = playmap.vertWallCoords[i][0];
				xTop = playmap.vertWallCoords[i][1];
				xBottom = playmap.vertWallCoords[i][2];
				if((nextStep < xWall) && (nextStep >= xWall - this.speedStep)) {
					if((this.yPos >= xTop && this.yPos < xBottom) || 
						(this.yPos + this.offset > xTop && this.yPos + this.offset < xBottom) || 
						(this.yPos < xTop && this.yPos + this.offset > xTop) || 
						(this.yPos < xBottom && this.yPos + this.offset > xBottom)) {
							valid = false;
							break;
					}
				}
			}
			if(this.yPos == playmap.warpTop && nextStep <= playmap.leftBound - this.offset) {
				this.xPos = playmap.rightBound;
			}
			break;
		case 'up':
			var yWall, yLeft, yRight;
			nextStep = this.yPos - this.speedStep;
			for(var i = 0;i < playmap.horzWallCoords.length;i++) {
				yWall = playmap.horzWallCoords[i][0];
				yLeft = playmap.horzWallCoords[i][1];
				yRight = playmap.horzWallCoords[i][2];
				if((nextStep < yWall) && (nextStep >= yWall - this.speedStep)) {
					if((this.xPos > yLeft && this.xPos < yRight) || 
						(this.xPos + this.offset > yLeft && this.xPos + this.offset < yRight) || 
						(this.xPos < yLeft && this.xPos + this.offset > yLeft) || 
						(this.xPos < yRight && this.xPos + this.offset > yRight)) {
							valid = false;
							break;
					}
				}
			}
			break;
		case 'right':
			var xWall, xTop, xBottom;
			nextStep = this.xPos + this.speedStep;
			for(var i = 0;i < playmap.vertWallCoords.length;i++) {
				xWall = playmap.vertWallCoords[i][0];
				xTop = playmap.vertWallCoords[i][1];
				xBottom = playmap.vertWallCoords[i][2];
				if((nextStep > xWall - this.offset) && (nextStep < xWall)) {
					if((this.yPos >= xTop && this.yPos < xBottom) || 
						(this.yPos + this.offset > xTop && this.yPos + this.offset < xBottom) || 
						(this.yPos < xTop && this.yPos + this.offset > xTop) || 
						(this.yPos < xBottom && this.yPos + this.offset > xBottom)) {
							valid = false;
							break;
					}
				}
			}
			if(this.yPos == playmap.warpTop && nextStep >= playmap.rightBound - this.offset) {
				this.xPos = playmap.leftBound - this.offset;
			}
			break;
		case 'down':
			var yWall, yLeft, yRight;
			nextStep = this.yPos + this.speedStep;
			for(var i = 0;i < playmap.horzWallCoords.length;i++) {
				yWall = playmap.horzWallCoords[i][0];
				yLeft = playmap.horzWallCoords[i][1];
				yRight = playmap.horzWallCoords[i][2];
				if((nextStep > yWall - this.offset) && (nextStep < yWall)) {
					if((this.xPos > yLeft && this.xPos < yRight) || 
						(this.xPos + this.offset > yLeft && this.xPos + this.offset < yRight) || 
						(this.xPos < yLeft && this.xPos + this.offset > yLeft) || 
						(this.xPos < yRight && this.xPos + this.offset > yRight)) {
							valid = false;
							break;
					}
				}
			}
			break;
	}
	return valid;
}
Character.prototype.move = function() {
	if(keydown) {
		this.setDirection();
	}
	var self = this;
	setTimeout(function() {
		switch(self.direction) {
			case 'left':
				if(self.checkBoundary(self.direction)) {
					self.moveMouth();
					self.xPos -= self.speedStep;
					self.character.style.left = self.xPos;
				}
				else {
					self.openMouth();
				}
				break;
			case 'up':
				if(self.checkBoundary(self.direction)) {
					self.moveMouth();
					self.yPos -= self.speedStep;
					self.character.style.top = self.yPos;
				}
				else {
					self.openMouth();
				}
				break;
			case 'right':
				if(self.checkBoundary(self.direction)) {
					self.moveMouth();
					self.xPos += self.speedStep;
					self.character.style.left = self.xPos;
				}
				else {
					self.openMouth();
				}
				break;
			case 'down':
				if(self.checkBoundary(self.direction)) {
					self.moveMouth();
					self.yPos += self.speedStep;
					self.character.style.top = self.yPos;
				}
				else {
					self.openMouth();
				}
				break;
		}
		window.requestAnimationFrame(self.move.bind(self));
	}, self.timeout);
}

var pacmanEl = document.getElementById("pacman");
var pacman = new Character('Pac-Man', pacmanEl);

window.addEventListener('keydown', setKeydown);
window.addEventListener('keyup', unsetKeydown);