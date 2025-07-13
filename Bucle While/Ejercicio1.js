//  •Pide un número con prompt().
//  •Usa un while para contar desde 1 hasta ese número.
//  •Muestra cada número en consola.

let numero = parseInt(prompt("Introduce un número:"));
let contador = 1;

while (contador <= numero) {
    console.log(contador);
    contador++;
}
