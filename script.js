
let btn=document.getElementById("btn");
var obj={};
var count=0;
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
    }
}
var whole=document.createElement("div");
    whole.className+="whole";
    document.body.appendChild(whole);
function create(num1,num2,operation){
    var divchange=document.createElement("div");
    divchange.className+="divchange";
    var h1=document.createElement("h2");
    h1.innerHTML=num1;
    var h2=document.createElement("h2");
    h2.innerHTML=symbol(operation)
    var h3=document.createElement("h2");
    h3.innerHTML=num2;
    var input=document.createElement("input");
    input.setAttribute("class","answer");
    input.setAttribute("type","txt");
    divchange.appendChild(h1);
    divchange.appendChild(h2);
    divchange.appendChild(h3);
    divchange.appendChild(input);
    whole.appendChild(divchange)
}
    function click(){
        var range1=document.getElementById("range").value;
        var operation=document.getElementById("operation").value;
        var range=parseInt(range1);
        var random1;
        var random2;
        for(let i=0;i<=8;i++){
             random1=rg(range);
             random2=rg(range);
             create(random2,random1,operation);
             
            
     }
     btn.addEventListener("click",click);




// let a=parseInt(prompt("Give Number"));
// if(a>0){
//     console.log("this is Positive Number");
// }else if(a<0){
//     console.log("this is  negative Number");
// }else{
//     console.log("No Negative and Positive");
// }


// let a="simeon";
// let b="";
// for(let i=a.length;i>0;i--){
//     console.log(a[i-1]);
//     b+=a[i-1];
// }
// console.log(b);



// let a="ammaa";
// let b=a.split("").reverse().join("");
// if(a==b){
//     console.log("palindrome");
// }else{
//     console.log("no Palindrome");
// }


