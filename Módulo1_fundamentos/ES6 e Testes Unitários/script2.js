const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {

// Seu código aqui.

};

console.log(oddsAndEvens); // será necessário alterar essa linha 😉

//Primeiro passo: Crie a função sortOddsAndEvens() que receberá um array por parâmetro.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {

};

console.log(oddsAndEvens); // será necessário alterar essa linha 😉

//Segundo passo: Utilize uma primeira estrutura de repetição for que fará a iteração sobre o array passado por parâmetro.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
for (let index = 1; index < array.length; index += 1) { //Aqui a iteração vai começar a partir do índice 1 do array

  }
};

console.log(oddsAndEvens); // será necessário alterar essa linha 😉

//Terceiro passo: Utilize agora uma segunda estrutura de repetição for, aninhada à primeira, que também fará a iteração sobre o array.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) { // Aqui a iteração vai começar a partir do índice 0 do array

    }
  }
};

console.log(oddsAndEvens); // será necessário alterar essa linha 😉

//Quarto passo: Crie então uma estrutura condicional if/else no escopo do segundo for que fará a 
//comparação dos valores das posições dos respectivos index, sendo o primeiro loop for começando pelo index 1 e o segundo loop for começando pelo index 0.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
        // Veja que ao fazer a comparação entre os _index_ em sequência, os elementos vão sendo ordenados de forma crescente
      }
    }
  }
};

console.log(oddsAndEvens); // será necessário alterar essa linha 😉

//Quinto passo: Retorne o resultado do array ordenado.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }

  return array;
};

console.log(oddsAndEvens); // será necessário alterar essa linha 😉

//Sexto passo: Imprima no terminal o retorno da função.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }

  return array;
};

console.log(sortOddsAndEvens(array));