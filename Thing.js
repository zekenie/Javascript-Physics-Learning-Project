Thing = {
	position: new Vector(90,100),
	velocity: new Vector(),
	acceleration: new Vector(270,9.82),
	tForPosition:function(y){
		var c = this.startPosition - y;		//delta x
		var b = this.velocity.getMagnatude(0);
		var a = this.acceleration.yComp / 2;

		//quadratic equation
		var result = [];
		result[0] = ((b * -1) + (pow(b,2) - 4 * a * c)) / 2 * a;
		result[1] = ((b * -1) - (pow(b,2) - 4 * a * c)) / 2 * a;
	},
	vForPosition:function(y){
		return sqrt(this.velocity.getMagnatude(0) + (2 * this.acceleration.yComp * (this.position.magnatude - y)));
	}
}

Thing.acceleration.getComponents();
Thing.velocity.defineByComponents(0,0);
Thing.velocity.getComponents();


Thing.velocity.getMagnatude = function(t){
	return Thing.velocity.yComp + (t * Thing.acceleration.yComp);
}

Thing.position.getMagnatude = function(t){
	return Thing.position.magnatude + 						// x0
		(t * Thing.velocity.getMagnatude(0)) +				//tv0 
		(0.5 * Thing.acceleration.yComp * pow(t,2));			//1/2 at squared
}