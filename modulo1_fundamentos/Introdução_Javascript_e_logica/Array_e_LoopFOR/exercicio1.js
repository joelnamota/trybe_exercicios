// Utilizando o array abaixo, percorra-o somando todos os valores. 
//Caso o valor final seja maior que 15, imprima-o. 
//Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":
let fruits = [3, 4, 10, 1, 12];
// segue etapas:
// adicionar uma array
// criar uma variável com valor 0 (soma partindo do 0 e somando a ele)
// criar um loop que pecorra o array
// incrementar a variável com o valor correspondente a cada loop
// criar um IF com a condição da variável ser maior que 15
// caso a variável obedeça a condição: imprimir a variável
// caso nao obedeça a condição: imprimir a mensagem "valor menor que 15"

let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for ( let index = 0; index < fruits.length; index += 1) {
    sum += fruits[index];
}

if (sum > 15) {
    console.log(sum);
} else {
    console.log("valor menor que 16");
}