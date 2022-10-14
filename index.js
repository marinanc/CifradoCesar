const alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const inputOriginal = document.getElementById('input-original');
const cifrador = document.getElementById('cifrador');
const resultado = document.getElementById('resultado');
const rango = document.getElementById('rango');

const shifMessage = () => {
    //Obtener el input original y transformarlo en un array, todo en mayuscula
    const wordArray = [...inputOriginal.value.toUpperCase()];
    printChar(0, wordArray);
}

const printChar = (currentLetterIndex, wordArray) => {
    //Recursividad...

    //Caso base: finaliza la recursividad porque ya está en la ultima letra...
    if(wordArray.length === currentLetterIndex) return;

    //Sino quitar la primera letra...
    inputOriginal.value = inputOriginal.value.substring(1);

    //Para animacion...
    const spanChar = document.createElement("span");
    resultado.appendChild(spanChar);

    //Char donde nos encontramos actualmente...
    const charSinCodificar = wordArray[currentLetterIndex];

    /*Verifica si el char actual está en el alfabeto
     *Si está, toma el index del char actual y le suma el rango elegido
     *Si no está, lo imprime sin codificar
    */ 
    spanChar.innerHTML = alfabeto.includes(charSinCodificar) ?
        alfabeto[(alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) % alfabeto.length] :
        charSinCodificar

    //Recursividad...
    printChar(currentLetterIndex + 1, wordArray);
}

const submit = e => {
    e.preventDefault(); //evitar el comportamiento base del submit
    resultado.innerHTML = '';
    shifMessage();
}

cifrador.onsubmit = submit;