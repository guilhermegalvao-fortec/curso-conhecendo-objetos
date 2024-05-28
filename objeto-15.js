// Crie um novo objeto chamado carroNovo para representar as informações
// de um novo carro. O objeto deve ter as seguintes propriedades:

// marca (string): marca do novo carro.
// modelo (string): modelo do novo carro.
// ano (number): ano de fabricação do novo carro.
// cor (string): cor do novo carro.
// Utilize o operador de espalhamento (...) para criar um novo objeto chamado
// carroComNovosDetalhes que herde todas as propriedades do objeto carro e 
// adicione as propriedades do objeto carroNovo.

// Imprima no console o objeto carroComNovosDetalhes para verificar as 
// informações do carro com os novos detalhes.

// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima
// novamente o objeto no console para confirmar as alterações.

let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    cor: 'Prata',
}

let novoCarro = {
    marca: 'Porsche',
    modelo: '911 Turbo',
    ano: 2023,
    cor: 'Prata',
    placa: 'ABC1234'
}

carroComNovosDetalhes = {...carro, ...novoCarro};
console.log(carroComNovosDetalhes);

carroComNovosDetalhes.modelo = 'Ferrari 912';
carroComNovosDetalhes.marca = 'Ferrari'
console.log('Carros com Detalhes Modificados: ');
console.log(carroComNovosDetalhes);