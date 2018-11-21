const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,100,20,"red");
let B = new Point(600,200,20,"green");
let C = new Point(0,0,20,"blue");
let D = new Point(0,0,20,"yellow");

let f = new LinearFunction(10,100);

console.log(f.calcY(10));

A.drag();
B.drag();


function Animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(Animate);

  f.draw(context);
  A.draw(context);
  B.draw(context);
  f.letTwoPointsDefineLine(A,B);
  C.x = 0; C.y = f.calcY(0);
  D.x = canvas.width; D.y = f.calcY(canvas.width)
  C.draw(context);
  D.draw(context);
}

Animate();
