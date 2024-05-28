const objetoAnimais = {
    "animais": [
        {
            "id": 1,
            "nome": "Leão",
            "tipo": "Mamífero",
            "habitat": "Savana"
        },
        {
            "id": 2,
            "nome": "Pinguim",
            "tipo": "Ave",
            "habitat": "Pólo Sul"
        },
        {
            "id": 3,
            "nome": "Cobra",
            "tipo": "Réptil",
            "habitat": "Floresta Tropical"
        }
    ]
};

const novoAnimal = {
    id: 4,
    nome: 'Leão',
    habitat: 'Africa do Sul'
}

objetoAnimais.animais.push(novoAnimal);

const animalParaModificar = objetoAnimais.animais.find(animal => animal.id === 2) 
    if(animalParaModificar){
        animalParaModificar.habitat == 'Oceano Antártico';
    }

const indiceAnimalRemover = objetoAnimais.animais.findIndex(animal => animal.id === 1)
if (indiceAnimalRemover !== -1) {
    objetoAnimais.animais.splice(indiceAnimalRemover, 1);
}

const animaisJson = JSON.stringify(objetoAnimais, null, 2);
console.log('Objeto Javascript Resultante das Operações: ');
console.log(objetoAnimais);



