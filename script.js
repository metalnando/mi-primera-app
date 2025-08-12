let contador = 0;

// elementos del DOM
const contadorDisplay = document.getElementById('contador');
const btnClick = document.getElementById('btn-click');
const btnReset = document.getElementById('btn-reset');
const fechaElement = document.getElementById('fecha');

// función para actualizar contador
function actualizarContador() {
    contador++;
    contadorDisplay.textContent = contador;

    // animación simple
    contadorDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        contadorDisplay.style.transform = 'scale(1)';
    }, 200);
}

// función para resetear contador
function resetearContador() {
    contador = 0;
    contadorDisplay.textContent = contador;
}

// listeners
btnClick.addEventListener('click', actualizarContador);
btnReset.addEventListener('click', resetearContador);

// inicialización fecha
document.addEventListener('DOMContentLoaded', function () {
    const ahora = new Date();
    fechaElement.textContent = ahora.toLocaleDateString('es-CO');
});

// función para cambiar entorno
function cambiarEntorno(nuevoEntorno) {
    document.getElementById('entorno').textContent = nuevoEntorno;

    const statusCard = document.querySelector('.status-card');

    switch (nuevoEntorno) {
        case 'Desarrollo':
            statusCard.style.borderLeft = '8px solid #694ECD';
            break;
        case 'Pruebas':
            statusCard.style.borderLeft = '8px solid #FFD93D';
            break;
        case 'Produccion':
            statusCard.style.borderLeft = '8px solid #6BCF7F';
            break;
    }
}
