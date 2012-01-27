//var Thing = function(){}

Thing = {
	startPosition: 100,
	position: function(t){
		return this.startPosition + 										// x0
				(t * this.velocity.getMagnatude(0)) +						//tv0 
				(0.5 * this.acceleration.yComp.getMagnatude() * pow(t,2));	//1/2 at squared
	},
	velocity: new Vector(),
	acceleration: new Vector(270,9.82),
	tForPosition:function(y){
		var c = this.startPosition - y;		//delta x
		var b = this.velocity.getMagnatude(0);
		var a = this.acceleration.yComp.getMagnatude() / 2;

		//quadratic equation
		var result = [];
		result[0] = ((b * -1) + (pow(b,2) - 4 * a * c)) / 2 * a;
		result[1] = ((b * -1) - (pow(b,2) - 4 * a * c)) / 2 * a;
	},
	vForPosition:function(y){
		return sqrt(this.velocity.getMagnatude(0) + (2 * this.acceleration.yComp.getMagnatude() * (this.startPosition - y));
	}
}

Thing.acceleration.getComponentVectors();

Thing.velocity.magnatude = 0;
Thing.velocity.getMagnatude = function(t){
	return Thing.velocity.yComp.magnatude + (t * Thing.acceleration.yComp.getMagnatude( ));
}

