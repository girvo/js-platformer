/**
 * The engine itself
 */
 
function Engine() {
    this.canvas = null;
}

Engine.prototype.run = function() {
    var ctx = this.canvas.getContext('2d');
    ctx.fillRect(0,0,100,100);
    window.requestAnimationFrame(this.run.bind(this));
}

Engine.prototype.createCanvas = function(width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.style.border = '1px solid black';
    this.canvas = canvas;
    return canvas;
}