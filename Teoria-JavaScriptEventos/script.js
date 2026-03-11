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
