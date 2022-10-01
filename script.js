let whole=document.getElementById("whole");
function mt(range){
    let random=Math.ceil(Math.random()*range);
    return random;
}
function Symbol(operation){
    switch(operation){
        case "add":
            return "+"
            break;
            case "sub":
                return "-"
                break;
                case "multi":
                    return "*"
                    break;
                    case "divide":
                        return "/"
                        break;
    }
}

function create(random1,random2,operation){
    let div=document.createElement("div");
    div.setAttribute("class","promblem");
    
    let h2=document.createElement("h2");
    h2.setAttribute("class","h2");
    h2.innerText=random1;
    let operator=document.createElement("h2");
    operator.setAttribute("class","operation");
    operator.innerText=Symbol(operation);
    let h3=document.createElement("h2");
    h3.setAttribute("class","h3");
    h3.innerText=random2;
    let input=document.createElement("input");
    input.setAttribute("class","answer");
    input.setAttribute("type","answer");
    div.append(h2);
    div.append(operator);
    div.append(h3);
    div.append(input);
    whole.append(div);


}
function stage1(){
let range=document.getElementById("range").value,
operation=document.getElementById("operation").value,random1,random2;
for(let i=0;i<range;i++){
      random1=mt(range);
      random2=mt(range);
      create(random1,random2,operation);
      Symbol(operation)
}

}
function stage2(){
    let promblem=document.getElementsByClassName("promblem"),firsth3,opera,secondh3;
    for(let i=0;i<promblem.length;i++){
      firsth3=promblem.getElementsByClassName("h2");
      console.log(firsth3);

    }
}
let update=document.getElementById("update").addEventListener("click",stage1);
let finished=document.getElementById("finish").addEventListener("click",stage2)


