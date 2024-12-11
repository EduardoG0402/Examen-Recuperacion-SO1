const { Worker } = require('worker_threads');

function sumVectors(Valor1, Valor2) {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./child.js', { workerData: { Valor1, Valor2 } });

        worker.on('message', (result) => resolve(result));

        worker.on('error', (error) => reject(error));
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker finalizado con código ${code}`));
            }
        });
    });
}

const Valor1 = [1, 2, 3];
const Valor2 = [5, 6, 5];

sumVectors(Valor1, Valor2)
    .then(result => console.log('Resultado de la suma:', result)) 
    .catch(err => console.error('Error:', err));
    console.log("Perez Galicia Cesar Eduardo Examen de Recuperacion SO1");