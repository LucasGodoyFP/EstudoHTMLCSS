let a = 5;
let b = 10;

function somarDoisValores(primeiroValor, segundoValor) {
  return primeiroValor + segundoValor;
}

let resultado = somarDoisValores(a, b);
console.log(resultado);

// Escopo dentro e fora da função:

let y = 10;

function testandoEscopo() {
  let y = 20;
  console.log(`y dentro da funcao vale: ${y}`);
}

testandoEscopo();
console.log(`y fora do escopo vale: ${y}`);

// Escopo aninhado:

let matheus = 20;

function escopoAninhado() {
  let matheus = 40;
  if (true) {
    let matheus = 50;
    if (true) {
      let matheus = 60;
      console.log(matheus);
    }
    console.log(matheus);
  }
  console.log(matheus);
}

escopoAninhado();
console.log(matheus);

//Arrow function:

const testeArrow = () => {
  console.log("isso é uma arrow function");
};

testeArrow();

const parOuImpar = (valor) => {
  if (valor % 2 === 0) {
    console.log("É par!!");
    return;
  }
  console.log("É impar!!");
};

parOuImpar(5);

//Arrow function resumida em 1 linha:

const potencia = (numero) => numero * numero;

console.log(potencia(12));

const helloWorld = () => console.log("ola vose");
helloWorld();

//Parametro opcional:

function multiplicacao(m, n) {
  if (n === undefined) {
    return m * 2;
  } else {
    return m * n;
  }
}

//Valor Default:

function saudacaoNova(nome, greet = "ola") {
  return `${greet}, ${nome}`;
}

console.log(saudacaoNova("matheus"));

console.log(saudacaoNova("Joao", "Bom dia"));

const repetirTexto = (texto, quantidadeRepetida = 5) => {
  for (let i = 0; i < quantidadeRepetida; i++) {
    console.log(texto);
  }
};

repetirTexto("testando");

//Closure:

function testandoClosure() {
  let txt = "algo";

  function dentroClosure() {
    console.log(txt);
  }
  dentroClosure();
}
testandoClosure();

//Mais sobre closure:

const multiplicacaoClosure = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicacaoClosure(5);
const c2 = multiplicacaoClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

//Recursão:

const untilTen = (n, m) => {
  if (n < 10) {
    console.log("A função parou de executar!");
  } else {
    const x = n - m;

    console.log(x);

    untilTen(x, m);
  }
};
untilTen(100, 7);
