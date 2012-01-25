/*
 * Vector.js
 * By: Zeke Nierenberg
 * Relys on Math.js
 */

//Constructor Method.
var Vector = function(angle, magnatude, rad){
	if(!rad)
		angle = toRad(angle);
	this.angle = angle;
	this.magnatude = magnatude;
}

Vector.prototype = {
	setPos:function(x,y){
	//this method puts the vector in a location. 
	//it takes x and y, and finds x2, y2 fromt he angle and magnatude.
		this.x1 = x;
		this.y1 = y;
		return this;
	},

	x2:function(){
		if(this.x1 != null)
			return this.x1 + cos(this.angle) * this.magnatude;
		else 
			return false;
	},

	y2:function(){
		if(this.y1 != null)
			return this.y1 + sin(this.angle) * this.magnatude;
		else
			return false;
	},
	
	updateAngleAndMagnatude:function(){
	//This method gets the componentVectors from the coordantes.
	//it finds the current magnatude, if it has changed.
	//it updates the angle, if it has changed.
		this.getComponentVectors();
		this.magnatude = sqrt(pow(this.xComp.magnatude,2) + pow(this.yComp.magnatude,2));
		this.angle = arctan(this.yComp.magnatude / this.xComp.magnatude);
		return this;
	},

	
	updateCoord:function(coord,val){
	//this metho takes two inputs, coord, and val. Coord is the coordinate which is to be changed (x1, y1, etc)
	//val is the new value. This method calls the updateAngleAndMagnatude to ensure that there's no lingering
	//old info.
		this[coord] = val;
		this.updateAngleAndMagnatude();
		return this;
	},

	degrees:function(){
	//this method returns the angle of the vector in degrees (it has been converted to radions for the computer)
		return (this.angle * 180)/pi;
	},

	
	getComponentVectors:function(){
	//this method sets the vectors xComp and yComp elements to two new vectors
	//the vectors have angles 0 and 90, and the correct magnatudes.
		var reset = false;
		if(this.x1 == null || this.y1 == null){
			this.setPos(0,0);
			var reset = true;
		}
		this.xComp = new Vector(0,this.x2()-this.x1);
		this.yComp = new Vector(90	,this.y2()-this.y1);
		if(reset == true){
			this.x1 = null;
			this.y1 = null;
		}
		return this;
	},

	add:function(other){
	//this method takes a vector in and returns a new vector which is the addition of the two.
	//It achieves this by adding the component vectors.
		this.getComponentVectors();
		other.getComponentVectors();
		var newXComp = this.xComp.magnatude + other.xComp.magnatude;
		var newYComp = this.yComp.magnatude + other.yComp.magnatude;
		var newAngle = arctan(newYComp/newXComp);
		var newMagnatude = sqrt(pow(newXComp,2)+pow(newYComp,2));
		return new Vector(newAngle,newMagnatude);
	},

	subtract:function(other){
	//this method will create a copied vector of the "other," reverse it, then add the reveresed other with this.
		var reverse = other.duplicate();
		reverse = reverse.reverese();
		return this.add(reverese);
	},

	reverse:function(){
	//this method will reverse the two points of the vector, then recalculate the angle and component vectors.
		if(this.x1 != null || this.y1 != null){
			var x1 = this.x1;
			var x2 = this.x2();
			var y1 = this.y1;
			var y2 = this.y2();
			this.x1 = x2;
			this.y1 = y2;
		}
		
		//keeping the angle less than 2pi
		var newAngle = this.angle + toRad(180);
		if(newAngle < (2*pi))
			this.angle = newAngle;
		else 
			newAngle = this.angle - toRad(180);
		
		//this.updateAngleAndMagnatude();	
		
		return this;
	},

	scale:function(factor){
	//this method scales the magnatude of the vector by a scaling factor.
	//it updates the component vectors
		this.magnatude = this.magnatude * factor;
		this.getComponentVectors();
		return this;
	},

	duplicate: function(){
	//this method returns a new vector with the same angle and magnatude.
		return new Vector(this.degrees(),this.magnatude);
	}
}