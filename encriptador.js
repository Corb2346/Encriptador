let inputText = document.getElementById("inputText");
let encriptarButton = document.getElementById("encriptarButton");
let desencriptarButton = document.getElementById("desencriptarButton");
let imageGuy = document.getElementById("imageGuy");
let displaySubtexto = document.getElementById("displaySubtexto");
let displayTexto = document.getElementById("displayTexto");

inputText.addEventListener("click",ingresarTexto);
encriptarButton.addEventListener("click",encriptarFuncion);
desencriptarButton.addEventListener("click",desencriptarFuncion);

function encriptarFuncion(){
    let fraseRecibida = inputText.value;
    console.log( fraseRecibida );
    encriptar(fraseRecibida);
    imageGuy.remove();
}

function ingresarTexto(){

    document.getElementById("inputText").value ="";
}

function desencriptarFuncion(){
    let fraseEncriptada = displaySubtexto.textContent;
    console.log(fraseEncriptada);
    desencriptar(fraseEncriptada)
};

function encriptar(fraseRecibida){


let fraseRecibidaMain = fraseRecibida;
let palabraFixed =  fraseRecibidaMain.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
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


}while(contador < palabraFixed.length);

palabraEncriptada = arrayEncriptada.toString();
let palabraEncriptadaFixed = palabraEncriptada.replace(/,/g, '');

console.log(arrayEncriptada);
console.log(palabraEncriptada );
console.log(palabraEncriptadaFixed );

displayTexto.textContent= "Mensaje encriptado:";
displaySubtexto.textContent  = palabraEncriptadaFixed;


};


function desencriptar(fraseEncriptada){

contador =0;
tomaLetra = "";
let arrayEncriptada = new Array();
let contadorAlmacenador =0;

do{

tomaLetra=fraseEncriptada.charAt(contador);
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

}while(contador<fraseEncriptada.length);

console.log(arrayEncriptada);

let stringEncriptado = arrayEncriptada.toString();
console.log(arrayEncriptada);

let palabraDesencriptada = stringEncriptado.replace(/,/g, '');
console.log(palabraDesencriptada);


displayTexto.textContent= "Mensaje Desencriptado:";
displaySubtexto.textContent  = palabraDesencriptada;
}


