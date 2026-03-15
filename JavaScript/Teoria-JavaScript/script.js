const frutas = ["maca", "banana", "morango"];
const [f1, f2, f3] = frutas;
console.log(f3);

const produto = {
  nome: "mouse",
  preco: 200,
  cor: "preto",
  categoria: "periferico",
};

const { nome, preco, cor, categoria } = produto;
console.log(categoria);

function exibirProduto({ nome, preco }) {
  console.log(nome, preco);
}
exibirProduto(produto);

const brinquedos = ["carriinho", "aviao", "spinner"];
const marcos = [...frutas, ...brinquedos];
console.log(marcos);
const lucas = [0, ...frutas, "oloco"];
console.log(lucas);

const nomeCarro = { nome: "x6" };
const marcaCarro = { marca: "bwm" };
const precoCarro = { preco: 2000 };

const carro = { ...nomeCarro, ...marcaCarro, ...precoCarro };
console.log(carro);

class Animal {
  constructor(nome, cor) {
    this.nome = nome;
    this.cor = cor;
  }
}

class Peixe extends Animal {
  constructor(nome, cor, aquatico) {
    super(nome, cor);
    this.aquatico = aquatico;
  }
}

const peixe = new Peixe("nemo", "vermelho", true);
console.log(peixe);
