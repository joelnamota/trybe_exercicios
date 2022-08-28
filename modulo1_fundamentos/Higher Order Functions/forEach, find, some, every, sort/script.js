//CONTEUDO DA AULA - imprimir todos os elementos do array
const letters = ['a', 'e', 'i', 'o', 'u'];

// usando o FOR
for (index = 0; index < letters.length; index +=1 ) {
    console.log(letters[index]);
}

// usando o forEach
array.forEach(callback(currentValue [, index [, array]])[, thisArg]);
letters.forEach( (letter, index, array) => {
    console.log('Valor corrente: ${letter} --> Index: ${index} --> Array: ${array}');
    console.log(letter);
});

//refatorando
letters.forEach( (letter) => console.log(letter));

