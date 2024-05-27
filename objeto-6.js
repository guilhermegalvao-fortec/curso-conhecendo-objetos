// Crie um objeto livro com as seguintes propriedades: título, autor,
// ano de publicação, gênero, idade de publicação. Em seguida, exclua
// a propriedade avaliacao do objeto livro. Depois, exiba os detalhes
// do livro no console, verificando se as informações atualizadas, sem
// a avaliação, são exibidas corretamente.

const anoAtual = new Date().getFullYear();

const book = {
    titulo: 'Programmer',
    autor: 'José',
    anoPublicacao: 2022 ,
    genero: 'Fantasia',
    idadePublicacao: anoAtual - 2022,
    avaliacao: null
}
const newAssessment = {nota: 4.5, comentario: 'Ótima Leitura'}
if(book.avaliacao === null){
    book.avaliacao = newAssessment;
}else{
    console.log('O Livro já possui uma avaliação')
}
console.log(book);
delete book.avaliacao;
console.log(book);

