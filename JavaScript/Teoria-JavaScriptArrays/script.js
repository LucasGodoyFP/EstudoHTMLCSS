//Array - lista de elementos
const lista = ["manga", "banana"];
console.log(lista);
console.log(typeof lista);

//Length - mostra a quantidade de itens do array
const numeros = [1, 2, 3];
console.log(numeros.length);

//Indice - acessa um item do array pela posição
const arr = ["oi", "tchau", "tudo"];
console.log(arr[1]);

//Concat - junta dois arrays
const outrosNumeros = [4, 5, 6];
const arraysConcatenados = numeros.concat(outrosNumeros);
console.log(arraysConcatenados);

//Métodos de string
const teste = "lucas";
console.log(teste.toUpperCase());
console.log(teste.indexOf("c"));

//Objeto - estrutura com propriedades e valores
const pessoa = {
  nome: "lucas",
  idade: 22,
  curso: "programação",
};

console.log(pessoa);
console.log(pessoa.idade);
console.log(pessoa.nome.length);

//Adicionar e deletar propriedades de objeto
const carro = {
  motor: 1.0,
  marca: "BMW",
  modelo: "X6",
  km: 2000,
};

console.log(carro);

//Adiciona nova propriedade ao objeto
carro.portas = 5;

console.log(carro);

//Remove propriedade do objeto
delete carro.km;
console.log(carro);

//Object.assign - copia propriedades de um objeto para outro
const primeiroObjeto = {
  cor: "verde",
  numero: 2,
};

const segundoObjeto = {
  tamanho: 10,
};

Object.assign(segundoObjeto, primeiroObjeto);
console.log(segundoObjeto);

//Object.keys - mostra os nomes das propriedades
console.log(Object.keys(carro));

//Object.entries - mostra nome e valor das propriedades
console.log(Object.entries(carro));

//Mutação - dois objetos apontando para o mesmo objeto na memória
const a = {
  cor: "azul",
};

const b = a;
console.log(a);
console.log(b);

a.numero = 10;
console.log(a);
console.log(b);

//Alteração em um afeta o outro
delete b.numero;
console.log(a);
console.log(b);

//For - percorre todos os itens do array
const percorrerArray = [10, 20, 30, 40, 50];
for (contador = 0; contador < percorrerArray.length; contador++) {
  console.log(percorrerArray[contador]);
}

//Push e Pop
const frutas = ["maçã", " banana"];
console.log(`o array original tem: ${frutas}`);

//Push - adiciona item no final do array
frutas.push("mamao");
console.log(`o array apos o push tem: ${frutas}`);

//Pop - remove item do final do array
itemRemovido = frutas.pop();
console.log(`o array apos o pop tem: ${frutas}`);
console.log(`a variavel item removido armazenou: ${itemRemovido}`);

//Push com varios elementos
const variosPush = [1, 2];
variosPush.push(4, 6, 7, 8, 9);
console.log(variosPush);

//Shift e Unshift

//Shift - remove o primeiro item do array
const testandoShift = ["verde", "vermelho"];
elementoRemovido = testandoShift.shift();
console.log(elementoRemovido);
console.log(testandoShift);

//Unshift - adiciona itens no inicio do array
testandoShift.unshift("azul", "marrom");
console.log(testandoShift);

//IndexOf e LastIndexOf
const meusElementos = ["pera", "goiaba", "uva", "pera"];

//IndexOf - encontra o indice de um elemento
console.log(meusElementos.indexOf("pera"));
console.log(meusElementos[0]);

//LastIndexOf - encontra a ultima ocorrência
console.log(meusElementos.lastIndexOf("pera"));

//Slice - cria um novo array a partir de parte do original
const testeSlice = ["a", "b", "c", "d", "e"];

//Do indice 2 ao 4
console.log(testeSlice.slice(2, 4 + 1));

//Do indice 2 até o final
console.log(testeSlice.slice(2));

//ForEach - executa uma função para cada item do array
const arrayNumerico = [1, 2, 3, 4, 5];
arrayNumerico.forEach((numero) => {
  console.log(numero);
});

//Exemplo com objetos dentro do array
const posts = [
  { titulo: "primeiro post", likes: 2 },
  { titulo: "shrek", likes: 5 },
];

posts.forEach((post) => {
  console.log(`exibindo ${post.titulo}, likes: ${post.likes}`);
});

//Includes - verifica se existe elemento no array
const marcas = ["bmw", "fiat", "celta"];
console.log(marcas.includes("fiat"));

//Reverse - inverte a ordem do array
let animais = ["cao", "gato", "peixe"];
console.log(animais);
console.log(animais.reverse());

//Rest Operator - recebe quantidade indefinida de argumentos
const somaInfinita = (...argumentos) => {
  let total = 0;

  for (let i = 0; i < argumentos.length; i++) {
    total += argumentos[i];
  }

  return total;
};

console.log(somaInfinita(1, 7, 2));

//ForOf - percorre valores de arrays ou listas
let testeForOf = (...argumentos) => {
  total = 0;

  for (numero of argumentos) {
    total += numero;
  }

  return total;
};

console.log(testeForOf(1, 7, 2));

//Destructuring (objetos) - cria variáveis a partir das propriedades
const testeDestructuring = {
  primeiroNome: "joao",
  ultimoNome: "pereira",
  profissao: "programador",
};

const { primeiroNome, ultimoNome, profissao } = testeDestructuring;
console.log(primeiroNome, ultimoNome, profissao);

//Renomeando variável
const { primeiroNome: firstName } = testeDestructuring;
console.log(firstName);

//Destructuring (arrays) - cria variáveis a partir de posições do array
let veiculos = ["aviao", "carro", "barco"];
const [veiculoA, veiculoB, veiculoC] = veiculos;
console.log(veiculoA);

//JSON - estrutura de dados em formato de texto
const exemploJSON =
  '{"nome": "lucas", "idade": 22, "habilidades": ["HTML","CSS","JAVASCRIPT"]}';

//JSON.parse - converte JSON para objeto
const convertidoObjeto = JSON.parse(exemploJSON);
console.log(convertidoObjeto);

//JSON.stringify - converte objeto para JSON
const convetidoJSON = JSON.stringify(convertidoObjeto);
console.log(convetidoJSON);
