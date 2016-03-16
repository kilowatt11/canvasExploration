window.onload = draw;  //execute draw function when DOM is ready
function draw() {
    //Assign our canvas element to a variable
    var canvas = document.getElementById("canvas1");
    //Check to see if the canvas is supported in the user browser
    
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "rgba(24,124,200,1)";
        ctx.fillRext (36,10,40,40);
        
        
    }
    
    
}



