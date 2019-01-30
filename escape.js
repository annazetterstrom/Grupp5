let taggar = document.getElementById('taggar');
grej = true;
let taggtext = taggar.innerHTML;
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