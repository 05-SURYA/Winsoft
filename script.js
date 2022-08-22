function cardDisplay(element){
    let child = element.childNodes;    
    let obj = child[1];
    let bg = window.getComputedStyle(element).backgroundImage;
    element.store = bg;
    element.style.backgroundImage="url('')";
    let color = window.getComputedStyle(obj).backgroundColor;
    element.style.backgroundColor = color; 
    child[3].style.display="block";
}
function reDo(element){
    element.style.backgroundImage = element.store;
    let child = element.childNodes;
    child[3].style.display="none";
}

function displayChat(ele){
    let element = ele.parentNode;
    let child = element.childNodes;
    let disp = window.getComputedStyle(child[2]).display;
    console.log(disp);
    if(disp=="none"){
         child[2].style.display= "block";
    }else{
        child[2].style.display = "none";
    }
}
