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

let bonus1 = document.getElementById('bonus1');
bonus1.addEventListener('click', revealBonus1);

function revealBonus1(){
    let challenge1 = document.getElementById('challenge1');
    if(challenge1.style.display == 'block'){
        challenge1.style.display = 'none';
    } else {
        challenge1.style.display = 'block';
    }
}
