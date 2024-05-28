// Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

// Utilize o objeto carro do exercício 2 com as propriedades iniciais 
// (marca, modelo, ano, cor) e adicione:

// ligado: uma propriedade do tipo booleana que indica se o carro está 
// ligado ou não.
// ligar: um método que imprime no console uma mensagem indicando que 
// o carro está ligado.
// desligar: um método que imprime no console uma mensagem indicando que
// o carro está desligado. Observação: se o carro já está ligado (ligado = true)
// não pode ser ligado novamente e vice-versa.
// obterDetalhes: um método que retorna uma string contendo todos os detalhes do
// carro (marca, modelo, ano, cor, estado de ligado/desligado).
// Em seguida, faça o seguinte:

// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens
// resultantes.
// Chame o método obterDetalhes e imprima no console a string retornada.
// 4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa
// do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada
// ao percorrer as propriedades do objeto.

// Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console
// apenas as propriedades enumeráveis.

// Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do
// objeto carro e imprima no console esse array.

// Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado
// obtido.

let carro = {
    marca: 'Porsche',
    ligado: true,
    ligar: function () {
        if(this.ligado === false) {
            console.log('carro está ligando')
        }
    },
    desligar: function () {
        if(this.ligado === true) {
            console.log('o carro está desligando')
        }
    },
    obterDetalhes: function () {
        const estado = this.ligado === true ? 'ligado' : 'desligar';
        return `Detalhes do carro Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.ano}, Estado: ${estado}`
    },
    modelo: '911 Turbo',
    ano: 2023,
    cor: 'Black'
}

carro.ligar();
carro.desligar();
console.log(carro.obterDetalhes());