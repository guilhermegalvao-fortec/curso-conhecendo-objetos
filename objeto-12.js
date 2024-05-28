// Crie um objeto chamado carro que represente as informações de um veículo.
// O objeto deve ter as seguintes propriedades:

// marca (string): marca do carro.
// modelo (string): modelo do carro.
// ano (number): ano de fabricação do carro.
// cor (string): cor do carro.
// Utilize o loop for...in para percorrer todas as propriedades do objeto carro
// e imprima no console o nome da propriedade e o seu valor.

// Adicione mais propriedades ao objeto carro para representar características
// adicionais do veículo.

// Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas
// do objeto carro e imprima no console o nome da propriedade e o seu valor.

let carro = {
    marca: 'Porsche',
    modelo: '911 Turbo',
    ano: 2023,
    cor: 'Black'
}

for(var prop in carro) {
    let texto = `propriedade ${prop}, valor: ${carro[prop]}`
    console.log(texto)
}

carro.especificacao = 'fosca, pneus blacks e sem cambio automatico';

for(var prop in carro) {
    let texto = `propriedade ${prop}, valor: ${carro[prop]}`
    console.log(texto)
}
