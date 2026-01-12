// Personalización de salidas a Consola
const bg= "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`
console.log("%c1.- Ejercicio 01: Declaración de Variables ",style_console);

// Declaración de Variables - Utilizando VAR
var miNombre = "Uriel Leonardo";
var misApellidos;

console.warn("--Declaracon de Variables utilizando el prefijo VAR--");

//Utilizaremos la función console.long para imprimir el valor actual de la variable
console.log("El valor de la Variable miNombre es = ", miNombre);
console.log("El valor de la Variable misApellidos es = ", misApellidos);
//Esto arroja  un undefined dado que la variable no ha sido inicializada, es decir no se le ha asignado un valor que almacenar

misApellidos = "Gonzalez Hernandez"
// En este momento lavariableya tiene un valor almacenado por que al imprimirlo debera mostrar dicho valor
console.log("El valor de la Variable misApellidos es = ", misApellidos);

//Para actualizar el valor de una variable previamente definida solo basta con igualar al nuevo valor
miNombre = "Uriel L.";
console.log("Hola, ", miNombre, misApellidos);

// 2. Declaracion de Variables utilizando el Prefijo CONTS
console.warn("--Declaracion de variables utilizando el prefijo CONST--")
/* La palabra reservada CONST nos permite a nivel memoria reservar espacio para almacenar datos de una constante que a diferencia de una VARIABLE
esta no puede cambiar su valor durante la ejecución del  programa, de igual manera no se pueden declarar constantes sin obligatoriamente inicializarlas 
, es decir asignarles un valor especificom por ejemplo:*/

const miMatricula = "240463";

//Imprimir el valor de una constante 
console.log("El valor actual de la constante mi MAtricula es: ", miMatricula);

// const miEdad; // --Esto ocasiona un eror por que la varible no fue inicializada--

// miMatricula = 250463; // --Ocasiona un error poe que el calor de una CONSTANTE no puede cambiar una vez ha sido asignado--


// 3. Declaración de Variables utilizando el prefijo LET
/* La palabra reservada LET es JavaScript nos permite declarar variables de una manera muy similar a VAR, con la diferencia de alcance (SCOPE) de la misma 
, es decir, aquellas variables declaradas con var tienen un alange global durante la ejecucion y la LET se limitan a funciones, ciclos o bloques de codigo
, eliminando los valores almacenado una vez cumplen su funcion */

var miFechaNAcimiento = new Date ("2006-01-18");

function calcularEdad (fechaNAcimiento)
{
    //Para calcular la edad requerimos de la fecha del dia de hoy
    let fechaHoy = new Date ();

    //Dado que los datos de fecha son almacenados en milisegundos por default en JavaScript, necesitamos una variable que nos permite 
    //saber el numero de milisegundos por dia

let milisegundosPorDia = 24*60*60*1000;

//Ya que tenemos los milisegundos por dia tenemos que restar a la fecha de hoy, la fecha en que nacimos para calcular los milisegundos que hemos vivido
let diaVividos = (fechaHoy - fechaNAcimiento) / milisegundosPorDia;

//Invocamos el metodo matematico de la funcion piso (FLOOR)
let edad = diaVividos / 365.25
edad = Math.floor(edad);

return edad;
}

console.warn("--Declaracion de Variables Utilizando LET--");
console.log("El valor de de la variable miFechaNacimiento es: ", miFechaNAcimiento)
var miEdad = calcularEdad(miFechaNAcimiento)
console.log("Despues de ejecutar la funcion calcularEdad, puedo saber que tienes: ", miEdad, "años.");



if(miEdad>=18)
{
    var esMAyorEdad = true;
    var esMenorEdad = false;
}
else
{
    esMAyorEdad = false;
    var esMenorEdad = true;
}

console.log("En base a tu edad puedo deducir que el valor de esMayorEdad es: ", esMAyorEdad, "y el valor de esMenorEdad es: ", esMenorEdad);

// interpolacion de Datos

/* Para inetrpolar datos en JavaScript, es decir, mezclar informacion estatica, que no cambia con datos con datos dinamicos que pueden cambiar 
durante la ejecucion del programa se requiere comenzar la cadena con un backtic (`) y los datos que son dinamicos estan encerrados en llaves 
curvas {} antecedidas por un signo de dolar $ */
console.warn("--Inerpolacion de Datos");
console.log(`Hola, ${miNombre} ${misApellidos} se que tienes ${miEdad} años; por lo que eres ${esMAyorEdad?' mayor de edad': ' menor de edad'}`); 