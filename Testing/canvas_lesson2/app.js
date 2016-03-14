function draw(x,y){
    var canvas = document.getElementById('canvas');
    var ctx =canvas.getContext("2d");
    ctx.save(); //save canvas state if required
    ctx.clearRect(0,0,550,400); //clear the canvas for redrawing
    ctx.fillStyle = "rgba(0,200,0,1)"; //style for a green rectangle
    ctx.fillRect (x, y, 50, 50); //draw the rectangle
        //x and y are dynamic and can change to give the impression of animation
        
        //50,50 is the height and width of the rectangle
        ctx.restore(); // restore canvas state if saved
        y -= 1;  //decrement, the y position by numerical value
        var loopTimer = setTimeout('draw('+x+', '+y+')',10);
    
}