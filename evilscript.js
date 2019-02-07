let buttons = document.getElementsByClassName('runcode');
let textfields = document.getElementsByClassName('codefield');
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', evaluate);
}

function evaluate(){
    let subjectnumber = this.id.substring(1) - 1;
    eval(textfields[subjectnumber].value);
}