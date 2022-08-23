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


function showNav(ele) {
    let element=ele.parentNode;
    let child = element.childNodes;
    let check= window.getComputedStyle(child[1]).display;
    if(check=="none"){
      for(let i=0;i<child.length;i++){
          if(child[i].tagName=='A'){
              child[i].style.display="block";
          }
        }
    
    }
    else{
        for(let i=0;i<child.length;i++){
            if(child[i].tagName=='A'){
                child[i].style.display="none";
            }
        }
    }
}

class Courses{
    constructor(name,fees){
       this.name = name;
       this.fees = fees;
    }
}

let course1 = new Courses("Tally",25000);
let course2 = new Courses("MsOffice",20000);
let course3 = new Courses("Programming",15000);
let course4 = new Courses("Adobe",18000);

const courses =[course1, course2, course3, course4];
function getQuotes(){
    let box = document.getElementsByTagName('div');
    let child = box[4];
    let select = document.getElementById("quotes").value;
    if(select == 0){
        alert("select the course to get quotes")
        return;
    }
    if(child.childNodes.length>13){
        child.removeChild(child.childNodes[13]);
    }
    for(let i=0; i<courses.length;i++){
        if(courses[i].name==select){
            let result = courses[i].fees;
            let newDoc = document.createElement("h2");
            newDoc.innerHTML="Course fee for "+ courses[i].name + " : ₹ " + result;
            newDoc.style.textAlign="center";
            child.appendChild(newDoc);
            setTimeout(()=>{
                child.childNodes[13].innerHTML=" ";
            },5000);
        }
    } 
}
