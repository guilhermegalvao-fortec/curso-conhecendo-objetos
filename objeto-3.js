// Crie um objeto livro com as seguintes propriedades: título,
// autor, ano de publicação, gênero, idade de publicação. Depois,
// utilize colchetes para acessar diretamente as propriedades do
// objeto livro e imprimir no console os detalhes do livro.

const anoAtual = new Date().getFullYear();
const book = {
    titulo: 'Programmer',
    autor: 'José',
    anoPublicacao: 2022 ,
    genero: 'Fantasia',
    idadePublicacao: anoAtual - 2022
}


console.log('Detalhe do Livro');
console.log(`Título: ${book['titulo']}`);
console.log(`Autor: ${book['autor']}`);
console.log(`Ano de Publicação: ${book['anoPublicacao']}`);
console.log(`Gênero: ${book['genero']}`);
console.log(`Idade de Publicação: ${book['idadePublicacao']} anos`);
