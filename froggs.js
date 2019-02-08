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
        cty.fillRect(this.x-this.r,this.y+this.r-this.r/4,this.r*2,this.r/4);
        cty.fillStyle = 'black';
        cty.beginPath();
        cty.arc(this.x-this.r/2, this.y-this.r/2, this.r/2, 0, 2*Math.PI);
        cty.fill();
        cty.beginPath();
        cty.arc(this.x+this.r/2, this.y-this.r/2, this.r/2, 0, 2*Math.PI);
        cty.fill();
        cty.beginPath();
        cty.fillStyle = 'white';
        cty.arc(this.x,this.y+this.r/4,this.r/2, 0, Math.PI);
        cty.fill();
    }
}
let smilies = [new Smiley(150,60,0,0,40,'lightcoral'), new Smiley(20,110,1,0,20,'cadetblue'), new Smiley(70,100,1,0,20,'burlywood'), new Smiley(200,105,1,0,20,'burlywood'), new Smiley(250,100,1,0,20,'cadetblue')];
animateSmiley();

function animateSmiley(){
    cty.clearRect(0,0,300,200);
    for(let i=0;i<smilies.length;i++){
        smilies[i].draw();
        smilies[i].move();

    }
    requestAnimationFrame(animateSmiley);
}