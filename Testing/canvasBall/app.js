
//this variable will be used as a reference to the canvas
var canvas;
//a variable to hold the value of context
var ctx;
//a x-axis value (the value must be the same as the canvas's width)
var x = 568;
//a y-axis value (the value must be the same as the canvas's height)
var y = 262;
//a prefix x-axis value for animation
var mx = 2;
//a prefix y-axis value for animation
var my = 4;

//height and width of canvas
var WIDTH = 568;
var HEIGHT = 262;

function circle(x,y,r){
    //allow us to start a new path
    ctx.beginPath();
    //to define the size and shape of the circle
    ctx.arc(x,y,r,0, Math.PI*2, true);
    //fill the circle with default color (black)
    ctx.fill();
};
function clear(){
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
};
//the function we call to start everything
function init(){
    //access the canvas object by ID and define the context as 2d
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext('2d');
    //setInterval(function,time) will call the "draw" function every 20 sec.
    return setInterval(draw,20);
};


function draw(){
    clear();
    circle(x,y,20);
    if (x + mx > WIDTH || x + mx < 0)
    mx = -mx;
    if (y + my > HEIGHT || y + my < 0)
    my = -my;
    
    x += mx;
    y += my;
};

init();
