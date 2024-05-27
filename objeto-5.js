// Crie um objeto livro com as seguintes propriedades: título,
// autor, ano de publicação, gênero, idade de publicação. Depois 
// altere o gênero do livro para "Aventura".

const anoAtual = new Date().getFullYear();

const book = {
    titulo: 'Programmer',
    autor: 'José',
    anoPublicacao: 2022 ,
    genero: 'Fantasia',
    idadePublicacao: anoAtual - 2022,
}


book.genero = 'Aventura';

console.log(book);