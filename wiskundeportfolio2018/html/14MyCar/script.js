const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let background = new Image();
background.src = "background.jpg";

let frontWheel = new Image();
frontWheel.rot = 0;
frontWheel.src = "wheel.png";
frontWheel.pos = 0;
frontWheel.vel = 1;

let carBody = new Image();
carBody.src = "auto.fw.png";

carBody.vel = 1;

background.addEventListener('load',()=>{
  update();
});

addEventListener('keydown',(evt)=>{
  console.log(evt.key);
  switch (evt.key) {
    case "ArrowRight":
    frontWheel.vel += 1;
      break;
      case "ArrowLeft":{
        frontWheel.vel -= 1;
      }
    default:
  }
});

function update(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(update);
  context.drawImage(background,0,0,canvas.width,canvas.height)
  context.save();
  context.translate(frontWheel.pos,100);
  context.rotate(frontWheel.rot);
  context.drawImage(frontWheel,-frontWheel.width/2,-frontWheel.height/2);
  context.restore();
  context.save();
  context.translate(carBody.pos,40);
  context.drawImage(carBody,-carBody.width/2,-carBody.height/2);
  context.restore();

  carBody.pos += frontWheel.vel;
  frontWheel.rot += frontWheel.vel/80;
  frontWheel.pos += frontWheel.vel;
  if(frontWheel.pos>canvas.width){
    frontWheel.pos = 0;
  }if(frontWheel.pos<0){
    frontWheel.pos = canvas.width;
    carBody.pos = canvas.width + frontWheel.pos /2.9;
  }
  if(frontWheel > canvas.width){
    frontWheel.pos = 0;
  }
}
