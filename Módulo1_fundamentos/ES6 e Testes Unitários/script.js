function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// primeiro passo: Modifique a estrutura da função para que ela seja uma arrow function.

const testingScope = (escopo) => { // Alterando estrutura para utilizar arrow function
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
};

testingScope(true);

//Segundo passo: Altere as concatenações para template literals.

const testingScope = escopo => {
  if (escopo === true) { 
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`; // Substituição das concatenações de strings para template literals
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui? :O`); // Substituição das concatenações de strings para template literals
}

testingScope(true);

//Terceiro passo: Altere a variável do tipo var, ifScope para let e elseScope, para const.
//Dessa forma elas não vazam o escopo do if e else.

const testingScope = (escopo) => { 
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)'; // Alterando o tipo da variável para const
    ifScope = ifScope + ' ótimo, fui utilizada no escopo!';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)'; // Alterando o tipo da variável para const
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui? :O`);
};

testingScope(true);

// Quarto passo: Retire o console.log que está fora do if/else
//Agora que as variáveis ifScope e elseScope foram alteradas para respeitarem o escopo, 
//você deve retirar o console.log que está fora do if/else para que
//seu código consiga ser executado sem nenhum erro, pois essas variáveis não são mais acessíveis fora de seu escopo.

const testingScope = (escopo) => { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);