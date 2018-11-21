const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;
let kineticObject0= {};
let kineticObject1= {};
let kineticObject2= {};

function setUp(){
    kineticObject0.point = new Point(200,300,"red");
    kineticObject0.pos = new Vector2d(800,300);
    kineticObject0.vel = new Vector2d(5,0);
    kineticObject0.acc = new Vector2d(0,0.5);


    kineticObject1.point = new Point(300,200,"green");
    kineticObject1.pos = new Vector2d(700,400);
    kineticObject1.vel = new Vector2d(5,0);
    kineticObject1.acc = new Vector2d(0,0.5);


    kineticObject2.point = new Point(300,300,"blue");
    kineticObject2.pos = new Vector2d(900,200);
    kineticObject2.vel = new Vector2d(5,0);
    kineticObject2.acc = new Vector2d(0,0.5);



  //kineticObject.point.position(kineticObject.pos);
  //kineticObject.point.draw(context);
  update();
}

function update(){
  //context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(update);
//  for (var i = 0; i < 3; i++) {
  //  Test(kineticObject1);
  //}
    ObjUpdater(kineticObject0);
    ObjUpdater(kineticObject1);
    ObjUpdater(kineticObject2);

}

function ObjUpdater(ObjectName){
  if(ObjectName.pos.dx<0 || ObjectName.pos.dx > canvas.width){
    ObjectName.vel.dx = -ObjectName.vel.dx;
  }
  if(ObjectName.pos.dy > canvas.height){
    ObjectName.vel.dy = -ObjectName.vel.dy;
    ObjectName.pos.dy = canvas.height;
  }
  ObjectName.vel.add(ObjectName.acc);
  ObjectName.pos.add(ObjectName.vel);
  ObjectName.point.position(ObjectName.pos);
  ObjectName.point.draw(context);

  Line(ObjectName);

}

setUp();

function Line(ObjectName){
  context.beginPath();
  context.strokeStyle = "aliceblue";
  context.fillStyle="rgba(80,80,80,0.25)";
  context.moveTo(kineticObject0.pos.dx,kineticObject0.pos.dy);
  context.lineTo(kineticObject1.pos.dx,kineticObject1.pos.dy);
  context.lineTo(kineticObject2.pos.dx,kineticObject2.pos.dy);

  context.fill();
  context.closePath();
  context.stroke();
}

function getRandomNumber(max){
  return Math.random()*max;
}
