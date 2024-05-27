// Crie uma nova variável chamada anoAtual e atribua a ela o ano atual
// (utilize new Date().getFullYear()). Crie um objeto chamado livro com
// as seguintes propriedades: título, autor, ano de publicação e gênero.

// Adicione a propriedade idadePublicacao diretamente ao objeto livro,
// representando há quantos anos o livro foi publicado. Calcule essa idade 
// subtraindo o anoDePublicacao do anoAtual.

// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro,
// incluindo a informação da idade de publicação.

// Exiba a string mostrarDetalhes no console para verificar se as 
// informações, incluindo a idade de publicação, são exibidas corretamente.

let anoAtual = new Date().getFullYear();

const book = {
    titulo: 'Programmer',
    autor: 'José',
    anaPublicacao: 23/8/2022 ,
    genero: 'Todos os gêneros'
}

book.idadePublicacao = anoAtual - book.anaPublicacao;

book.mostrarDetalhes = `Detalhes do Livro
                        Titulo:   ${book.titulo}
                        Autor: ${book.autor}
                        Ano de Publicação: ${book.anaPublicacao}
                        Gênero: ${book.genero}
                        Idade de Publicação: ${book.idadePublicacao} anos`

console.log(book.mostrarDetalhes);