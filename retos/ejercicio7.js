function contarRango(n, y){
    let rango= 0;
    for(let numero= n+1; numero < y; numero++){ 
        rango++;
    }
    return rango;
}

console.log(contarRango(1,9))
console.log(contarRango(1332,8743))
console.log(contarRango(5,6))