function drawShape() {
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext('2d');

    //Begin our Drawing
    ctx.beginPath();
    ctx.moveTo(75, 0);
    ctx.lineTo(150, 100);
    ctx.lineTo(75, 200);
    ctx.lineTo(0, 100);

    //Define the style of the shape  
    ctx.linewidth = 1;
    ctx.fillStyle = "rgb(102, 204, 0)";   
    ctx.strokeStyle = "rgb(0,50,200)";

    //Close the path
    ctx.closePath();
    
    //fill the path wiht our line and color
    ctx.fill();
    ctx.stroke();
}