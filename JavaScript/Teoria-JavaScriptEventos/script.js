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
