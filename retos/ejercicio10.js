function numeroDeCaracteres(array, letra){
    let cont = 0
    for(let elemento of array){ 
        if (elemento == letra){
            cont ++;
        }
    }
    return cont
}

console.log(numeroDeCaracteres("Hola mundo","o"))
console.log(numeroDeCaracteres("MMMM","m"))
console.log(numeroDeCaracteres("eeee", "e"))