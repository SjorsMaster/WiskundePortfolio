const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,100,20,"red");
let B = new Point(600,200,20,"green");
let C = new Point(400,300,20,"blue");

let f = new LinearFunction(10,100);
let g = new LinearFunction(10,100);
let h = new LinearFunction(10,100);

A.drag();
B.drag();
C.drag();


function Animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(Animate);

  f.draw(context,"yellow");
  g.draw(context,"orange");
  h.draw(context,"gold");
  A.draw(context);
  B.draw(context);
  C.draw(context);

  f.letTwoPointsDefineLine(A,B);
  g.letTwoPointsDefineLine(B,C);
  h.letTwoPointsDefineLine(A,C);
  //C.x = 0; C.y = f.calcY(0);
  //D.x = canvas.width; D.y = f.calcY(canvas.width)
}

Animate();
