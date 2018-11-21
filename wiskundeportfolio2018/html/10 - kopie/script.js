const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,100,15,"red");
let B = new Point(800,300,15,"green");
let C = new Point(600,100,15,"blue");

let f = new LinearFunction(1,1);
let g = new LinearFunction(1,1);
let h = new LinearFunction(1,1);


let m = new LinearFunction(1,1);
let n = new LinearFunction(1,1);
let o = new LinearFunction(1,1);

let l = new LinearFunction(1,1);
A.drag();
B.drag();
C.drag();

function Animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(Animate);

  f.letTwoPointsDefineLine(A,B);
  g.letTwoPointsDefineLine(B,C);
  h.letTwoPointsDefineLine(A,C);

  f.draw(context,"black");
  g.draw(context,"black");
  h.draw(context,"black");


  m.slope = -1/A.slope;
  m.intercept = A.x - m.slope * A.y;
  n.slope = -1/B.slope;
  n.intercept = B.x - m.slope * B.y;
  o.slope = -1/C.slope;
  o.intercept = C.x - m.slope * C.y;

  m.draw(context,"black");
  n.draw(context,"black");
  o.draw(context,"black");


  A.draw(context);
  B.draw(context);
  C.draw(context);

  A.print(context,"A");
  B.print(context,"B");
  C.print(context,"C");

  //C.x = 0; C.y = f.calcY(0);
  //D.x = canvas.width; D.y = f.calcY(canvas.width)
}

Animate();
