// Variables
const btnCalcular = document.querySelector('#calcularBtn');
const btnResetear = document.querySelector('#resetearBtn');
const campoNombre1 = document.querySelector('#nombre1');
const campoNombre2 = document.querySelector('#nombre2');
const formCalcularNombres = document.querySelector('#calcular-nombres');

let contadorLetra = 0;
let numeroLetras = [];
let letrasFiltradas = [];

let nombre1 = '';
let nombre2 = '';

let nombres = [];

// Eventos

eventListeners()
function eventListeners() {
    document.addEventListener('DOMContentLoaded',iniciarApp)

    // Validar campos
    campoNombre1.addEventListener('blur',validarCampo);
    campoNombre2.addEventListener('blur',validarCampo);

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

    if (e.target.value.length > 0) {
        e.target.classList.remove('campoVacio');
    } else {
        e.target.classList.add('campoVacio');
    }

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
}

function calcularNombres(e) {
    e.preventDefault()

        nombre1 = (campoNombre1.value).toLowerCase();
        nombre2 = (campoNombre2.value).toLowerCase();

        nombresArray1 = (nombre1 + nombre2).split('');
        // nombresArray2 = (nombre2 + nombre1).split('');

        console.log(nombresArray1);
        // console.log(nombresArray2);

        // nombresArray2.forEach(letraABC => {

        //     console.log('entró al array 2')
        //     contarLetras(letraABC, nombresArray2);
        // });
        // numerosResultado1 = numeroLetras;

        nombresArray1.forEach(letraABC => {
            console.log('entró al array 1')
            contarLetras(letraABC, nombresArray1);
        });

        numerosResultado2 = numeroLetras;

        // HACER ESTA FUNCIÓN DEL ORTOOOO

        while(numeroLetras > 2) {
            calcularComp(numeroLetras);
            return numeroLetras;
        }

        // console.log(numerosResultado1);
        console.log(numeroLetras);

        letrasFiltradas = [];
        numeroLetras = [];
        resetearForm();
}

function resetearForm(e) {
    formCalcularNombres.reset();

    iniciarApp();
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

    console.log(numeroLetras);

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

    for (let i = 0; i < (Math.ceil(numeroLetras.length/2)); i++) {
        let subResultado = parseInt(numeroLetras[i]) + parseInt(numeroLetras[numeroLetras.length - i - 1]);

        porcentajeComp = [...porcentajeComp, subResultado];
    }

    return porcentajeComp;
}