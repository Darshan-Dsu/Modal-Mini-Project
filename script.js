'use strict';


const btns=document.querySelectorAll(".show-modal");
const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const clsbtn=document.querySelector(".close-modal");

const openModal=function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");  
  }

const closeModal=function(){
    modal.classList.add("hidden");
      overlay.classList.add("hidden");
}

for(var i=0;i<btns.length;i++){
    btns[i].addEventListener("click",openModal)
}

document.addEventListener("keypress",function(event){
   
    if(event.key === "E" || event.key === "e") {  
        document.addEventListener("keypress",closeModal);
    }
})
clsbtn.addEventListener("click",closeModal)

overlay.addEventListener("click",closeModal);


