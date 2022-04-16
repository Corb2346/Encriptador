

let palabra = "GATó";
let palabraFixed = palabra.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
let contador = 0;
let tomaLetra = "";
let arrayEncriptada = new Array();
let palabraEncriptada = "";

do{

    tomaLetra = palabraFixed.charAt(contador);
    console.log(tomaLetra + contador);
    
    if(tomaLetra === "a" ){
        tomaLetra = "ai";
        arrayEncriptada[contador] = tomaLetra;
        contador++;

    } else if(tomaLetra === "e" ){
        tomaLetra = "enter";
        arrayEncriptada[contador] = tomaLetra;
        contador++;

    } else if(tomaLetra === "i" ){
        tomaLetra = "imes";
        arrayEncriptada[contador] = tomaLetra;
        contador++;

    } else if(tomaLetra === "o" ){
        tomaLetra = "ober";
        arrayEncriptada[contador] = tomaLetra;
        contador++;

    } else if(tomaLetra === "u" ){
            tomaLetra = "ufat";
            arrayEncriptada[contador] = tomaLetra;
            contador++;

    } else {
        arrayEncriptada[contador] = tomaLetra;
        contador++; 
    }


}while(contador < palabra.length)

palabraEncriptada = arrayEncriptada.toString();
let palabraEncriptadaFixed = palabraEncriptada.replace(/,/g, '')

console.log(arrayEncriptada);
console.log(palabraEncriptada );
console.log(palabraEncriptadaFixed );
