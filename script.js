let contador = 0;

//elementos del DOM

const contadorDisplay = document.getElementById('contador');
const btnClick = document.getElementById('btn-click');
const btnReset = document.getElementById('btn-reset');
const fechaElement = document.getElementById('fecha');

//Funcion para actualizar contador

function actualizarContador(){
    contador++;
    contadorDisplay.textContent = contador;

    //Animacion simple
    contadorDisplay.style.transform = 'scale(1.2)';
    setTimeout(() =>{
        contadorDisplay.style.transform = 'scale(1)';

    }, 200);
}

//Funcion para resetear contador
function resetearContador() {
    contador = 0;
    contadorDisplay.textContent = contador;
}

//Event Listenears
btnClick.addEventListener('click', actualizarContador);
btnReset.addEventListener('click', resetearContador);

//inicialización
document.addEventListener('DOMContentLoaded', function(){
    const ahora = new Date();
    fechaElement.textContent = ahora.toLocaleDateString('es-CO');
});

//funcion para simular cambio de entorno

function cambiarEntorno(nuevoEntorno) {
    document.getElementById('entorno').textContent = nuevoEntorno;

    //cambiar color segun entorno
    const statusCard = document.querySelector('status-card');
    switch(nuevoEntorno) {
        case 'Desarrollo':
            statusCard.style.borderLeftColor = '#4ECDC4';
            break;
        case 'Pruebas':
            statusCard.style.borderLeftColor = '#FFD93D';
            break;
        case 'Produccion':
            statusCard.style.borderLeftColor = '#6BCF7F';
            break;
    }
}