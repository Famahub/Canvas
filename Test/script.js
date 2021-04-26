//API L'API est une solution informatique qui permet à des applications de communiquer entre elles et de s'échanger mutuellement des services ou des données. Il s'agit en réalité d'un ensemble de fonctions qui facilitent, via un langage de programmation, l'accès aux services d'une application.

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// Objet a qui ont a donné des paramètres strokRect() pour créer une ligne
ctx.beginPath();
ctx.moveTo(20, 30);
ctx.lineTo(100, 30);
ctx.lineTo(100, 60);
ctx.lineTo(20, 60);
ctx.closePath();
// ctx.lineTo(20,30)
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();

// ctx.strokeStyle = 'red;'
// ctx.strokeRect(10, 10, 50, 50);
// // Remplit le carré
// ctx.fillStyle = 'red;'
// ctx.fillRect(10, 10, 50, 50);

