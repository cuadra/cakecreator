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

const spongeCake = ["vanilla", "chocolate", "red velvet", "strawberry"];

const spongeCakeElm = document.createElement("select"); 

let sponge = document.createElement("option");
sponge.textContent = "select";
spongeCakeElm.appendChild(sponge);

for (let i = 0; i < spongeCake.length; i++) {
    let sponge = document.createElement("option");
    sponge.textContent = spongeCake[i]; spongeCakeElm.appendChild(sponge);
}

console.log(spongeCake);

document.querySelector("body").appendChild(spongeCakeElm);