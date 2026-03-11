console.log("ainda nao executou");

//setTimeout - Define um tempo pra executar algo
setTimeout(function () {
  console.log("requisicao assincrona");
}, 2000);

console.log("ainda nao executou 2 ");

//setInterval - Fica executando algo de tempo em tempo, não para
/*console.log("ainda nao começou");
setInterval(function () {
  console.log("Intervalo definido");
}, 3000);
console.log("ainda nao começou 2 "); */

//Promisse -
function pedirPizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pizza pronta!!");
    }, 2000);
  });
}
console.log("fazendo o pedido da pizza...");
pedirPizza().then((mensagem) => {
  console.log(mensagem);
});
console.log("esperando a pizza chegar ");

//Falha na promisse
Promise.resolve(5 * "dawd")
  .then((numero) => {
    if (Number.isNaN(numero)) {
      throw new Error("valores invalidos");
    }
    return numero;
  })
  .catch((err) => console.log(`um erro ocorreu ${err}`));

//teste

function checkNumber(A) {
  return new Promise((resolve, reject) => {
    if (A > 10) {
      resolve("A é maior que 10");
    } else {
      reject(new Error("numero muito pequeno"));
    }
  });
}

const ola = checkNumber(20);
const tchau = checkNumber(10);
console.log(ola, tchau);

ola.then((valor) =>
  console
    .log(`o resultado é: ${valor}`)
    .catch((err) => console.log(`um erro ocorreu ${err}`)),
);

//async function
async function somarComDelay(numero1, numero2) {
  return numero1 + numero2;
}

somarComDelay(10, 20).then((value) => {
  console.log(`o valor da soma é: ${value}`);
});
