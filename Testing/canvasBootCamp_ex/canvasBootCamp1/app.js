function draw(){
    var ctx = document.getElementById('canvas1').getContext('2d');
     // You can back-reference the canvas element through the context object
   // alert(ctx.canvas.id+"  | "+ctx.canvas.width+"   |   "+ctx.canvas.height);
    
    //ctx.fillRect(x,y,w,h)
    ctx.fillStyle = "magenta";
    ctx.fillRect(20,20,100,100);
    ctx.fillRect(200,200,50,50);
    ctx.strokeRect(20,20,100,100);
    ctx.strokeRect(200,200,50,50);
    
    //used to clear canvas during animation or for interactive erasers
    //ctx.clearRect(x,y,w,h)   
    ctx.clearRect(0,0,100,100);
    
   
    
    
    
    
    
    
    
    
};
window.onload = draw
