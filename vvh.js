var remoteness = {"status":"ok","response":[{"board":"X     X O","remoteness":4,"value":"win","move":"A1"},{"board":"   X  X O","remoteness":4,"value":"win","move":"A2"},{"board":"  X   X O","remoteness":4,"value":"win","move":"C1"},{"board":" X    X O","remoteness":6,"value":"tie","move":"B1"},{"board":"    X X O","remoteness":6,"value":"tie","move":"B2"},{"board":"     XX O","remoteness":6,"value":"tie","move":"C2"},{"board":"      XXO","remoteness":5,"value":"lose","move":"B3"}]};	
function drawVVH(var1) {
	var canvas = document.getElementById(var1);
	var ctx = canvas.getContext("2d");
	ctx.fillStyle="grey";
	ctx.fillRect(0,0,150,75);
}

