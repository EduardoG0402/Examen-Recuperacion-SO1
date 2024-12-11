const { parentPort, workerData } = require('worker_threads');

const { Valor1, Valor2 } = workerData;

if (Valor1.length !== Valor2.length) {
    throw new Error('Los vectores deben tener la misma longitud.');
}

const result = Valor1.map((value, index) => value + Valor2[index]);

parentPort.postMessage(result);
