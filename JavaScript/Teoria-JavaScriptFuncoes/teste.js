const nome = "lucas";
const idade = 22;
console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);

const numero1 = 10;
const numero2 = 5;
const soma = numero1 + numero2;
console.log(soma);

function verificaIdade(idade) {
  if (idade >= 18) {
    console.log("Voce é maior de idadde");
  } else {
    console.log("Voce é menor de idade");
  }
}
verificaIdade(idade);

const numero = 5;
function parOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log("Par");
  } else {
    console.log("Impar");
  }
}
parOuImpar(numero);

const nota = 4;

function verificadorNota(nota) {
  if (nota >= 7) {
    console.log("aprovado");
  } else if (nota >= 5) {
    console.log("recuperacao");
  } else {
    console.log("reprovado");
  }
}
verificadorNota(nota);

/*for (let i = 0; i <= 10; i++) {
  console.log(i);
}*/
/*let somaLoop = 0;
for (let k = 0; k <= 100; k++) {
  somaLoop += k;
  console.log(somaLoop);
}*/

const frutas = ["maça", "banana", "uva", "laranja", "abacaxi"];
console.log(frutas[0]);
console.log(frutas[frutas.length - 1]);

for (let f = 0; f < frutas.length; f++) {
  console.log(`fruta: ${frutas[f]}`);
}

const numeros = [5, 8, 12, 3, 7];
for (let b = 0; b < numeros.length; b++) {
  if (numeros[b] > 6) {
    console.log(numeros[b]);
  }
}

function somaAeB(a, b) {
  return a + b;
}
console.log(`resultado: ${somaAeB(10, 20)}`);

function maiorNumero(primeiroNumero, segundoNumero) {
  if (primeiroNumero > segundoNumero) {
    console.log(`${primeiroNumero}`);
  } else {
    console.log(`${segundoNumero}`);
  }
}
maiorNumero(50, 20);

pessoa = {
  nome: "lucas",
  idade: 22,
  cidade: "londrina",
};
console.log(`${pessoa.nome} mora em ${pessoa.cidade}`);

let antigo = 0;
const arrayNovo = [10, 20, 30, 40];
for (let contador = 0; contador < arrayNovo.length; contador++) {
  antigo += contador;
  console.log(antigo);
}
