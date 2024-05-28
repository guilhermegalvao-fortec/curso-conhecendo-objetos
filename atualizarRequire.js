// Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize 
// a função require() para importar o conteúdo do arquivo dados.json.

// Imprima no console o conteúdo importado utilizando a função console.log().

// Acesse diferentes propriedades do objeto importado e imprima no console
//  para verificar o acesso aos dados.

const dados = require('./dados.json');

console.log('Contéudo importado de dados.json');
console.log(dados);

console.log('Acesso aos dados');
console.log('Produtos: ', dados.produtos);
console.log('Usuários: ', dados.usuarios);