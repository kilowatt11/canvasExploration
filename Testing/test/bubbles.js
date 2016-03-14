var World = (function() {
    //------------------------------------------//
    // Theme									//
    //------------------------------------------//
    function Theme() {
        this.backColTop = "#9DD9DA";
        this.backColBottom = "#38828D";

        this.bubbleStroke = "rgba(255, 255, 255, 0.3)";
        this.bubbleFill = "rgba(255, 255, 255, 0.2)";
        this.bubbleStrokeWidth = 2;

        this.counterFont = "16px Courier New";
        this.counterCol = "black";
    }

    //------------------------------------------//
    // Config									//
    //------------------------------------------//
    function Config(width, height) {
        this.width = width;
        this.height = height;
        this.bubbleTimeOnScreen = 15000;
        this.baseSpeed = this.height / this.bubbleTimeOnScreen;
    }

    //------------------------------------------//
    // FPS Counter								//
    //------------------------------------------//
    function FpsCounter(length) {
        this.times = [];
        this.length = length;
        this.lastTime = 0;
        this.delta = 0;
    }

    FpsCounter.prototype.update = function(time) {
        this.delta = time - this.lastTime;
        this.lastTime = time;
        this.times.push(this.delta);
        if (this.times.length > this.length)
            this.times.shift();
    }

    FpsCounter.prototype.getFps = function() {
        if (this.times.length == 0)
            return "-";
        var total = 0;
        for (var index = 0; index < this.times.length; index++)
            total += this.times[index];
        return Math.round(1000 / (total / this.times.length));
    }

    FpsCounter.prototype.render = function(content) {
        context.font = theme.counterFont;
        context.fillStyle = theme.counterCol;
        context.fillText(this.getFps(), 10, 20);
    }

    //------------------------------------------//
    // Bubble									//
    //------------------------------------------//
    function draw() {
        var ctx = document.getElementById('frame').getContext('2d');
        ctx.font = "48px serif";
        ctx.fillText("Hello world", 10, 50);
    }

    function Bubble(x, y) {
        this.radius = 50;
        this.x = x;
        this.y = y + this.radius;
        this.speed = config.baseSpeed * ((Math.random() * 0.6) + 0.8);

    }

    Bubble.prototype.move = function(time) {
        this.y -= this.speed * time;
    }

    Bubble.prototype.render = function(context) {
        context.strokeStyle = theme.bubbleStroke;
        context.lineWidth = theme.bubbleStrokeWidth;
        context.fillStyle = theme.bubbleFill;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        
    }

    var context;
    var background;
    var theme;
    var fpsCounter;
    var bubbles = [];
    var config;
    var pub = {};

    pub.init = function() {
        setupCanvas();
        theme = new Theme();
        background = getBackground();
        fpsCounter = new FpsCounter(100);

        for (var index = 0; index < 4; index++)
            addBubble();

        window.requestAnimationFrame(update);
    }

    function update(time) {
        context.drawImage(background, 0, 0, config.width, config.height, 0, 0, config.width, config.height);
        fpsCounter.update(time);

        for (index = 0; index < bubbles.length; index++) {
            bubbles[index].move(fpsCounter.delta);
            bubbles[index].render(context);
        }
        for (index = bubbles.length - 1; index >= 0; index--) {
            if (bubbles[index].y < -bubbles[index].radius) {
                bubbles.splice(index, 1);
                addBubble();
            }
        }

        fpsCounter.render(context);

        context.font = "16px Courier New";
        context.fillText(fpsCounter.getFps(), 10, 20);

        window.requestAnimationFrame(update);
    }

    function setupCanvas() {
        config = new Config(document.body.clientWidth, document.body.clientHeight);
        var canvas = document.getElementById("frame");
        canvas.width = config.width;
        canvas.height = config.height;
        context = canvas.getContext("2d");
       
    }

    function getBackground() {
        var background = document.createElement("canvas");
        background.width = config.width;
        background.height = config.height;
        var backCtx = background.getContext("2d");
        var gradient = backCtx.createLinearGradient(0, 0, 0, config.height);
        gradient.addColorStop(0, theme.backColTop);
        gradient.addColorStop(1, theme.backColBottom);

        backCtx.fillStyle = gradient;
        backCtx.fillRect(0, 0, config.width, config.height);

        return background;
    }

    function addBubble() {
        bubbles.push(new Bubble(Math.random() * (config.width - 200) + 100, config.height));
    }

    return pub;
} ());

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.onload = World.init;
