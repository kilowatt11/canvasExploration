function draw(){
    var ctx = document.getElementById('canvas1').getContext('2d');
    //ShadowColor = color || hex || rgba()
    //shadowOffsetX = positive or negative number
    //shadowOffsetY = positive or negative number
    //shadowBlur = positive number
    ctx.fillStyle = '#FC0';
    ctx.fillRect(50 ,50,100,100);
    ctx.shadowColor = 'rgba(0,0,0,1)';
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetX = 2;
    ctx.shadowBlur = 3;
    ctx.fillRect(200 ,50,100,100);
    
    
}




window.onload = draw;