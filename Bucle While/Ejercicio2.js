//  •Pide una contraseña con prompt().
//  •Usa un while para seguir preguntando hasta que ingrese "1234".
//  •Cuando acierte, muestra "Contraseña correcta".

let contrasena = prompt("Introduce la contraseña:");
while (contrasena !== "1234") {
    contrasena = prompt("Contraseña incorrecta. Inténtalo de nuevo:");
}
console.log("Contraseña correcta");
