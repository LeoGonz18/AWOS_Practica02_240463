// Tipos de datos 

//Personalización de salidas a consola
console.log("%c2.- Ejercicio 02: Tipos de Datos ",style_console);

// 1. Undefined - Valor por defecto asignado a variables declaradas pero no inicializadas, no es igual a NULL
console.warn("1.- UNDEFINED (No Definido)")
let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("Valores Actuales de las variables");
console.log(`usuarioLogeado = ${usuarioLogeado}`);
console.log(`rolUsuario = ${rolUsuario}`);
console.log(`ultimoAcceso = ${ultimoAcceso}`);

/* En Java Scrit existe el metodo typeof() que nos devuelve el tipo de dato de una variable preficamente declarada.
*/

console.log("Tipos de datos de las variables declaradas" );
console.log(`usuarioLogeado = ${typeof(usuarioLogeado)}`);
console.log(`rolUsuario = ${typeof(rolUsuario)}`);
console.log(`ultimoAcceso = ${typeof(ultimoAcceso)}`);

// Supongamos que un usuario denominado UrielLeo18 se ha logeado exitosamente, el valor de la variable debera actualizarse a su username

usuarioLogeado = "UrielLeo18";
 
// Pero no cambiara su valor, tambien cambiara su tipo 

console.log(`El valor de la variable usuarioLogeado es: ${usuarioLogeado} y su nuevo tipo de dato es: ${typeof(usuarioLogeado)}`);

// 2.- BOOLEAN (TRUE/FALSE) - Verdadero o Falso
console.warn("2.- BOOLEAN (TRUE/FALSE)");
var hayUsuarioLogeado;

/* Supongamos que nuestra app tendrá un menu especifico para que los usuarios registrados, en el podran visualizar sus mensajes o eatdo de sus publicaciones de rednta o venta de prioridades, a diferencia de un usuario que entra de 
manera incognita a visualizar las propiedades*/

function validacionUsuarioLogeado(){
    console.log(`El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado}, que es de tipo: ${typeof(hayUsuarioLogeado)}`);
    
    if(hayUsuarioLogeado === true)
    {
        console.log("Dado que se ha logeado un usuario la app mostrará el menú del usuario");
    }
    else if(!hayUsuarioLogeado)
    {
        console.log("No puedo prosesar este tipo de dato, requiero de un booleano");
    }

}

// test1 : usuario logeado = true
hayUsuarioLogeado = true;
console.log("test 1")
validacionUsuarioLogeado();

// test2 : usuario logeado = false
console.log("Test 2")
hayUsuarioLogeado = false
validacionUsuarioLogeado();

// test3 : usuario logeado = a cualquier otra cosa
console.log("Test 3")
hayUsuarioLogeado = 52.5;
validacionUsuarioLogeado();

// 3.- NUMBER (Numericos)
console.warn("3.- NUMBER (NUMERICOS)");
/*Es importante saber que Java Script a diferencia de otroslenguajes no diferencia los datos de tipo numericos, lo que para otros lenguajes de programación lo que un ENTERO (INT), DOBLE (DOUBLE), para el solo
son numeros (NUMBER)*/

let userID_Owner = 225
let priceProperty = 125000.50
let latGPS = 20.240508
let longGPS = -97.952881
let altGPS = 1180

console.log(`Los valores de las variables declaradas para los datos de la propiedad son:
    ID del Usuario propietario: ${userID_Owner}
    Precio de la propiedad: ${priceProperty}
    Latitud (GPS): ${latGPS}
    Longitud (GPS): ${longGPS}
    Altitud (GPS): ${altGPS}`);

    console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son:
    ID del Usuario propietario: ${typeof(userID_Owner)}
    Precio de la propiedad: ${typeof(priceProperty)}
    Latitud (GPS): ${typeof(latGPS)}
    Longitud (GPS): ${typeof(longGPS)}
    Altitud (GPS): ${typeof(altGPS)}`);
    
    // 4.- STRING (Cadena de Caracteres)

    var fullnamOwner = "Uriel Leonardo González";
    let nameProperty = "Hermosa Casa en la Playa de Puesto Vallarta";
    let descriptionPropiety = " Casa de 2 pisos, 4 habitaciones, 2 baños completos y estacionamiento para 2 automoviles a orilla de mar";
    var statusProperty = "Disponible";
    const typeProperty = "C";
    var addresProperty;

    /*Los tipos de datos STRING son palabras, valores cualitativos de las entidades de nuestra aplicacion, que no tienen un tamaño maximo y que estan conformadas por caracteres 
    alfabéticos, caracteres especiales como acentos o sibolos de algún idioma*/

    console.warn("4.- STRING ( CADENA DE CARACTERES, PALABRAS");

    console.log(`El usuario: ${fullnamOwner} 
        esta vendiendo o rentando: ${nameProperty}
        que consiste en: ${descriptionPropiety}
        actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`);

        console.log(`Las variables declaradas son del tipo:
            fullnameOwner : ${typeof(fullnamOwner)}
            nameProperty : ${typeof(nameProperty)}
            descriptionProperty : ${typeof(descriptionPropiety)}
            statusProperty : ${typeof(statusProperty)}
            typeProperty : ${typeof(typeProperty)}`);



