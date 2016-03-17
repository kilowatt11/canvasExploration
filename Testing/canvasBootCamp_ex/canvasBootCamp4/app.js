function draw(){
    var ctx = document.getElementById('canvas1').getContext('2d');
    ctx.moveTo(50,50);
    ctx.lineTo(300,50);
    //ctx.arcTo(350,50,350,100, 50); // arcTo(x1, y1, x2, y2, radius) // x1, y1 are the subpath
    ctx.quadraticCurveTo(400, 100, 390,100) //cp = bezier control point
    ctx.lineTo(350,200);
    ctx.stroke();
    
    
    
    // bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
    // ctx.arc(150,150, 100, 0, Math.PI*2, false); ctx.arc(x,y, radius, startAngle, endAngle, anticlockwise);
    // ctx.stroke();
    
    // ctx.rect(50,50,100,100);  ctx.rect(x,y,w,h)
    // ctx.clip(); makes a clipping region out of a path
    // ctx.rect(0,0,100,100);
    // ctx.stroke();
    
    // ctx.beginPath(); //resets the current default path
    // ctx.moveTo(50,50); //Creates a new subpath with the given point
    // ctx.lineTo(250,50);// creates a new line along the current subpath
    // ctx.lineTo(250,150);
    // ctx.lineTo(50,150);
    // ctx.closePath(); //closes the current path
    // ctx.fill();
    // ctx.stroke(); //strokes the current default path
    //ctx.isPointInPath(x,y); //determines if a specified point is in a path
    
    
    
    
}

window.onload = draw;