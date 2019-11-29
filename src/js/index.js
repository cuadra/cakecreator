/*
const msg = document.createElement("h2");
msg.textContent = "Hello";
document.querySelector("body").appendChild(msg);
*/

const flavors = ["vanilla", "chocolate", "cream cheese", "lemon", "cookies & cream", "marshmallow vanilla"];

const flavorsElm = document.createElement("select");

let option = document.createElement("option");
option.textContent = "select";
flavorsElm.appendChild(option);

for (let i = 0; i < flavors.length; i++) {
let option = document.createElement("option");
option.textContent = flavors[i];
flavorsElm.appendChild(option);
} 

console.log(flavorsElm);

document.querySelector("body").appendChild(flavorsElm);