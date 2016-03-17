function draw (){
    var ctx = document.getElementById('canvas1').getContext('2d');
    // fillText(text, x, y, maxWidth )
    // strokeText(text, x, y, maxWidth )
    ctx.fillStyle = "#fc0";
    ctx.font = 'italic bold 56px Arial, sans-serif';
    ctx.textAlign = 'start';                          //start,end,left,right,center
    ctx.baseLine = 'hanging';   // top, middle, bottom, hanging, alphabetic, ideographic;
    ctx.fillText("text on canvas", 50, 50);
    //ctx.lineWidth = 3;
    ctx.strokeText("text on canvas", 50, 50);
}


window.onload = draw;


