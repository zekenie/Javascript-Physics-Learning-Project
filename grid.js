function drawGrid(){
grid.clear();
for(var i = width/2; i < width; i+=scale){
	(function(){
		var x = i;

		var line1 = new Kinetic.Shape(function(){
			var canvas = this.getCanvas();
			var context = this.getContext();
			context.strokeStyle = '#ccc';
			context.lineWidth = 0.4;
			if(((x-width/2)/scale)%5 == 0)
				context.strokeStyle = '#000';
			context.beginPath();
			context.moveTo(x, 0);
			context.lineTo(x, height);
			context.stroke();
		},"prop");

		

		var line2 = new Kinetic.Shape(function(){
			var difference = (width/2) - x
			x = (width/2) + difference;
			var canvas = this.getCanvas();
			var context = this.getContext();
			context.strokeStyle = '#ccc';
			context.lineWidth = 0.4;
			if(((x-width/2)/scale)%5 == 0)
				context.strokeStyle = '#000';
			context.beginPath();
			context.moveTo(x, 0);
			context.lineTo(x, height);
			context.stroke();
		},"prop");

		grid.add(line1);
		grid.add(line2);
	}());
}

for(var j = height/2; j < height; j+=scale){
	(function(){
		var y = j;

		var line1 = new Kinetic.Shape(function(){
			var canvas = this.getCanvas();
			var context = this.getContext();
			
			context.beginPath();
			context.strokeStyle = '#ccc';
			context.lineWidth = 0.4;
			if(((y-height/2)/scale)%5 == 0)
				context.strokeStyle = '#000';
			
			context.moveTo(0, y);
        	context.lineTo(width, y);
        	context.closePath();
        	context.stroke();
		},"prop");

		var line2 = new Kinetic.Shape(function(){
			var difference = (height/2) - y;
			y = (height/2) + difference;
			var canvas = this.getCanvas();
			var context = this.getContext();
			
			context.beginPath();
			context.lineWidth = 0.4;
			context.strokeStyle = '#ccc';
			if(((y-height/2)/scale)%5 == 0)
				context.strokeStyle = '#000';
			
			context.moveTo(0, y);
        	context.lineTo(width, y);
        	context.closePath();
        	context.stroke();
		},"prop");

		grid.add(line1);
		grid.add(line2);
	}());
}

stage.add(grid);

}