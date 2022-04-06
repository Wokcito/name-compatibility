// Variables
let contadorLetra = 0;
let numeroLetras = [];
let letrasFiltradas = [];

const nombre1 = "maximiliano";
// prompt('Ingrese su primer número');
const nombre2 = "victoria";
// prompt('Ingrese su segundo número');

let nombres = (nombre1 + nombre2).split('');

const abecedario = [...nombres];

console.log(abecedario);

// Eventos

abecedario.forEach(letraABC => {
    contarLetras(letraABC);
});

// Funciones

function contarLetras(letraABC) {

    nombres.forEach(letraNombre => {
        if (letraNombre === letraABC) {
            console.log(`${letraNombre} y ${letraABC} SON IGUALES, así que contador + 1`)
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

    console.log(numeroLetras);
};

function filtrarLetra(letraABC) {

    letrasFiltradas.push(letraABC);

    let contador = 0;

    letrasFiltradas.forEach(letraFiltrada => {

        if (letraABC === letraFiltrada) {
            contador++;
            console.log(contador);
            if (contador >= 2) {
                letrasFiltradas.pop()
            }
        }
    })
}