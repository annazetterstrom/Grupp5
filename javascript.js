let rectcanvas = document.getElementById('rectcanvas');
let ctx = rectcanvas.getContext('2d');
let xstart = 20, ystart = 20, xsize = 20, ysize = 60;
ctx.fillStyle = 'orange';
ctx.fillRect(xstart, ystart, xsize, ysize);
//ctx.fillRect(20, 100, 20, 20);

let face = document.getElementById('face');
ctx = face.getContext('2d');
ctx.fillStyle = 'orange';
ctx.fillRect(0, 0, 100, 100); //huvud
ctx.fillStyle = 'white';
ctx.fillRect(10, 20, 30, 20);
ctx.fillRect(50, 20, 30, 20); //ögon
ctx.fillStyle = 'red';
ctx.fillRect(30, 70, 20, 20); //mun
ctx.fillStyle = 'pink';
ctx.fillRect(0, 55, 20, 10);
ctx.fillRect(65, 55, 20, 10); //blush
ctx.fillStyle = 'black';
ctx.fillRect(15, 25, 10, 10); //vänster pupill
ctx.fillRect(55, 25, 10, 10); //höger pupill
ctx.fillRect(35, 75, 10, 10); //mun

let bonus = document.getElementsByClassName('bonus');
for(let i=0;i<bonus.length;i++){
    bonus[i].addEventListener('click', revealBonus);
}

let circleCanvas = document.getElementById('circleCanvas');
ctx = circleCanvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(20,10);
ctx.lineTo(40,30);
ctx.lineTo(20,50);
ctx.lineTo(0,30);
ctx.lineTo(20,10);
ctx.strokeStyle = 'green';
ctx.stroke();

ctx.beginPath();
ctx.arc(70,30,20,0,Math.PI);
ctx.lineTo(90,30);
ctx.fillStyle = 'orange';
ctx.fill();

let crown = document.getElementById('crown');
ctx = crown.getContext('2d');

//krona
ctx.beginPath();
ctx.moveTo(0,50);
ctx.moveTo(10,0);
ctx.lineTo(20,50);
ctx.lineTo(30,0);
ctx.lineTo(40,50);
ctx.lineTo(50,0);
ctx.lineTo(60,50);
ctx.lineTo(70,0);
ctx.lineTo(80,50);
ctx.lineTo(90,0);
ctx.lineTo(100,50);
ctx.lineTo(100,80);
ctx.lineTo(0,80);
ctx.lineTo(0,50);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.beginPath();
ctx.arc(50,60,5,0,2*Math.PI);
ctx.fillStyle = 'red';
ctx.fill();
ctx.beginPath();
ctx.arc(20,60,5,0,2*Math.PI);
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.beginPath();
ctx.arc(80,60,5,0,2*Math.PI);
ctx.stroke();

ctx = document.getElementById('dudecanvas').getContext('2d');

function Dude(x, y, boy){
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 60;
    this.boy = boy;
    this.draw = function(){
        ctx.fillStyle = 'pink';
        ctx.beginPath();
        ctx.arc(this.x+this.width/2, this.y+this.height/8, this.height/8, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillRect(this.x, this.y+this.height/4, this.width, this.height/2);
        ctx.fillRect(this.x-this.width/4-1, this.y+this.height/4, this.width/4, this.height/3);
        ctx.fillRect(this.x+this.width+1, this.y+this.height/4, this.width/4, this.height/3);
        if(this.boy){
            ctx.fillRect(this.x, this.y+this.height/4*3, this.width/3, this.height/4);
            ctx.fillRect(this.x+this.width/3*2, this.y+this.height/4*3, this.width/3, this.height/4);
        } else {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y+this.height/4*3);
            ctx.lineTo(this.x-this.width/3,this.y+this.height);
            ctx.lineTo(this.x+this.width/3*4,this.y+this.height);
            ctx.lineTo(this.x+this.width, this.y+this.height/4*3);
            ctx.lineTo(this.x, this.y+this.height/4*3);
            ctx.fill();
            
        }
    }
}
let dude = new Dude(20,20,true);
for(let i=0;i<5;i++){
    dude.draw();
    dude.x += 40;
    dude.y += 20;
}

let gender = document.getElementById('gender');
ctx = gender.getContext('2d');
let girl = new Dude(20,20,false);
girl.draw();
let boy = new Dude(60,20,true);
boy.draw();

ctx = document.getElementById('animationcanvas').getContext('2d');

function Boll(x, y, xv, yv, r, color){
    this.x = x;
    this.y = y;
    this.xv = xv;
    this.yv = yv;
    this.r = r;
    this.color = color;
    this.move = function(){
        this.x += this.xv;
        this.y += this.yv;
        if (this.y>=150-this.r){
            this.y = 150-this.r;
            this.yv = this.yv*(-1); //studsfaktor
        } else {
            this.yv += .1; //gravitationsfaktor
        }
        if (this.x>300-this.r){
            this.x = 300-this.r;
            this.xv*=(-1);
        }
        if (this.x<this.r){
            this.x = this.r;
            this.xv*=(-1);
        }
    }
    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
let boll = new Boll(20,100,1,0,5,'blue');
animate();

let cty = document.getElementById('movingstuff').getContext('2d');

function Smiley(x, y, xv, yv, r, color){
    this.x = x;
    this.y = y;
    this.xv = xv;
    this.yv = yv;
    this.r = r;
    this.color = color;
    this.move = function(){
        this.x += this.xv;
        this.y += this.yv;
        if (this.y>=150-this.r){
            this.y = 150-this.r;
            this.yv = this.yv*(-1); //studsfaktor
        } else {
            this.yv += .1; //gravitationsfaktor
        }
        if (this.x>300-this.r){
            this.x = 300-this.r;
            this.xv*=(-1);
        }
        if (this.x<this.r){
            this.x = this.r;
            this.xv*=(-1);
        }
    }
    this.draw = function(){
        cty.beginPath();
        cty.fillStyle = this.color;
        cty.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        cty.fill();
        cty.fillRect(this.x-this.r,this.y+this.r-5,this.r*2,5);
        cty.fillStyle = 'black';
        cty.beginPath();
        cty.arc(this.x-this.r/2, this.y-this.r/2, this.r/2, 0, 2*Math.PI);
        cty.fill();
        cty.beginPath();
        cty.arc(this.x+this.r/2, this.y-this.r/2, this.r/2, 0, 2*Math.PI);
        cty.fill();
        cty.beginPath();
        cty.fillStyle = 'red';
        cty.arc(this.x,this.y+this.r/4,this.r/2, 0, Math.PI);
        cty.fill();
    }
}
let smiley = new Smiley(20,100,1,0,20,'green');
let frogg = new Smiley(60,120,1.5,0,20,'orange');
animateSmiley();


function animate(){
    ctx.clearRect(0,0,300,200);
    boll.draw();
    boll.move();
    requestAnimationFrame(animate);
}

function animateSmiley(){
    cty.clearRect(0,0,300,200);
    smiley.draw();
    frogg.draw();
    smiley.move();
    frogg.move();
    requestAnimationFrame(animateSmiley);
}


function revealBonus(){
    let data = this.id;
    let challenge = document.getElementById('challenge' + data);
    if(challenge.style.display == 'block'){
        challenge.style.display = 'none';
    } else {
        challenge.style.display = 'block';
    }
}