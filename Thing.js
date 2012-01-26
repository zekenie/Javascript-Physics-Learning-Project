//var Thing = function(){}

Thing = {
	startPosition: 100,
	position: function(t){
		var displacement = 0.5 * t * this.velocity.getMagnatude(t);
		return this.startPosition + displacement;
	},
	velocity: new Vector(),
	acceleration: new Vector(180+90,9.82),
	tForPosition:function(y){
		//return 2 * ((y - this.startPosition)/this.velocity.getMagnatude(t));
	}
}

Thing.acceleration.getComponentVectors();

Thing.velocity.magnatude = 0;
Thing.velocity.getMagnatude = function(t){
	return Thing.velocity.magnatude + (t * Thing.acceleration.yComp.getMagnatude( ));
}

