const animal = {
  nome: "bob",
  latir: function () {
    console.log("au au");
  },
};
animal.latir();

const pessoa = {
  nome: "matheus",
  getNome: function () {
    return this.nome;
  },
  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.getNome());
pessoa.setNome("jao");
console.log(pessoa.getNome());

//Prototype - acessar método ou propriedade que não existe em um dado/objeto, mas existe no seu ancestral

const exemploPrototype = "oi";
console.log(Object.getPrototypeOf(exemploPrototype));

const verdadeiro = true;
console.log(Object.getPrototypeOf(verdadeiro));

//Acessando propriedade do objeto 1, no objeto 2
const objeto1 = {
  propriedade: "propriedade do objeto 1",
};

const objeto2 = Object.create(objeto1);
console.log(objeto2.propriedade);

//Classes básicas

const cachorro = {
  raca: null,
  patas: 4,
};

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "pastor alemao";
console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "bulldog";
console.log(bulldog);
console.log(bulldog.patas);

//Funcao como classe
function criarCarro(nome, marca) {
  const carro = Object.create({});
  carro.nome = nome;
  carro.marca = marca;
  return carro;
}

const x6 = criarCarro("X6", "BWM");
console.log(x6);

//Funcoes Construtoras
function Eletronico(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

const pc = new Eletronico("Gamer", 5900);
console.log(pc);

//Metodos na funcao construtora
Eletronico.prototype.jogar = function () {
  console.log("jogando minecraft");
};

pc.jogar();

//Classes
class Lendas {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
}

const omen = new Lendas("omen", "defensor");
console.log(omen);

//Mais sobre classes

class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }
  descreverCaminhao() {
    console.log(`o caminhao tem: ${this.eixos} eixos e é ${this.cor}`);
  }
}

const scania = new Caminhao(6, "vermelho");
console.log(scania);
scania.descreverCaminhao();

//Override

class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const lucas = new Humano("lucas", 22);
console.log(lucas);

//Symbol

class Aviao {
  constructor(marca, turbina) {
    this.marca = marca;
    this.turbina = turbina;
  }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("boeing", 10);
console.log(boeing);
console.log(boeing[asas]);
console.log(boeing[pilotos]);

//Getters e Setters
class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }
  get exibirTitulo() {
    return `Você está lendo: ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArrays = tags.split(", ");
    this.tags = tagsArrays;
  }
}

const batman = new Post("Batman que ri", "batman doido");
console.log(batman.exibirTitulo);

batman.adicionarTags = "herois, batman";
console.log(batman);

//Herança
class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas, patas);
    this.nome = nome;
  }
}

const lucao = new Lobo("5", "lucao");
console.log(lucao);

console.log(lucao instanceof Lobo);
console.log(Lobo instanceof Mamifero);
