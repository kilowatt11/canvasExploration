window.onload = draw;
function draw(){
    //assign our canvas element to a variable
    var canvas = document.getElementById("canvas1");
    //create the HTML 5 context object to enable draw methods
    var ctx = canvas.getContext("2d");
    //These two variables can also be written in one line 
    //example = var ctx = document.getElementById('canvas1').getContext('2d');
    //draw the Filled Shape 1 (center triangle of logo)
    
    ctx.beginPath();
    ctx.moveTo(100,50);
    ctx.lineTo(130,100);
    ctx.lineTo(70,100);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(72,60);
    ctx.lineTo(85,72);
    ctx.lineTo(71,94);
    ctx.lineTo(50,70);
    ctx.lineTo(65,40);
    ctx.fill();
    
    //homework to finish image (right horn)
    
    ctx.beginPath();
    ctx.moveTo(128,60);
    ctx.lineTo(115,72);
    ctx.lineTo(129,94);
    ctx.lineTo(148,70);
    ctx.lineTo(133,40);
    ctx.fill();
    
    
  
//googled this one...
//not the greatest quordinate tool, but it gave a helpfull start
canvas.addEventListener("mousedown", getPosition, false);

function getPosition(event)
{
  var x = event.x;
  var y = event.y;

  var canvas = document.getElementById("canvas1");

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  alert("x:" + x + " y:" + y);
};




};


