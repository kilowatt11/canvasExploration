function draw (){
    var ctx = document.getElementById('canvas1').getContext('2d');
    
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.lineCap = "round";  //butt, round, square
    ctx.lineJoin = "round"; //bevel, round, miter
    ctx.miterLimit = 2;
    ctx.setLineDash([20,10,30,10,40,10])
    ctx.lineDashOffset = 10;
    
    ctx.moveTo(150,150);
    ctx.lineTo(240,240);
    ctx.lineTo(300,40);
    ctx.stroke();
    
}
window.onload = draw;