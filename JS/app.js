// Variables
const btnCalcular = document.querySelector('#calcularBtn');
const btnResetear = document.querySelector('#resetearBtn');
const campoNombre1 = document.querySelector('#nombre1');
const campoNombre2 = document.querySelector('#nombre2');
const formCalcularNombres = document.querySelector('#calcular-nombres');
const resultadoTexto = document.querySelector('.resultado-texto');
const resultadoNombre = document.querySelector('.resultado-nombres');

let contadorLetra = 0;
let numeroLetras = [];
let letrasFiltradas = [];
let caracteresNoPermitidos = [' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '.', ',', ';','"',"'",'@','#','$','_','-','&','(',')','/','!','?','¿','¡',':','+'];
let contadorCaracter = 0;

let nombre1 = '';
let nombre2 = '';

let nombres = [];

// Eventos

eventListeners()
function eventListeners() {
    document.addEventListener('DOMContentLoaded',iniciarApp)

    // Validar campos
    campoNombre1.addEventListener('input',validarCampo);
    campoNombre2.addEventListener('input',validarCampo);

    // Resetear contenido
    btnResetear.addEventListener('click', resetearForm);

    // Calcular
    formCalcularNombres.addEventListener('submit',calcularNombres)
}

// Funciones

function iniciarApp() {
    btnCalcular.disabled = true;
    btnCalcular.classList.add('desabilitado');

    btnResetear.disabled = true;
    btnResetear.classList.add('desabilitado');
}

function validarCampo(e) {

    if (campoNombre1.value != '' && campoNombre2.value != '') {
        btnCalcular.disabled = false;
        btnCalcular.classList.remove('desabilitado');
    } else {
        if (btnCalcular.classList.contains('desabilitado')) {
        } else {
            btnCalcular.disabled = true;
            btnCalcular.classList.add('desabilitado');
        }
    }

    if (campoNombre1.value != '' || campoNombre2.value != '') {
        btnResetear.disabled = false;
        btnResetear.classList.remove('desabilitado');
    } else {
        if (btnResetear.classList.contains('desabilitado')) {
        } else {
            btnResetear.disabled = true;
            btnResetear.classList.add('desabilitado');
        }
    }

    arrayResultado1 = campoNombre1.value.split('');

    arrayResultado1.forEach( letra => {
        caracteresNoPermitidos.forEach( caracter => {
            if (letra === caracter) {
                contadorCaracter++;
            }
        })
    })

    if (contadorCaracter > 0) {
        if(btnCalcular.classList.contains('desabilitado')){
        } else {
            btnCalcular.disabled = true;
            btnCalcular.classList.add('desabilitado');
        }

        if(campoNombre1.classList.contains('sombraError')){
        } else {
            campoNombre1.classList.add('sombraError');
        }
    } else {
        if(campoNombre1.classList.contains('sombraError')){
            campoNombre1.classList.remove('sombraError');
        }
    }

    contadorCaracter = 0;

    arrayResultado2 = campoNombre2.value.split('');

    arrayResultado2.forEach( letra => {
        caracteresNoPermitidos.forEach( caracter => {
            if (letra === caracter) {
                contadorCaracter++;
            }
        })
    })

    if (contadorCaracter > 0) {
        if(btnCalcular.classList.contains('desabilitado')){
        } else {
            btnCalcular.disabled = true;
            btnCalcular.classList.add('desabilitado');
        }

        if(campoNombre2.classList.contains('sombraError')){
        } else {
            campoNombre2.classList.add('sombraError');
        }
    } else {
        if(campoNombre2.classList.contains('sombraError')){
            campoNombre2.classList.remove('sombraError');
        }
    }

    contadorCaracter = 0;
}

function calcularNombres(e) {
    e.preventDefault()
        let numerosResultado1;
        let numerosResultado2;

        nombre1 = (campoNombre1.value).toLowerCase().trim();
        nombre2 = (campoNombre2.value).toLowerCase().trim();

        console.log(nombre1);
        console.log(nombre2);

        nombresArray1 = (nombre1 + nombre2).split('');
        nombresArray2 = (nombre2 + nombre1).split('');

        nombresArray1.forEach(letraABC => {
            contarLetras(letraABC, nombresArray1);
        });

        while(numeroLetras.length > 2) {
            numeroLetras = calcularComp(numeroLetras);
        }

        numerosResultado1 = parseInt(`${numeroLetras[0]}${numeroLetras[1]}`);

        numeroLetras = [];
        letrasFiltradas = [];

        nombresArray2.forEach(letraABC => {
            contarLetras(letraABC, nombresArray2);
        });

        while(numeroLetras.length > 2) {
            numeroLetras = calcularComp(numeroLetras);
        }

        numerosResultado2 = parseInt(`${numeroLetras[0]}${numeroLetras[1]}`);

        console.log(numerosResultado1);
        console.log(numerosResultado2);

        if (numerosResultado1 > numerosResultado2 || numerosResultado1 === numerosResultado2) {
            mostrarResultado(numerosResultado1)
        } else {
            mostrarResultado(numerosResultado2)
        }

        letrasFiltradas = [];
        numeroLetras = [];
        resetearForm();
}

function resetearForm(e) {
    formCalcularNombres.reset();

    if(campoNombre1.classList.contains('sombraError')){
        campoNombre1.classList.remove('sombraError');
    }

    if(campoNombre2.classList.contains('sombraError')){
        campoNombre2.classList.remove('sombraError');
    }

    iniciarApp();
}

function mostrarResultado(compatibilidad) {
    resultadoTexto.textContent = `${compatibilidad}%`;
    resultadoNombre.textContent = `${campoNombre1.value} + ${campoNombre2.value}`;
}

function contarLetras(letraABC, nombres) {

    nombres.forEach(letraNombre => {
        if (letraNombre === letraABC) {
            contadorLetra++;
        };
    });

    letrasFiltradas.forEach(letraFiltrada => {
        if (letraABC === letraFiltrada) {
            contadorLetra = 0;
        }
    });

    filtrarLetra(letraABC);

    numeroLetras = [...numeroLetras, contadorLetra];

    if (numeroLetras[numeroLetras.length - 1] === 0) {
        numeroLetras.pop();
    }

    contadorLetra = 0;
};

function filtrarLetra(letraABC) {

    letrasFiltradas.push(letraABC);

    let contador = 0;

    letrasFiltradas.forEach(letraFiltrada => {

        if (letraABC === letraFiltrada) {
            contador++;
            if (contador >= 2) {
                letrasFiltradas.pop()
            }
        }
    })

}

function calcularComp(numeroLetras) {

    let porcentajeComp = [];

    for (let i = 0; i < (Math.floor(numeroLetras.length/2)); i++) {
        let subResultado = parseInt(numeroLetras[i]) + parseInt(numeroLetras[numeroLetras.length - i - 1]);

        subResultado = subResultado.toString();

        if (subResultado.length > 1) {
            subResultado = subResultado.split('')
        }

        if (subResultado.length > 1) {
            porcentajeComp = [...porcentajeComp, parseInt(subResultado[0]), parseInt(subResultado[1])];

        } else {
            porcentajeComp = [...porcentajeComp, parseInt(subResultado)];
        }
    }

    if (numeroLetras.length % 2 === 0) {
    } else {
        porcentajeComp = [...porcentajeComp, numeroLetras[Math.ceil(numeroLetras.length/2) - 1]];
    }

    return porcentajeComp;
}