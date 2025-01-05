let submitt = document.querySelector("button");
submitt.classList.add("btn_style");
let inp = document.querySelector("input");
inp.classList.add("btn_style");


let input_dat=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li")
    item.innerText=input_dat.value;

    let dlt=document.createElement("button");
    dlt.innerText = "delete";
    item.appendChild(dlt);
    ul.appendChild(item);
    input_dat.value="";
    dlt.addEventListener("click",function(){
        let par = dlt.parentElement;
        par.remove();

    });
    
});