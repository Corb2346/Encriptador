

let palabra = "felicidades por enfrentar este desafio y haberlo concluido con exito!";
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


}while(contador < palabra.length);

palabraEncriptada = arrayEncriptada.toString();
let palabraEncriptadaFixed = palabraEncriptada.replace(/,/g, '');

console.log(arrayEncriptada);
console.log(palabraEncriptada );
console.log(palabraEncriptadaFixed );

contador =0;
tomaLetra = "";
arrayEncriptada = new Array();
let contadorAlmacenador =0;

/*palbraEncriptadaFixed= ;*/

do{

tomaLetra=palabraEncriptadaFixed.charAt(contador);
console.log(tomaLetra + contador);

if(tomaLetra === "a"){

    tomaLetra = "a";
    arrayEncriptada[contadorAlmacenador] = tomaLetra;
    contador = contador + 2;
    contadorAlmacenador++;

} else if(tomaLetra === "e"){

    tomaLetra = "e";
    arrayEncriptada[contadorAlmacenador] = tomaLetra;
    contadorAlmacenador++;
    contador = contador + 5;

} else if(tomaLetra === "i"){

    tomaLetra = "i";
    arrayEncriptada[contadorAlmacenador] = tomaLetra;
    contadorAlmacenador++;
    contador = contador + 4;

} else if(tomaLetra === "o"){

    tomaLetra = "o";
    arrayEncriptada[contadorAlmacenador] = tomaLetra;
    contadorAlmacenador++;
    contador = contador + 4;

} else if(tomaLetra === "u"){

    tomaLetra = "u";
    arrayEncriptada[contadorAlmacenador] = tomaLetra;
    contadorAlmacenador++;
    contador = contador + 4;
} else {
    arrayEncriptada[contadorAlmacenador] = tomaLetra;
    contador++;
    contadorAlmacenador++;
}

}while(contador<palabraEncriptadaFixed.length);

console.log(arrayEncriptada);

let stringEncriptado = arrayEncriptada.toString();
console.log(arrayEncriptada);

let palabraDesencriptada = stringEncriptado.replace(/,/g, '');
console.log(palabraDesencriptada);


