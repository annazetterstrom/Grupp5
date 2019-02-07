let codediv = document.getElementById('code1');
let button = document.getElementById('button');
button.addEventListener('click', evaluate);

function evaluate(){
    let code = codediv.value;
    eval(code);
}
