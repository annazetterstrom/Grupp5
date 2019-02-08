
  function displayColor(){
    btnBackground.style.backgroundColor = colors[this.id]; 
    codeColor.innerText = colors[this.id]; 
}


let btnBackground = document.getElementById("backgroundColor"); 

let colors = ["#800000", "#073C04", "#00008B"]

let maroon = document.getElementById("0"); 
let emerald = document.getElementById("1");
let blue = document.getElementById("2"); 

let codeColor = document.getElementById("codeColor"); 

maroon.addEventListener("click", displayColor); 
emerald.addEventListener("click", displayColor); 
blue.addEventListener("click", displayColor); 





