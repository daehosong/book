const user = {
    name : "daeho",
    callname :function(personName){
        console.log("Hi "+ personName +" how old are you?");
    },
    age : "22",
    callage : function(personAge){
        console.log("My age is "+ personAge);
    }
};

user.callname("daeho");

user.callage("22");

//========================================================

//const title = document.getElementById("title"); 
//title.innerText = "Got you!";

//console.log(title.id);
//console.log(title.className);

//====================================================

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

//=======================================================
//3.2
const title = document.querySelector("div.hello:first-child h1");
// console.dir(title);
function handleTitleClick(){
 //   console.log("title was clicked!");
    title.style.color="blue";
}

function handleMouseEnter(){
console.log("mouse is here!");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
