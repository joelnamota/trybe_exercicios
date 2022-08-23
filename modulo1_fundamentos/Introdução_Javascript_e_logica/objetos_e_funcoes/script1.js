//FOR / IN
//exercicio 1 para fixar
//Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for (let name in names) {
    console.log('Olá, ' + names[name]);
  }

  //exerciocio 2
  //Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020,
  };
  
  for (let key in car) {
    console.log(key + ': ' + car[key]);
  }

  //ex aula ao vivo - a variável key representa as chaves do objeto bolo
  let bolo = {
    massa: 'chocolate',
    recheio: 'morango',
    cobertura: 'ninho',
    peso: '2kg',
  }

  for (let key in bolo){
    console.log(key);
  }
//quando imprimimos bolo[key], conseguimos acessar o valor que está em cada
//chave do bolo. nao é possivel fazer a mesma operação usando o bolo.key
for(let key in bolo){
    console.log(bolo[key]);
}