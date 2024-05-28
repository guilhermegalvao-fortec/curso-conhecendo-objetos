let estudante = {
    nome: 'guilherme',
    sobrenome: 'galvao',
    age: 18,
    solteiro: true,
    endereço:[{
        rua: 'rua canadá',
        numero: 39,
        complement: null
    },
    {
        rua: 'rua centauros',
        numero: 38,
        complement: null
    }]
}

for(let chave in estudante){
    const tipo = typeof estudante[chave];
    if(tipo !== 'object' && tipo !== 'function'){
        let texto = `Propriedade: ${chave}, valor: ${estudante[chave]}`
        console.log(texto)
    }
}