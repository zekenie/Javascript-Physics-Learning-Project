var VectorGroup = function(name){
	this.name = name;
	this.visable = false;
	this.layer = null;
	this.Vectors = [];
}

VectorGroup.prototype = {
	addVector:function(vector){
		this.Vectors.push(vector);
		vector.vectorGroups.push(this);
	},

	draw:function(layer,scale,offset_x,offset_y){
		this.layer = layer;
		var context = layer.getContext();
		for(var i=0;i<this.Vectors.length;i++){
			if(this.Vectors[i].visable == true){
				this.Vectors[i].draw(layer,scale,offset_x,offset_y);
			}
		}
	},

	show:function(){
		this.visable = true;
	},

	showAllChildren:function(){
		for(var i = 0; i<this.Vectors.length;i++){
			this.Vectors[i].show();
		}
	},

	hide:function(){
		this.visable = false;
	},

	hideAllChildren:function(){
		for(var i = 0; i<this.Vectors.length;i++){
			this.Vectors[i].hide();
		}
	},
	
	sum:function(){
	//returns a new vector which is the sum of the group
		var xComp=0;
		var yComp=0;
		for(var i=0;i<this.Vectors.length;i++){
			var thisVector = this.Vectors[i];
			thisVector.getComponents();
			xComp += thisVector.xComp;
			yComp += thisVector.yComp;
		}
		var newAngle = arctan(yComp/xComp);
		if(xComp < 0 )
			newAngle = toRad(newAngle + 180);
		var newMagnatude = sqrt(pow(xComp,2)+pow(yComp,2));
		return new Vector(newAngle,newMagnatude);
	},		

	stDev:function(){},

	translate:function(x,y){
	//goes through each vector. if it has an x and a y, it translates them.
		for(var i=0;i<this.Vectors.length;i++){
			var thisVector = this.Vectors[i];
			if(thisVector.x1 != null && thisVector.y1 != null){
				thisVector.x1 += x;
				thisVector.y1 += y;
			}
		}
	},

	setColor:function(){},
}