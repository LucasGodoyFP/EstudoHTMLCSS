//Selecionando elemento por id
const titulo = document.getElementById("titulo");
console.log(titulo);

//Selecionando elemento por classe
const produto = document.getElementsByClassName("produto");
console.log(produto);

//Selecionando elemento por css
const produtoQuery = document.querySelectorAll(".produto");
console.log(produtoQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

//insertBefore
const p = document.createElement("p");
let header = titulo.parentElement;
header.insertBefore(p, titulo);

//appendChild
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

//replaceChild
const h2 = document.createElement("h2");
h2.textContent = "mario";
header.replaceChild(h2, titulo);
