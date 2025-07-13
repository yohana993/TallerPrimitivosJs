//  •Pide al usuario su año de nacimiento con prompt().
//  •Calcula su edad.
//  •Muestra.

let anonacimiento = prompt("Cual es su año de nacimiento?");
let fecha = new Date();
let edad = fecha.getFullYear() - anonacimiento;
console.log("Tu edad es: " + edad);
