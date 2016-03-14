window.onload = draw; //execute draw function when DOM is ready

function draw(){
    //assign our canvas element to a variable
    var canvas = document.getElementById("canvas1");
    //create the HTML 5 context object to enable draw methods
    var ctx = canvas.getContext("2d");
    
    //ctx.whateverDrawMethod(method parameters)
    
    //fillStyle (r,g,b,alpha);
    ctx.fillStyle = "rgba(0,200,0,1)";
    //fillRect(x,y,width,height);
    ctx.fillRect(36,10,22,22);
    
    ctx.fillStyle = "rgba(200,0,0,1)";
    ctx.fillRect(36,50,22,22);
    
    
    
}