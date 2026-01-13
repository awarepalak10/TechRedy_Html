let button=document.querySelector(".btn");

console.log(button[0]);

let para=document.getElementsByClassName("text");

console.log(para[0]);

button.addEventListener("click",function(){
    para[0].style.display="none";

})

button.addEventListener("click",function(){