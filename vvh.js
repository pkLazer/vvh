//var remoteness = {"status":"ok","response":[{"board":"X     X O","remoteness":4,"value":"win","move":"A1"},{"board":"   X  X O","remoteness":4,"value":"win","move":"A2"},{"board":"  X   X O","remoteness":4,"value":"win","move":"C1"},{"board":" X    X O","remoteness":6,"value":"tie","move":"B1"},{"board":"    X X O","remoteness":6,"value":"tie","move":"B2"},{"board":"     XX O","remoteness":6,"value":"tie","move":"C2"},{"board":"      XXO","remoteness":5,"value":"lose","move":"B3"}]};	
var moveNum = 0; // counts the number of game moves made
var can;
function drawVVH(var1) {
	var canvas = document.getElementById(var1);
	var ctx = canvas.getContext("2d");
	can = var1;
	
	ctx.fillStyle="grey";
	ctx.fillRect(0,0,200,370);
	
	drawGrid(var1);
}


//grid width and height
var bw = 399;
var bh = 400;
//padding around grid
var p = 0;
//size of canvas
var cw = bw + (p*2) + 1;
var ch = bh + (p*2) + 1;

function drawGrid(var1){
	var canvas = document.getElementById(var1);
	var context = canvas.getContext("2d");
	
    for (var x = 0; x <= bw; x += 21) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);  //controls the line length
    }
	
	for (var x = 0; x <= bw; x += 21) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }
	/* adds horizontal lines
    for (var x = 0; x <= bh; x += 20) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
	*/
    context.strokeStyle = "white";
    context.stroke();
}
