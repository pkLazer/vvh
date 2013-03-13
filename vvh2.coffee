window.drawVVH = (canvas, moveList) ->
	console.log moveList

	#this.rs = rs; // remoteness spacing
	#this.ts = ts; // turn spacing
	#this.ds = ds; // dot size
	#this.ls = ls; // line size
	#this.xs = xs; // x-label interval
	#this.ys = ys; // y-label interval
	#this.win = win; // win color
	#this.tie = tie; // tie color
	#this.lose = lose; // lose color
	#this.line = line; // grid color
	#this.back = back; // background color





	Draw the Horizontal Axis Label
	xlabel = ->
	  ctx = canvas.getContext("2d")
	  ctx.textBaseline = "middle"
	  ctx.textAlign = "center"
	  ctx.fillStyle = "red"				# vvh.line		
	  i = undefined
	  x = undefined
	  ctx.fillText "D", canvas.width / 2, vvh.ts * 2
	  i = 0
	  while i <= rmax
	    if i % (5 * vvh.xs) is 0
	      ctx.fillText i, canvas.width / 2 + vvh.rs * (rmax + 1 - i), vvh.ts * 2
	      ctx.fillText i, canvas.width / 2 - vvh.rs * (rmax + 1 - i), vvh.ts * 2
	    i++
	xlabel()


	# Draw the Vertical Axis Label
	ylabel = ->
	  ctx = canvas.getContext("2d")
	  ctx.textBaseline = "middle"
	  ctx.textAlign = "center"
	  ctx.fillStyle = vvh.line
	  i = undefined
	  y = undefined
	  i = 0
	  while i < (canvas.height - vvh.ts * 3) / vvh.ts
	    if i % vvh.ys is 0
	      y = i
	      ctx.fillText y, canvas.width / 2 - (rmax + 1) * vvh.rs - 10, vvh.ts * (i + 3)
	      ctx.fillText y, canvas.width / 2 + (rmax + 1) * vvh.rs + 10, vvh.ts * (i + 3)
	    i++
	ylabel()
