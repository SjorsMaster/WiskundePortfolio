const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(200,200,20,"red");
A.drag();

let B = new Point(100,250,20,"green");
B.drag();

let C = new Point(250,100,20,"blue");
C.drag();


function Animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(Animate);

  context.moveTo(A.x,A.y);
  context.lineTo(B.x,B.y);
  context.lineTo(C.x,C.y);

  context.fill();
  context.fillStyle("green"); //cool bug
  context.closePath();
  context.stroke();


  A.draw(context);
  B.draw(context);
  C.draw(context);
}

Animate();
