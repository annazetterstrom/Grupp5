//background colors
let btnBackground = document.getElementById("backgroundColor"); 

let colors = ["#800000", "#073C04", "#00008B"]

let maroon = document.getElementById("0"); 
let emerald = document.getElementById("1");
let blue = document.getElementById("2"); 

let codeColor = document.getElementById("codeColor"); 

maroon.addEventListener("click", displayColor); 
emerald.addEventListener("click", displayColor); 
blue.addEventListener("click", displayColor); 

function displayColor(){
    btnBackground.style.backgroundColor = colors[this.id]; 
    codeColor.innerText = colors[this.id]; 
}

//border radius
let radiusimage = document.getElementById('radiusimage');
let radiusspan = document.getElementById('radiusspan');
radiusimage.addEventListener('click', toggleradius);

function toggleradius(){
  let borderradius = radiusimage.style.borderRadius;
  if(borderradius=='50%'){
    radiusimage.style.borderRadius = '0%';
    radiusspan.innerText = '0';
  } else {
    radiusimage.style.borderRadius = '50%';
    radiusspan.innerText = '50';
  }
}