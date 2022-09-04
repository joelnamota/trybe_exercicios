// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947() {
    // escreva aqui o seu código
    return books.find((book) => book.author.birthYear === 1947).author.name;
  }

//Retorne o nome do livro de menor nome.
function smallerName() {
    let nameBook;
    // escreva aqui o seu código
    function smallerName() {
        let nameBook;
        // escreva aqui o seu código
      
        books.forEach((book) => {
          if (!nameBook || book.name.length < nameBook.length) {
            nameBook = book.name;
          }
        });
        return nameBook;
      }
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }

//Encontre o primeiro livro cujo nome possui 26 caracteres.
function getNamedBook() {
    return books.find((book) => book.name.length === 26);
  }

  