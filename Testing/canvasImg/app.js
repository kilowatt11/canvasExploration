function draw(){
    var ctx = document.getElementById('myCanvas').getContext('2d');
    var img = new Image();
    //image object is onload;
    img.onload = function(){
        ctx.drawImage(img,0,0);
        ctx.beginPath();
        ctx.moveTo(100,115);
        ctx.lineTo(120,115);
        ctx.lineTo(120,145);
        ctx.lineTo(100,145);
        ctx.closePath();
        ctx.stroke();
        
        //draw the wick
        ctx.beginPath();
        ctx.moveTo(110,145);
        ctx.lineTo(110,175);
        ctx.stroke();
        
        ctx.drawImage(img,0,0);
        ctx.beginPath();
        ctx.moveTo(130,145);
        ctx.lineTo(150,145);
        ctx.lineTo(150,175);
        ctx.lineTo(130,175);
        ctx.closePath();
        ctx.stroke();
        
        //draw the wick
        ctx.beginPath();
        ctx.moveTo(140,175);
        ctx.lineTo(140,200);
        ctx.stroke();
    };
    
  
    
    img.src = 'img/mygraph.png';
    
    
}