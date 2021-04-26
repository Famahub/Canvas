var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 500
canvas.witdh = 500

// Carré
ctx.fillStyle = '#997b66';
ctx.fillRect(75, 250, 150, 150 );
ctx.fill()
ctx.strokeStyle = 'black';
ctx.stroke()


// fenêtres et porte
ctx.fillStyle = '#d08c60';
ctx.fill()
ctx.fillRect(75, 250, 50, 50 );
ctx.fillRect(175, 250, 50, 50 );
ctx.fillRect(130, 330, 50, 70 );



// Cheminée
ctx.fillStyle = 'black';
ctx.fillRect(190, 170, 20, 40 );

// toit (retangles)
ctx.beginPath() // 
ctx.moveTo(150, 150); // Pauser le crayon sur l'axe X (horizontale) Y (verticale)
ctx.lineTo(50, 250);
ctx.lineTo(250, 250);
ctx.closePath()
ctx.fillStyle = '#ffcb69';
ctx.fill()
ctx.strokeStyle = 'black';
ctx.stroke()


