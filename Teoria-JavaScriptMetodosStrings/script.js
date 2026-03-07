//Trim - remove espaço e caracteres especiais
let frase = "      um dia bonito";
console.log(frase);
console.log(frase.trim());

//PadStart - Adiciona caracter no inicio da string com no maximo quantidade de caracteres passada no argumento

let exemploPadStart = "5";
console.log(exemploPadStart.padStart(5, "0"));

//PadEnd - Adiciona caracter no final da string com no maximo quantidade de caracteres passada no argumento

console.log(exemploPadStart.padEnd(5, "0"));

//Split - Separa a string em uma lista, removendo o que é passado no argumento

let testeSplit = "o rato roeu a roupa do rei de roma";
console.log(testeSplit.split(" "));

//Join - Une um array em uma string

let testeJoin = ["mouse", "teclado", "gabinete"];
console.log(testeJoin.join(" "));

//Repeat - repete a string com a quantidade de vezes que foi passada no argumento
let testeRepeat = "palavra ";
console.log(testeRepeat.repeat(5));
