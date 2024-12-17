document.body.style.backgroundColor = "black";
document.body.style.color  = 'white'


// console.log("The window object",window)
// console.log("The width of my current window is ", window.innerWidth)
// console.log("The height of my current window is ", window.innerHeight)


// //for getting history of window
// console.log("The history of window ", window.history)

// console.log(document)

document.addEventListener("DOMContentLoaded", ()=>{
    alert("dom loaded")
})


function func(){
    alert("page loaded")
}

window.addEventListener('load', func) //event handling
document.getElementById("hd").style.textAlign="center";
let nodes = document.querySelectorAll("p")

nodes.forEach((item)=>{
item.style.color= 'red'
})

let collection = document.getElementsByClassName("hd")

for(let i = 0 ; i < collection.length; i++){
    collection[i].style.color = 'pink'
}


//creating elements in js 
let div2 = document.getElementById("div2");

let ptag = document.createElement("p");
let ptext = document.createTextNode("This is the text in the p tag")
let putr = document.getElementById("putr")
ptag.appendChild(ptext);


div2.insertBefore(ptag,putr)




