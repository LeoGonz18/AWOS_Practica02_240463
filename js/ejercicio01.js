// Declaración de Variables - Utilizando VAR
var miNombre = "Uriel Leonardo"
var misApellidos;

//Utilizaremos la función console.long para imprimir el valor actual de la variable
console.log("El valor de la Variable miNombre es = ", miNombre)
console.log("El valor de la Variable misApellidos es = ", misApellidos)
//Esto arroja  un undefined dado que la variable no ha sido inicializada, es decir no se le ha asignado un valor que almacenar

misApellidos = "Gonzalez Hernandez"
// En este momento lavariableya tiene un valor almacenado por que al imprimirlo debera mostrar dicho valor
console.log("El valor de la Variable misApellidos es = ", misApellidos)

//Para actualizar el valor de una variable previamente definida solo basta con igualar al nuevo valor
miNombre = "Uriel L."
console.log("Hola, ", miNombre, misApellidos)

