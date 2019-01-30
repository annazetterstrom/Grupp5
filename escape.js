
grej = true;
let taggtext; //sätt lika med texten som ska konverteras
while(grej){
    grej = false;
    if(taggar.innerText=="<"){
        taggtext = taggtext.replace("<", "&lt;");
        grej = true;
    }
    if(taggar.innerText==">"){
        taggtext = taggtext.replace("<", "&gt;");
        grej = true;
    }
}
