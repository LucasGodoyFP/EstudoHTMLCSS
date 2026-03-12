//Adicionar eventos
const botao = document.querySelector("#my-button");
const outroBotao = document.querySelector("#my-other-button");

function imprimirMensagem() {
  console.log("clicou");
}
botao.addEventListener("click", imprimirMensagem);

//Remover eventos
outroBotao.addEventListener("click", function deletarEvento() {
  botao.removeEventListener("click", imprimirMensagem);
});

//Argumento do evento - util para saber informações do evento
const meuTitulo = document.querySelector(".titulo");
meuTitulo.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

//Propagação - Quando um filho ativa o evento do pai
const containerBtn = document.querySelector("#btn-container");
const btnInside = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("evento 1 ");
});

btnInside.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("evento 2");
});

const google = document.querySelector("a");

//Remover funcoes padrao
google.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicou e nao foi pro google");
});

//Eventos de tecla

document.addEventListener("keyup", (event) => {
  console.log(`soltou a tecla ${event.key}`);
});

document.addEventListener("keydown", (event) => {
  console.log(`apertou a tecla ${event.key}`);
});

//Outros eventos de mouse
const mouseEvento = document.querySelector("#mouse");

//Apertando click do mouse
mouseEvento.addEventListener("mousedown", () => {
  console.log("apertou");
});

//Soltando click do mouse
mouseEvento.addEventListener("mouseup", () => {
  console.log("soltou");
});

//Clique duplo
mouseEvento.addEventListener("dblclick", () => {
  console.log("clique dupplo");
});

//Movimento do mouse
/*document.addEventListener("mousemove", (event) => {
  console.log(`eixo X: ${event.x}`);
  console.log(`eixo Y: ${event.y}`);
});*/

//Sroll
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    console.log("passamos de 200px");
  }
});

//Evento de foco
input = document.querySelector("#meu-input");

//Ativa quando clica no input
input.addEventListener("focus", () => {
  console.log("Entrou no input");
});

//Ativda quando sai do input
input.addEventListener("blur", () => {
  console.log("Saiu do input");
});

//Evento de carregamento da pagina
window.addEventListener("load", () => {
  console.log("carregou a pagina");
});
