
function draw() {
    var ctx = document.getElementById('canvas1').getContext('2d');
    // ctx.globalAlpha = 0.0 - 1.0;
    // globalCompositeOperation = source-top || source-in || source-out || source-over (default) || destination-atop || destination-in || destination-out || destination-over || lighter|| copy || xor
    ctx.globalAlpha = .5;
    ctx.fillStyle = 'magenta';
    ctx.fillRect(20, 20, 100, 100);
    ctx.globalCompositeOperation = "xor"

    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 100, 100);


}


window.onload = draw