//Selecionando elemento por tag
const listItens = document.getElementsByTagName("li");

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

//createTextNode
const meuTexto = document.createTextNode("Agora vamos colocar mais um titulo");
console.log(meuTexto);

const h3 = document.createElement("h3");
h3.appendChild(meuTexto);
console.log(h3);
mainContainer.appendChild(h3);

//Alternado atributos
const primeiroLink = navLinks.querySelector("a");
console.log(primeiroLink);
primeiroLink.setAttribute("href", "https://www.google.com");
console.log(primeiroLink.getAttribute("href"));
primeiroLink.setAttribute("target", "_blank");

//Altura e largura
const footer = document.querySelector("footer");

//Considera as bordas
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);
//Desconsidera as bordas
console.log(footer.clientWidth);
console.log(footer.clientHeight);

//Posicao do elemento
produto1 = produto[0];
console.log(produto1.getBoundingClientRect());

//Alterando estilos do elemento
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "green";
mainContainer.style.paddingBottom = "15px";

//Alterando estilo de varios elementos
for (const li of listItens) {
  li.style.backgroundColor = "blue";
}
