//Use Strict - Deixa o código mais rigoroso, bloqueando algumas coisas
"use strict";
//Ex: tentar declarar variavel sem const ou let da erro
let opa = "teste";

//Tratamento de dados

function checaNumero(numero) {
  const resultado = Number(numero);
  if (Number.isNaN(resultado)) {
    console.log("Valor incorreto!");
    return;
  }
  console.log("Valor correto!");
  return resultado;
}

checaNumero(5);
checaNumero("10");
checaNumero({});
checaNumero("teste");

//Throw new Error - Usado pra mostrar erros pros programadores

let x = 10;

/* if (x != 11) {
  throw new Error("O valor de x não pode ser diferente de 11");
}*/

//Try catch - Tenta executar algo, se der erro faz outra coisa
try {
  const soma = x + z;
} catch (error) {
  console.log(`Erro no programa ${error}`);
}

//Finally - Vai depois do try catc, executa se tiver erro ou nao no try catch

try {
  const valor = checaNumero("asd");
  if (!valor) {
    throw new Error("Valores inválidos!");
  }
} catch (error) {
  console.log(`Opa, aconteceu um problema ${error}`);
} finally {
  console.log("O código foi executado");
}

//Asertions

function checaLista(lista) {
  if (lista.length === 0) {
    throw new Error("A lista nao pode ser vazia");
  } else {
    console.log(`A lista tem ${lista.length} elementos`);
  }
}

checaLista([]);
