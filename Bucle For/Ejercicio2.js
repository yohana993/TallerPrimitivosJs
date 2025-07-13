//  •Pide un número con prompt().
//  •Usa un for para mostrar la tabla de multiplicar de ese número (del 1 al 10).

let numero = parseInt(prompt("Introduce un número para mostrar su tabla de multiplicar:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
