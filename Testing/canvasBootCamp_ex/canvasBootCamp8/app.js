function draw(){
    var ctx = document.getElementById('canvas1').getContext('2d');
// scale(x, y) 1, 1 is default scale
    // rotate(angle) Angle value expressed in radians
    // translate(x, y) Positive or negative numbers
    // transform(xScale, ySkew, xSkew, yScale, xTrans, yTrans)
    // Default transform matrix is (1,0,0,1,0,0)
    // setTransform(xScale, ySkew, xSkew, yScale, xTrans, yTrans)
    ctx.fillStyle = '#FC0';
    ctx.fillRect(50, 50, 100, 100);
    ctx.transform(1,0,.5,1,0,0);
    ctx.fillRect(170, 50, 100, 100);
    ctx.setTransform(1,0,0,1,0,0); // resets the previous transformation matrix and then builds the new matrix
                                   // otherwise the fillRect() below would adhere to the ctx.transform above
    ctx.fillRect(170, 170, 100, 100);
    
}


window.onload = draw