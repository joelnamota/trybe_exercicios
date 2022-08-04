//texte para fixar 
//exercicio 1
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
  };

  console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');
  player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]
  console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');


//praticando
let pessoa = {
nome: 'Joelna',
ultimoNome: 'Mota',
idade: 33,
filmes: ['Harry Potter', ' Como se fosse a primeira vez' ],
};

//puxando um elemento
//forma 1 
console.log('Eu sou' + ' ' + pessoa.nome + ' ' + pessoa.ultimoNome + ' ' + 'tenho' + ' ' + pessoa.idade + ' ' + 'anos e gosto de assistir' + ' ' + pessoa.filmes );
//forma 2
console.log(`Eu sou ${pessoa['nome'] + ' ' + pessoa['ultimoNome']}`)

//A ultima forma é mais utilizada para acrescentar ou alterar valores, 
//acrescentando valor na forma 2
pessoa['fullName'] = `${pessoa['nome'] + " " + pessoa['ultimoNome']}`;
console.log(pessoa)

//Adicionando um objeto dentro de outro objeto
pessoa['nascimento'] = {
    cidade: 'Rio de Janeiro',
    estado: 'Rio de Janeiro'
}
console.log(pessoa)

//Acessando um objeto dentro de outro
console.log(pessoa['nascimento']['cidade'] + ', ' + pessoa['nascimento']['estado'])

//Acessando um objeto dentro de um array
let Pessoas = [
    {
        nome: 'Joelna',
        lastname: 'Mota',
    },
    {
        nome: 'João',
        lastname: 'Gabriel',
    },
]
//Acessando todo o objeto forma 1
let primeiraPessoa = Pessoas[0];
console.log(primeiraPessoa)
//Forma 2
console.log(Pessoas[0]);
//Acessando um valor dentro de um objeto
console.log(primeiraPessoa['nome'])
