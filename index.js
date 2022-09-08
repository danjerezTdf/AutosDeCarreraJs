/* --Estructuras de Control
Problema: Autos de Carrera
• En una prueba, un piloto tiene que completar 4
vueltas
• Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta
• El programa debe retornar el tiempo total y el
promedio de vuelta */

// requiero el modulo readline-Sync
let readlineSync = require('readline-sync');
// obtengo valores de consola y las guado en variables, con readlineSync
let vueltaUno = readlineSync.questionFloat("Ingrese 1ra Vuelta: ");
let vueltaDos = readlineSync.questionFloat("Ingrese 2da Vuelta: ");
let vueltaTres = readlineSync.questionFloat("Ingrese 3ra Vuelta: ");
let vueltaCuatro = readlineSync.questionFloat("Ingrese 4ta Vuelta: ");
// calculo tiempo total
let tiempoTotal = vueltaUno + vueltaDos + vueltaTres + vueltaCuatro;
// calculo promedios y muestro resultados
console.log(`============================================================`)
console.log(`El tiempo total de las 4 vueltas fue: `, tiempoTotal);
console.log(`El promedio de vuelta fue: `, tiempoTotal / 4);
console.log(`============================================================`)