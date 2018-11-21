const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,150,15,"red");
let B = new Point(800,300,15,"green");
let C = new Point(600,100,15,"blue");

let S = new Point(0,0,10,"white");

let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

A.drag();
B.drag();
C.drag();


function Animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(Animate);

  l.letTwoPointsDefineLine(A,C);

  m.slope = -1/l.slope;
  m.intercept = B.y - m.slope * B.x;


  l.draw(context,"black");
  m.draw(context,"black");

  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;


  A.draw(context);
  B.draw(context);
  C.draw(context);

  S.draw(context);

  A.print(context,"A");
  B.print(context,"B");
  C.print(context,"C");
}

Animate();
