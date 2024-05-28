const pessoa = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function copyObject(objeto){
    return JSON.parse(JSON.stringify(objeto))
}

const pessoaModificada = copyObject(pessoa);

pessoaModificada.idade = 31;

console.log("pessoa:");
console.log(pessoa);

console.log("pessoa modificada:");
console.log(pessoaModificada)