var myPic = new Image();
myPic.src = "images/Daniel.jpg";

function draw(){
    var ctx = document.getElementById('canvas1').getContext('2d');
    
    ctx.drawImage(myPic, 20, 20, 100, 100)
     // drawImage() can take either an HTMLImageElement, an HTMLCanvasElement, 
    // or an HTMLVideoElement as the first parameter

    // drawImage(image, x, y);
    // ctx.drawImage(my_pic, 20, 20); // Positioning only

    // drawImage(image, x, y, w, h);
    // ctx.drawImage(my_pic, 20, 20, 100, 100); // Positioning and sizing

    // drawImage(my_pic, clipX, clipY, clipW, clipH, x, y, w, h);
    
}
window.onload = draw