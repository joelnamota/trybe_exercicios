//estrutura de uma HOF -  array.forEach( () => {})

//CONTEUDO DA AULA - imprimir todos os elementos do array
const letters = ['a', 'e', 'i', 'o', 'u'];

// usando o FOR
for (index = 0; index < letters.length; index +=1 ) {
    console.log(letters[index]);
}

// usando o forEach
array.forEach(callback(currentValue [index [array]])[thisArg]);
letters.forEach( (letter, index, array) => {
    console.log('Valor corrente: ${letter} --> Index: ${index} --> Array: ${array}');
    console.log(letter);
});

//refatorando
letters.forEach( (letter) => console.log(letter));

//multiplicando cada elemento do array por 3 e imprimir um array
const numbers = [1, 2, 3, 4, 5];

//usando o For
const multiploTres = [];
for ( index = 0; index < numbers.length; index += 1 ){
    multiploTres.push(numbers[index] * 3);
}

//usando o forEach

numbers.forEach( (number) => {
    multiploTres.push(numbers * 3);
} );

//refatorando

numbers.forEach((number) => multiploTres.push(numbers * 3));

console.log(multiploTres);

// colocando em uma função
const multiplicaPorTres = () => {
    numbers.forEach((number) => multiploTres.push(numbers * 3));

    return multiploTres;
}
console.log(multiplicaPorTres());

