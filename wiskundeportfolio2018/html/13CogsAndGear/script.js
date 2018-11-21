const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cog = new Image();
cog.src = "1.png";
cog.rotation = 0;
cog.rotation2 = 2;
cog.rotation3 = 1;

let cog2 = new Image();
cog2.src = "2.png";

let cog3 = new Image();
cog3.src = "2.png";

let background = new Image();
background.src = "background.jpg";


cog.addEventListener('load',()=>{
  update();
})


function update(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(update);
  context.drawImage(background,0,0);
  context.save();
  context.translate(700,600);
  context.rotate(cog.rotation * 1.2);
  context.drawImage(cog,-0.5*cog.width,-0.5*cog.height);
  context.restore();
  //cog.rotation += 0.01;

  context.save();
  context.translate(200,200);
  context.rotate(-cog.rotation2 * 2.9);
  context.drawImage(cog2,-0.5*cog2.width,-0.5*cog2.height)
  context.restore();

  context.save();
  context.translate(0,0);
  context.rotate(cog.rotation3 * 2.9);
  context.drawImage(cog2,-0.5*cog2.width,-0.5*cog2.height)
  context.restore();
  cog.rotation += 0.01;
  cog.rotation2 += 0.01;
  cog.rotation3 += 0.01;
}
