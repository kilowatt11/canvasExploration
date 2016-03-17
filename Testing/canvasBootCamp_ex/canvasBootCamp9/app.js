var pic = new Image();
pic.src = "images/leather.jpg";

function draw(){
var ctx = document.getElementById('canvas1').getContext('2d');
ctx.drawImage(pic, 0, 0);  //this will work in IE but will need a server to work on chrome porperly
ctx.fillStyle = 'magenta';
ctx.fillRect(20,20,100,100);
ctx.fillStyle = 'blue';
ctx.fillRect(40,40,100,100);

var src = ctx.getImageData(0,0,100,100);
var copy = ctx.createImageData(src.width, src.height);
// Make the copy's data array equal to the src data array
for (var i = 0; i < copy.data.length;i++){
    copy.data[i] = src.data[i];   
};

//copy.data.set(src.data); //can be used instead of a for loop
ctx.putImageData(copy, 250, 20);
//ctx.putImageData(src, 250, 20);

}


window.onload = draw