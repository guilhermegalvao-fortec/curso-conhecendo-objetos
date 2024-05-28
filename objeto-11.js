// Crie um objeto chamado pessoa que represente informações sobre
// uma pessoa. O objeto deve ter as seguintes propriedades: nome e
// notas. Adicione um método chamado calcularMediaNotas ao objeto
// pessoa. Este método deve calcular a média das notas da pessoa.

// Adicione um método chamado classificarDesempenho ao objeto pessoa.
// Este método deve retornar uma categoria de desempenho com base na
// média calculada. Utilize as seguintes categorias:

// Desempenho excelente: média >= 9
// Bom desempenho: 7.5 <= média entre 7.6 e 8.9
// Desempenho regular: 6 <= média entre 6 e 7.5
// Desempenho insuficiente: média < 6
// Chame o método calcularMediaNotas para calcular a média das notas da
// pessoa e imprima no console a média calculada.

// Chame o método classificarDesempenho e imprima no console a categoria
// de desempenho da pessoa.

let pessoa = {
    nome: 'guilherme',
    notas: [8, 7, 9, 10],
    calcularMediaNotas: function () {
        const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaNotas / this.notas.length;
        return media.toFixed(2);
    },
    classificarDesempenho: function () {
        const mediaBase = this.calcularMediaNotas();

        if(mediaBase >= 9){
           return console.log('Excelente!');
        } else if (mediaBase >= 7.6 && mediaBase < 8.9) {
          return console.log('Bom Desempenho!');
        } else if (mediaBase >= 6 && mediaBase < 7.5) {
           return console.log('Regular')
        } else {
          return console.log('Insuficiente')
        }
    }
};

const mediaCalculada = pessoa.calcularMediaNotas();
console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}.`)

const categoriaDesempenho = pessoa.classificarDesempenho();
console.log(`${pessoa.nome} possui: ${categoriaDesempenho}.`);