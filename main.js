var c = document.getElementById("mon_canvas"); // On récupère l'élément canvas de la page html
var ctx = c.getContext("2d"); //Définition du contexte 2D ou 3D


// EXERCICE 1

// Murs
ctx.beginPath();      // Début du chemin
ctx.moveTo(50,150);    // Le tracé part du point 50,150
ctx.lineTo(200,150);  // Un segment est ajouté vers 200,150
ctx.lineTo(200,300);
ctx.lineTo(50,300);
ctx.lineTo(50,150);
ctx.closePath(); // Fermeture du tracé (pas obligatoire)
ctx.fillStyle = "lightblue"; // Choix de la couleur de remplissage
ctx.fill(); // Remplissage

//Toit
ctx.beginPath();
ctx.moveTo(50,150);
ctx.lineTo(125,50);
ctx.lineTo(200,150);
ctx.fillStyle = "peru";
ctx.fill();

//Porte
ctx.beginPath();
ctx.moveTo(110,300);
ctx.lineTo(110,240);
ctx.lineTo(140,240);
ctx.lineTo(140,300);
ctx.lineTo(110,300);
ctx.fillStyle="lightgray";
ctx.fill();

//Fenêtres

  //Gauche
ctx.beginPath();
ctx.moveTo(65,165);
ctx.lineTo(90,165);
ctx.lineTo(90,190);
ctx.lineTo(65,190);
ctx.lineTo(65,165);
ctx.fill();

  //Droite
ctx.beginPath();
ctx.moveTo(158,165);
ctx.lineTo(183,165);
ctx.lineTo(183,190);
ctx.lineTo(158,190);
ctx.lineTo(158,165);
ctx.fill();


// EXERCICE 2

// Toit
ctx.save(); // Sauvegarde la matrice 0,0
ctx.beginPath();
ctx.translate( 475, 225); // Déplace la matrice sur une autre position
ctx.rotate(45*Math.PI/180); // Rotation d'angle 45 degrés
ctx.rect(-106,-106,105,105);
ctx.fillStyle = "peru";
ctx.fill();
ctx.restore(); // Réinitialise la matrice


// Murs
ctx.beginPath();
ctx.rect(400,150,150,150);
ctx.fillStyle ="lightblue";
ctx.fill();


// EXERCICE 3

// Carlingue
ctx.beginPath();
ctx.rect(700, 150, 350, 75);
ctx.fillStyle="lightgreen";
ctx.fill();
ctx.rect(750, 100, 250, 75);
ctx.fill();

// Roues
ctx.beginPath();
ctx.arc(740, 265, 40, 0 , Math.PI*2,false); // arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fillStyle = "lightgray";
ctx.fill();

ctx.beginPath();
ctx.arc(1010, 265, 40, 0 , Math.PI*2,false);
ctx.stroke();
ctx.fill();
