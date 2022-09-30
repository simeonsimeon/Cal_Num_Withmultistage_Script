let btn=document.getElementById("btn");
let done=document.getElementById("done");

function rg(easy1){
    return parseInt(Math.random()*easy1);
}
function symbol(easy){
    switch(easy){
        case "add":
            return "+"
         case "sub":
            return "-"
        case "multi":
            return "*"
            case "divide":
            return "/"
    }
}



var whole=document.createElement("div");
    whole.className+="whole";
    document.body.appendChild(whole);
function create(num1,num2,operation){
    var divchange=document.createElement("div");
    divchange.className+="divchange";
    divchange.setAttribute("class","div")
    var h1=document.createElement("h2");
    h1.setAttribute("class","no1")
    h1.innerHTML=num1;
    var h2=document.createElement("h2");
    h2.setAttribute("class","operation")
    h2.innerHTML=symbol(operation)
    var h3=document.createElement("h2");
    h3.setAttribute("class","no2")
    h3.innerHTML=num2;
   var input=document.createElement("input");
    input.setAttribute("type","answer")
   input.setAttribute("class","answer");
    // input.setAttribute("class","answer");
    // input.setAttribute("type","txt");
    divchange.appendChild(h1);
    divchange.appendChild(h2);
    divchange.appendChild(h3);
    divchange.appendChild(input);
    whole.appendChild(divchange);
    ha=input.value;
    
    bg=divchange;
    // ldf(ha)
}




function store(raw1,raw2,op){

    if(op=="add"){
      add=raw1+raw2;
      arr.push(add);
     
    }
}
    function click(){
        var range1=document.getElementById("range").value;
        var operation=document.getElementById("operation").value;
        var range=parseInt(range1);
        var random1;
        var random2;
        if(operation!=="divide"){
        for(let i=0;i<range;i++){
             random1=rg(range);
             random2=rg(range);
             create(random2,random1,operation);
              
            }
        }else{
            for(let i=0;i<range;i++){
                random1=rg(range);
                random2=rg(range);
                if((random1%random2==0)&&(random1&&random2!=0)&&(random2<=random1)){
                    create(random1,random2,operation);
                }
               }
        }
        }
     btn.addEventListener("click",click);
   function stage(){
          let you=document.getElementsByClassName("div"),promblem,operationelm,numb1,numb2,operationtype;
let no1value,no2value,act,actvalue,a=0;


          
          for(let i=0;i<you.length;i++){
                  promblem=you[i];
                  
                  operationelm=promblem.getElementsByClassName("operation")[0];
                  operationtype=operationelm.innerHTML;

                  numb1=promblem.getElementsByClassName("no1")[0];
                  no1value=parseInt(numb1.innerHTML);
                  numb2=promblem.getElementsByClassName("no2")[0];
                  no2value=parseInt(numb2.innerHTML);
                  if(operationtype=="+"){
                      var answer=no1value+no2value;
                    //   console.log(answer)
                  }else if(operationtype=="-"){
                    var answer=no1value-no2value;
                  }else if(operationtype=="*"){
                    var answer=no1value*no2value;
                  }


                  act=promblem.getElementsByClassName("answer")[0];
                  console.log(act);
                  actvalue=act.value;
                  console.log(actvalue);
                
                  if(answer==actvalue){
                      a++
                  }

                



          }
          alert(a)
   }
   done.addEventListener("click",function(){
    stage()
   })

