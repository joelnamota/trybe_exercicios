const sum = (value1 , value2) => value1 + value2 

console.log(sum(2,3));

//Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addNewKey = (obj, key, value) => {
    obj[key] = value;
    // através do "obj[key]" acessamos a chave do objeto cujo valor queremos modificar. A partir daí basta atribuir o valor desejado, que em nossa função é o terceiro parâmetro (value).
  };
  
  addNewKey(lesson2, 'turno', 'noite');
  console.log(lesson2);

  //Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
  const listKeys = (obj) =>  Object.keys(obj);
// O metodo "Object.keys()" faz essa listagem, basta passarmos o objeto que queremos referenciar como parâmetro.

console.log(listKeys(lesson1));

//Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
const sizeObj = (obj) =>  Object.keys(obj).length;
// Como o "Object.keys()" devolve um array, podemos utilizar o método ".length" para obter seu tamanho
console.log(sizeObj(lesson1));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (obj) =>  Object.values(obj);
// Quando queremos recuperar as chaves usamos o "Object.keys()", de forma similar, para recuperar os valores em um array usamos o método "Object.values()"

console.log(listValues(lesson1));

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 
//Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// O método "Object.assign()" recebe dois parametros, um objeto, e o que queremos atribuir à ele. Se no primeiro parametro passarmos um objeto vazio ele criará um objeto novo com as carateristicas do segundo parâmetro.

console.log(allLessons);

//Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:
const getValueByNumber = (obj,number) => Object.values(obj)[number];
  // usamos o "Object.values()" para criarmos um array com os valores do objeto, e então acessamos a sua posição passando o índice.
console.log(getValueByNumber(lesson1, 2));