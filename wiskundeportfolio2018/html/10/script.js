const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,100,15,"red");
let B = new Point(800,300,15,"green");
let C = new Point(600,100,15,"blue");

let X = new Point(0,0,5,"black");
let Y = new Point(0,0,5,"black");
let Z = new Point(0,0,5,"black");

let S = new Point(0,0,10,"white");

let f = new LinearFunction(1,1);
let g = new LinearFunction(1,1);
let h = new LinearFunction(1,1);

let i = new LinearFunction(1,1);
let j = new LinearFunction(1,1);
let k = new LinearFunction(1,1);

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);
A.drag();
B.drag();
C.drag();

function Animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(Animate);

  f.letTwoPointsDefineLine(A,B);
  g.letTwoPointsDefineLine(B,C);
  h.letTwoPointsDefineLine(A,C);

  i.letTwoPointsDefineLine(X,C);

  l.letTwoPointsDefineLine(A,Y);
  m.letTwoPointsDefineLine(B,Z);

  X.x = (A.x + B.x) / 2;
  X.y = (A.y + B.y) / 2;
  Y.x = (C.x + B.x) / 2;
  Y.y = (C.y + B.y) / 2;
  Z.x = (A.x + C.x) / 2;
  Z.y = (A.y + C.y) / 2;

  f.draw(context,"black");
  g.draw(context,"black");
  h.draw(context,"black");

  i.draw(context,"gray");
  l.draw(context,"gray");
  m.draw(context,"gray");

  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;

  A.draw(context);
  B.draw(context);
  C.draw(context);

  X.draw(context);
  Y.draw(context);
  Z.draw(context);

  S.draw(context);

  A.print(context,"A");
  B.print(context,"B");
  C.print(context,"C");

  X.print(context,"x");
  Y.print(context,"y");
  Z.print(context,"z");


  S.print(context,"S");
  //C.x = 0; C.y = f.calcY(0);
  //D.x = canvas.width; D.y = f.calcY(canvas.width)
}

Animate();
