var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 500
canvas.witdh = 500
// 0 en haut a gauche
// X de gauche à droite
// Y de haut en bas

// têtes
ctx.beginPath();
ctx.fillStyle = '#dda15e';
ctx.arc(150, 180, 50, 0, 2*Math.PI) ;
ctx.fill();

// Oeil gauche
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(125, 160, 10, 0, 2*Math.PI) ;
ctx.fill();

// Oeil droit
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(170, 160, 10, 0, 2*Math.PI) ;
ctx.fill();


// bouche
ctx.beginPath();
ctx.strokeStyle = '#ef233c';
ctx.lineWidth = 2;
ctx.arc(150, 195, 15, 0, Math.PI, false) ;
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = '#ef233c';
ctx.lineWidth = 2;
ctx.arc(150, 198, 15, 0, Math.PI, false) ;
ctx.stroke();

// Sourcil
ctx.beginPath();
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;
ctx.arc(125, 150, 8, 0, Math.PI, true) ;
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;
ctx.arc(170, 150, 8, 0, Math.PI, true) ;
ctx.stroke();

// Corps
ctx.fillStyle = '#dda15e';
ctx.fillRect(100, 230, 100, 150);

// Bras gauche
ctx.fillStyle = '#dda15e';
ctx.fillRect(25, 230, 90, 30);

// bras droit
ctx.fillStyle = '#dda15e';
ctx.fillRect(185, 230, 90, 30);

//Main droite
ctx.beginPath();
ctx.fillStyle = '#dda15e';
ctx.arc(270, 245, 15, 0, 2*Math.PI) ;
ctx.fill();

// Main gauche
ctx.beginPath();
ctx.fillStyle = '#dda15e';
ctx.arc(30, 245, 15, 0, 2*Math.PI) ;
ctx.fill();

// jambes droite
ctx.fillStyle = '#dda15e';
ctx.fillRect(170, 380, 30, 90);


// jambes droite
ctx.fillStyle = '#dda15e';
ctx.fillRect(100, 380, 30, 90);

// boutons 1
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(150, 260, 8, 0, 2*Math.PI) ;
ctx.fill();

// bouton 2
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(150, 280, 8, 0, 2*Math.PI) ;
ctx.fill();

// bouton 3
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(150, 300, 8, 0, 2*Math.PI) ;
ctx.fill();

// Pied droit
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(115, 470, 15, 0, 2*Math.PI) ;
ctx.fill();

// Pied gauche
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(185, 470, 15, 0, 2*Math.PI) ;
ctx.fill();

//
ctx.beginPath();
ctx.fillStyle = '#dda15e';
ctx.arc(150, 370, 20, 0, 2*Math.PI) ;
ctx.fill();










