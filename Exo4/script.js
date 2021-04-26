var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 500
canvas.witdh = 500
// 0 en haut a gauche
// X de gauche à droite
// Y de haut en bas



ctx.font = '48px serif';
ctx.strokeText('Ice cream', 10, 50);

ctx.beginPath() 
ctx.moveTo(150, 100); 
ctx.lineTo(70, 100);
ctx.lineTo(100, 250);
ctx.closePath();
ctx.fillStyle = '#ffcb69';
ctx.fill()

ctx.beginPath();
ctx.lineWidth = '5';
ctx.fillStyle = '#FFC8DD';
ctx.arc(110,100,40, 1*Math.PI, 2*Math.PI);
ctx.closePath();
ctx.fill();

