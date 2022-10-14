const alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const inputOriginal = document.getElementById('input-original');
const cifrador = document.getElementById('cifrador');
const resultado = document.getElementById('resultado');
const rango = document.getElementById('rango');

const shifMessage = () => {
    //Obtener el input original y transformarlo en un array, todo en mayuscula
    const wordArray = [...inputOriginal.value.toUpperCase()];
    
}

const submit = e => {
    e.preventDefault(); //evitar el comportamiento base del submit
    resultado.innerHTML = '';
    shifMessage();
}

cifrador.onsubmit = submit;