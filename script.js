function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

   
    myShape(width / 2, height / 2, 1);

    
    myShape(width / 4, height / 4, 0.8);
  
   
    myShape(width * 3 / 4, height * 3 / 4, 1.2);
}

function myShape(x, y, s) {
  // make this function more interesting
  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(s);
    // Body
  fill(0, 0, 153);
  ellipse(0, 120, 150, 200); 
  // Head
  fill(255, 204, 153);
  ellipse(0, 0, 100, 120); 

  // Eyes
  fill(0);
  ellipse(-30, -20, 20, 20); 
  ellipse(30, -20, 20, 20); 
  // Nose
  fill(255, 102, 102);
  triangle(0, 0, -10, 20, 10, 20); 

  // Mouth
  noFill();
  stroke(255, 102, 102);
  arc(0, 20, 40, 20, 0, PI); 

  // Hat
  fill(0);
  rect(-50, -80, 100, 50, 20); 
  fill(255, 0, 0);
  rect(-30, -130, 60, 70, 20); 

  pop(); // restore previous drawing state
}
