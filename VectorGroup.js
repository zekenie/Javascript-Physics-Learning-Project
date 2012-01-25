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
	},		
	stDev:function(){},
	translate:function(){},
	setColor:function(){},
}