function filterArray(array){
    if(Array.isArray(array) === false){
       return console.log('Não é um array!');
    }
    let numberArray = array.filter(number => typeof number === 'number');
    if(array.length === 0 || numberArray.length === 0){
        return console.log('Array inválido');
    }
    let numberParArray = numberArray.filter(number => number % 2 === 0);
    if(numberParArray.length === 0){
        return console.log('Array inválido');
    }
    let numberDobradoArray = numberParArray.map(number => number * 2);
    let numberMaior = numberDobradoArray[0];
    let indice = 0
    for (let i = 0; i < numberDobradoArray.length; i++) {
        if(numberDobradoArray[i] > numberMaior){
            numberMaior = numberDobradoArray[i];
            indice = i;
         }
    }
    console.log(`Posição do maior numero do array: ${indice}`)
    
}
filterArray(array);
