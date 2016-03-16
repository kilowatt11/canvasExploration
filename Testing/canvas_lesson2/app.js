
var canvas = document.getElementById('canvas'),
          ctx = canvas.getContext('2d'),
          grd;
      
      // Create gradient
      grd = ctx.createLinearGradient(146.000, 0.000, 154.000, 300.000);
      
      // Add colors
      grd.addColorStop(0.311, 'rgba(88, 84, 221, 1.000)');
      grd.addColorStop(1.000, 'rgba(86, 170, 255, 1.000)');
      
      // Fill with gradient
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, 550, 400);

function draw(x, y) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    ctx.save(); //save canvas state if required
    ctx.clearRect(0, 0, 550, 400); //clear the canvas for redrawing
    
    
    //ctx.fillStyle = "rgba(0,200,0,1)"; //style for a green rectangle
    function circle(x, y, r) {
        //allow us to start a new path
        ctx.beginPath();
        //to define the size and shape of the circle
        ctx.arc(x, y, r, 0, Math.PI * 2, true);
        //fill the circle with default color (black)
        ctx.fill();
    }; circle(x, y, 20) //draw the rectangle
    //x and y are dynamic and can change to give the impression of animation

    //50,50 is the height and width of the rectangle
    ctx.restore(); // restore canvas state if saved
    y -= 1;  //decrement, the y position by numerical value
    var loopTimer = setTimeout('draw(' + x + ', ' + y + ')', 10);


    //can create multiple boxes on canvas, but unsure of how to fix flicker currently. can change these to circles for bubbles
}