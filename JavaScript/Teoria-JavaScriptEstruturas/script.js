// método é uma função de um objeto
// função é função sem objeto
console.log(Math.max(1, 8, 40));
console.log(Math.ceil(2.6));

console.error("erro");
console.warn("aviso");

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
  console.log("sao mais altos");
} else {
  console.log("os numeros nao sao mais altos");
}

if (1 > 2) {
  console.log("teste1");
} else if (2 > 1) {
  console.log("teste2");
} else if (5 < 10) {
  console.log("agora sim");
}

const name = "marcos";
const idade = 30;

if (name === "joao") {
  console.log("bem vindo joao");
} else if (name === "matheus" && idade === 30) {
  console.log("bem vindo matheus, sua idade é 30");
} else {
  console.log("vai toma na peida");
}

for (i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log("número par!");
    continue;
  }
  console.log(i);
}

let job = "estoquistas";

switch (job) {
  case "Programador":
    console.log("voce é um programador");
    break;
  case "advogado":
    console.log("voce e um advogado");
    break;
  default:
    console.log("ola");
}

variavel = 100;
switch (variavel) {
  case 200:
    console.log("certo");
  case 100:
    console.log("errado");
  case 10:
    console.log("verde");
  default:
    console.log("vermelho");
}
