var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 400
canvas.witdh = 500
// 0 en haut a gauche
// X de gauche à droite
// Y de haut en bas

// ctx.beginPath();
// ctx.fillStyle = 'grey'
// ctx.moveTo(150, 50),
// ctx.bezierCurveTo(200, 200, 180, 0, 2 * Math.PI);
// ctx.fill();
// ctx.closepath();

//Quadratic Curve
// ctx.beginPath()
// ctx.fillStyle = 'black';
// ctx.moveTo (125,200)
// ctx.quadraticCurveTo( 280, 100, 350, 200);
// ctx.fill()

ctx.beginPath()
ctx.fillStyle = 'grey';
ctx.moveTo (100,250)
ctx.quadraticCurveTo( 280, 120, 350, 250);
ctx.moveTo (100,250)
ctx.quadraticCurveTo( 280, 370, 350, 250);
ctx.fill()
