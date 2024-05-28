// No objeto carro, adicione uma nova propriedade chamada placa representando
// a placa do veículo. Defina ropriedade placa como não enumerável, para que
// ela não seja listada ao percorrer as propriedades do objeto.

// Utilize um loop for...in para percorrer as propriedades do objeto carro e
// imprima no console apenas as propriedades enumeráveis.

// Utilize o método Object.keys() para obter um array contendo apenas as chaves 
// enumeráveis do objeto carro e imprima no console esse array.

// Tente acessar a propriedade placa diretamente usando carro.placa e imprima 
// no console o resultado obtido.

let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022,
    cor: 'Prata',
    placa: 'ABC1234'
}

// defininido a propriedade placa como enumerável 
Object.defineProperty(carro, 'placa', {enumerable: false});

// utilizando o loop for in para exibir as propriedades e os valores 
console.log('Propriedades Enumeráveis do Carro:');
for(let prop in carro){
    console.log(`${prop}: ${carro[prop]}`)
}

const chavesEnumeraveis = Object.keys(carro);
console.log('Chaves Enumeráveis do Carro:');
console.log(chavesEnumeraveis);

console.log('Acesso direto à propriedade placa:');
console.log(carro.placa)