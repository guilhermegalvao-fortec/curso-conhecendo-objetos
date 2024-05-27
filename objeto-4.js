// Crie um objeto livro com as seguintes propriedades: título, autor,
// ano de publicação, gênero, idade de publicação. Depois, adicione uma
// nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

// No final do arquivo livro.js, adicione uma avaliação ao objeto.

// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

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

console.log('Detalhes do Livro:');
console.log(`Título: ${book['titulo']}`);
console.log(`Autor: ${book['autor']}`);
console.log(`Ano de Publicação: ${book['anoPublicacao']}`);
console.log(`Gênero: ${book['genero']}`);
console.log(`Idade de Publicação: ${book['idadePublicacao']}`);
console.log('Avaliaçã: ' + (book.avaliacao === null ? 'Nenhuma avaliação disponível ' : 'Nota ' + book.avaliacao.nota + ', Comentários: ' + book.avaliacao.comentario));