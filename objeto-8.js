// Adicione ao objeto pessoa uma nova propriedade chamada endereco.
// Esta propriedade deve ser um objeto representando o endereço da pessoa,
// com as seguintes subpropriedades:

// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
// Preencha as subpropriedades do objeto endereco com valores fictícios.

// Modifique a função mostrarInfoPessoa para incluir as informações do endereço
// da pessoa ao ser chamada.

// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para
// verificar se as informações atualizadas, incluindo o endereço, são exibidas
// corretamente no console.

const pessoa = {
    nome: 'guilherme',
    idade: 18,
    solteiro: true,
    hobbies: ['Leitura', 'Caminhada', 'Fotografia']
}

pessoa.endereço = {
    rua: 'rua amazonas',
    cidade: 'Imperatriz',
    estado: 'Maranhão'
}


function MostrarInfoPessoa(pessoa){
    console.log('Informações da Pessoa: ')
    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
    console.log(`Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`);
    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
    console.log(`Hobbies: ${pessoa.hobbies} (Tipo: ${typeof pessoa.hobbies})`);
    console.log('Endereço:');
    console.log(`Rua: ${pessoa.endereço.rua} (Tipo: ${typeof pessoa.endereço.rua})`);
    console.log(`Cidade: ${pessoa.endereço.cidade} (Tipo: ${typeof pessoa.endereço.cidade})`);
    console.log(`Estado: ${pessoa.endereço.estado} (Tipo: ${typeof pessoa.endereço.estado})`)
};

MostrarInfoPessoa(pessoa)
