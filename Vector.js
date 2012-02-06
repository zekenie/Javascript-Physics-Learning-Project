/*
 * Vector.js
 * By: Zeke Nierenberg
 * Relys on Math.js
 */

//Constructor Method.
var Vector = function(angle, magnatude, rad){
	if(!rad)
		angle = toRad(angle);

	this.visable = false;

	this.vectorGroups = [];

	this.color = "#000000";

	this.name = "";

	if(angle)
		this.angle = angle;
	if(magnatude)	
		this.magnatude = magnatude;

	console.log(this);
	console.log("new vector created.");
};

Vector.prototype = {

	setName:function(name){
		this.name = name;
	},

	getAngle: function(){
		return this.angle;
	},

	getMagnatude:function(){
		return this.magnatude;
	},

	getX1:function(){
		return this.x1;
	},

	getY1:function(){
		return this.y1;
	},

	setPos:function(x,y){
	//this method puts the vector in a location. 
	//it takes x and y, and finds x2, y2 fromt he angle and magnatude.
		this.x1 = x;
		this.y1 = y;
		console.log(this);
		console.log("Position set");
	},

	x2:function(){
		if(this.x1 != null)
			return this.x1 + cos(this.getAngle()) * this.getMagnatude();
		else 
			return false;
	},

	y2:function(){
		if(this.y1 != null)
			return this.y1 + sin(this.getAngle()) * this.getMagnatude();
		else
			return false;
	},
	
	updateAngleAndMagnatude:function(){
	//This method gets the componentVectors from the coordantes.
	//it finds the current magnatude, if it has changed.
	//it updates the angle, if it has changed.
		this.getComponents();
		this.magnatude = sqrt(pow(this.xComp,2) + pow(this.yComp,2));
		this.angle = arctan(abs(this.yComp) / abs(this.xComp));
		if(this.yComp >= 0)
			console.log("CONVERT");
			this.angle = toRad(this.degrees() + 180);
		console.log(this);
		console.log("updated angle and magnatude");
	},

	defineByComponents:function(xComp,yComp){
	//this method will set the vectors angle and magnatude based on components
		this.xComp = xComp;
		this.yComp = yComp;
		this.magnatude = sqrt(pow(this.xComp,2) + pow(this.yComp,2));
		this.angle = arctan(this.yComp / this.xComp);
		console.log("ycomp" + this.yComp);
		if(this.xComp < 0 )
			this.angle = toRad(this.degrees() + 180);
		console.log(this);
		console.log("angle and magnatude defined by components");
	},

	updateCoord:function(coord,val){
	//this metho takes two inputs, coord, and val. Coord is the coordinate which is to be changed (x1, y1, etc)
	//val is the new value. This method calls the updateAngleAndMagnatude to ensure that there's no lingering
	//old info.
		this[coord] = val;
		this.updateAngleAndMagnatude();
		console.log(this);
		console.log(coord + " set to " + val);
	},

	degrees:function(){
	//this method returns the angle of the vector in degrees (it has been converted to radions for the computer)
		return (this.getAngle() * 180)/pi;
	},

	getComponents: function(){
		var reset = false;
		if(this.getX1() == null || this.getY1() == null){
			this.setPos(0,0);
			reset = true;
		}
		this.xComp = this.x2()-this.getX1();
		this.yComp = this.y2()-this.getY1();
		if(!this.xComp)
			this.xComp = 0;
		if(!this.yComp)
			this.yComp = 0;
		if(reset == true){
			this.x1 = null;
			this.y1 = null;
		}
	},

	
	getComponentVectors:function(){
	//this method sets the vectors xComp and yComp elements to two new vectors
	//the vectors have angles 0 and 90, and the correct magnatudes.
		
		this.xCompVector = new Vector(0,this.xComp);
		this.yCompVector = new Vector(90,this.yComp);
	},

	add:function(other){
	//this method takes a vector in and returns a new vector which is the addition of the two.
	//It achieves this by adding the component vectors.
		this.getComponents();
		other.getComponents();
		var newXComp = this.xComp + other.xComp;
		var newYComp = this.yComp + other.yComp;

		var addition = new Vector();
		addition.defineByComponents(newXComp,newYComp);
		return addition;
	},

	subtract:function(other){
	//this method will create a copied vector of the "other," reverse it, then add the reveresed other with this.
		this.getComponents();
		other.getComponents();
		var newXComp = this.xComp - other.xComp;
		var newYComp = this.yComp - other.yComp;

		var subtraction = new Vector();
		subtraction.defineByComponents(newXComp,newYComp);
		return subtraction;
	},

	reverse:function(){
	//this method will reverse the two points of the vector, then recalculate the angle and component vectors.
		if(this.x1 !== null || this.y1 !== null){
			var x1 = this.getX1();
			var x2 = this.x2();
			var y1 = this.getY1();
			var y2 = this.y2();
			this.x1 = x2;
			this.y1 = y2;
		}
		
		//keeping the angle less than 2pi
		var newAngle = this.getAngle() + toRad(180);
		if(newAngle < (2*pi))
			this.angle = newAngle;
		else {
			newAngle = this.getAngle() - toRad(180);
			this.angle = newAngle;
		}
				
		console.log(this);
		console.log("reversed vector");
	},

	scale:function(factor){
	//this method scales the magnatude of the vector by a scaling factor.
	//it updates the component vectors
		this.magnatude = this.getMagnatude() * factor;
		this.getComponents();
		console.log(this);
		console.log("scaled by " + factor);
	},

	duplicate: function(){
	//this method returns a new vector with the same angle and magnatude.
		return new Vector(this.degrees(),this.getMagnatude());
	},

	show:function(){
		this.visable = true;
	},

	hide:function(){
		this.visable = false;
	},

	setColor:function(color){
		this.color = color;
	},

	draw:function(layer,scale,offset_x,offset_y){

		if(this.getX1() == null || this.getY1() == null)
			this.setPos(0,0);

		scale = scale * -1; //this is so the coordante system isn't upside down.
		
		var x1 = (this.getX1() * scale * -1) + offset_x;
		var x2 = (this.x2() * scale * -1) + offset_x;
		var y1 = (this.getY1() * scale) + offset_y;
		var y2 = (this.y2() * scale) + offset_y;


		var dx = x2-x1;
		var dy = y2-y1;
		var angle = Math.atan2(dy,dx);

		var headlen = 10;   // length of head in pixels
		var thisVector = this;
		(function(){		
			var thisInstance = new Kinetic.Shape(function(){
				var context = this.getContext();
				context.lineWidth = 3;
				context.strokeStyle = thisVector.color;
				context.beginPath();
				context.moveTo(x1,y1);
				context.lineTo(x2,y2);

				context.lineTo(x2-headlen*Math.cos(angle-Math.PI/6),y2-headlen*Math.sin(angle-Math.PI/6));
				context.moveTo(x2, y2);
				context.lineTo(x2-headlen*Math.cos(angle+Math.PI/6),y2-headlen*Math.sin(angle+Math.PI/6));
				context.closePath();
				context.stroke();
			},"prop");

			thisInstance.on("mousemove",function(){
				var mousePos = stage.getMousePosition();
				tooltip.x = mousePos.x;
				tooltip.y = mousePos.y;
				tooltip.text = thisVector.name + " Angle: " + Math.round(thisVector.degrees()) + " Magnatude: " + Math.round(thisVector.magnatude);
				tooltip.show();
				tooltipLayer.draw();
			});

			thisInstance.on("mouseout", function(){
				tooltip.hide();
				tooltipLayer.draw();
			});

			layer.add(thisInstance);
		}());
	}
};