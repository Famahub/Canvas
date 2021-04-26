var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 500
canvas.witdh = 500
// 0 en haut a gauche
// X de gauche à droite
// Y de haut en bas

//Base
ctx.fillStyle = 'yellow';
ctx.fill()
ctx.fillRect(70, 150, 150, 60 );

// Vitres
ctx.fillStyle = 'black'
ctx.fill()
ctx.fillRect(70, 150, 30, 30 );

// toit
ctx.fillStyle = 'black';
ctx.fill()
ctx.fillRect(110, 110, 90, 40 );

// Pot d'échappement
ctx.fillStyle = 'black';
ctx.fill()
ctx.fillRect(220, 200, 30, 10 );

// Portes
ctx.fillStyle = 'black';
ctx.fill()
ctx.fillRect(125, 170, 40, 40 );



//Roues
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(100, 210, 15, 0, 2*Math.PI) ;
ctx.arc(190, 210, 15, 0, 2*Math.PI) ;
ctx.fill();

// ctx.beginPath();
// ctx.moveTo(20, 30);
// ctx.lineTo(20, 50);
// ctx.lineTo(50, 100);
// ctx.lineTo(,);
// ctx.closePath();
// ctx.lineTo(,)
// ctx.fill();
// ctx.stroke();
