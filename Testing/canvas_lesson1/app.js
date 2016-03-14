function draw(x,y){
    var canvas = document.getElementById('canvas');
    var ctx =canvas.getContext("2d");
    ctx.save(); //save canvas state if required
    ctx.clearRect(0,0,550,400); //clear the canvas for redrawing
    ctx.fillStyle = "rgba(0,200,0,1)"; //styel for a green rectangle
    ctx.fillRect (x, 20, 50, 50); //draw the rectangle
        //x is dynamic and can change to give the impression of animation
        //20 is the y paramiter
        //50,50 is the height and widht of the 
        ctx.restore(); // restore canvas state if saved
        x += 1;  //increment the x position by numerical value
        var loopTimer = setTimeout('draw('+x+', '+y+')',10);
    
}