const lista = ["manga", "banana"];
console.log(lista);
console.log(typeof lista);

//Propreidades:

const numeros = [1, 2, 3];
console.log(numeros.length);

//Acessando item do array com indice:

const arr = ["oi", "tchau", "tudo"];
console.log(arr[1]);

//Métodos:
//Métodos são os nomes roxos depois do . ex: numeros.concat
//Propriedades são os nomes azuis depois do . ex: length

const outrosNumeros = [4, 5, 6];
const arraysConcatenados = numeros.concat(outrosNumeros);
console.log(arraysConcatenados);

const teste = "lucas";
console.log(teste.toUpperCase());
console.log(teste.indexOf("c"));

//Objetos:

const pessoa = {
  nome: "lucas",
  idade: 22,
  curso: "programação",
};

console.log(pessoa);
console.log(pessoa.idade);
console.log(pessoa.nome.length);

//Criando e deletando propriedades:

const carro = {
  motor: 1.0,
  marca: "BMW",
  modelo: "X6",
  km: 2000,
};
console.log(carro);
//Adicionando propriedade depois
carro.portas = 5;

console.log(carro);
delete carro.km;
console.log(carro);

//Mais sobre objetos:

const primeiroObjeto = {
  cor: "verde",
  numero: 2,
};

const segundoObjeto = {
  tamanho: 10,
};

//Passa as propriedades do primeiroObjeto para o segundoObjeto
Object.assign(segundoObjeto, primeiroObjeto);
console.log(segundoObjeto);

//Mostra os nomes das propriedades do objeto
console.log(Object.keys(carro));

//Mostra nome e valor da propriedade do objeto:

console.log(Object.entries(carro));

//Mutacao:

const a = {
  cor: "azul",
};

const b = a;
console.log(a);
console.log(b);

a.numero = 10;
console.log(a);
console.log(b);

//Não foi criado um objeto novo, e sim uma referencia do primeiro
delete b.numero;
console.log(a);
console.log(b);

const percorrerArray = [10, 20, 30, 40, 50];
for (contador = 0; contador < percorrerArray.length; contador++) {
  console.log(percorrerArray[contador]);
}

//Push e Pop:

const frutas = ["maçã", " banana"];
console.log(`o array original tem: ${frutas}`);
//Push coloca um ou varios itens ao final do array
frutas.push("mamao");
console.log(`o array apos o push tem: ${frutas}`);

//Pop remove um item ao final do array e guarda ele
itemRemovido = frutas.pop();
console.log(`o array apos o pop tem: ${frutas}`);
console.log(`a variavel item removido armazenou: ${itemRemovido}`);

const variosPush = [1, 2];
variosPush.push(4, 6, 7, 8, 9);
console.log(variosPush);

//Shift e Unshift

//Shift remove o primeiro item do array e guarda ele
const testandoShift = ["verde", "vermelho"];
elementoRemovido = testandoShift.shift();
console.log(elementoRemovido);
console.log(testandoShift);

//Unshift adiciona um ou varios itens no inicio do array:
testandoShift.unshift("azul", "marrom");
console.log(testandoShift);

//IndexOf e lastIndexOf
const meusElementos = ["pera", "goiaba", "uva", "pera"];
//indexOf descobre o indice de um item
console.log(meusElementos.indexOf("pera"));
console.log(meusElementos[0]);

//lastIndexOf pra casos de repeticao
console.log(meusElementos.lastIndexOf("pera"));

//Slice corta array grande em array menor sem afetar o original
const testeSlice = ["a", "b", "c", "d", "e"];

//Pega do indice 2 ao 4
console.log(testeSlice.slice(2, 4 + 1));

//Pode passar do indice desejado pra frente. ex: 2 em diante

console.log(testeSlice.slice(2));

//ForEach: para cada numero do array imprima o numero
//Forma mais facil de percorrer o array

const arrayNumerico = [1, 2, 3, 4, 5];
arrayNumerico.forEach((numero) => {
  console.log(numero);
});
