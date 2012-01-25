var VectorGroup = function(name){
	this.name = name;
	this.Vectors = [];
}

VectorGroup.prototype = {
	addVector:function(vector){
		this.Vectors.push(vector);
	},
	
	sum:function(){
	//returns a new vector which is the sum of the group
		var xComp=0;
		var yComp=0;
		for(var i=0;i<this.Vectors.length;i++){
			var thisVector = this.Vectors[i];
			thisVector.getComponentVectors();
			xComp += thisVector.xComp.magnatude;
			yComp += thisVector.yComp.magnatude;
		}
		var newAngle = arctan(yComp/xComp);
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