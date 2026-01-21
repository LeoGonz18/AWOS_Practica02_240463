//Estilización de la barra zona de pruebas en el DevTools en el navegador
console.log("%cEjercicio 04: Objetos ",style_console);

console.warn("1. Propiedades de un Objeto")
// Esto no es un objeto son variables independientes que no se encuentran asociadas
let propertyID = 1;
let propertyName = "Departamento en el Centro de Ciudad de México";
let propertyDescription = "Hermoso departamento de 3 recámaras , 1 baño y 1 cajón de estacionamiento ubicado en el Centro de Ciudad de México, Ubicado en un tercer piso."
let propertyType = "D";     // H: House  D: Deparment T: Terrain L: Locale  W: Warehouse  C: Cabain
let propertyIsSaleable = false;    // Se vende?
let propertyIsRentable = true;    // Se renta?
let propertyPrice = 7500.00;
let propertyLat = 19.4283813;
let propertyLong = -99.1020177;
let propertyToken = Symbol("D-12558-CDMX-MX-S");
let propertyIncludedServices = ["Agua", "Luz", "Gas"];
let propertyImage = null
let propertyOwnerID = 32412
let propertyStatus = "Good"

console.log(`Datos de la propiedad en RENTA:
    Nombre: ${propertyName}
    Descripción:  ${propertyDescription}
    Tipo: ${propertyType}
    Precio: ${propertyPrice}
    Ubicación:  Latitud: ${propertyLat}  Longitud: ${propertyLong} 
    Servicios incluidos: ${propertyIncludedServices}
    En renta:  ${propertyIsRentable}
    En venta: ${propertyIsSaleable}
    Token:  ${propertyToken.description}
    Dueño: ${propertyOwnerID}
    Imagen: ${propertyImage}`);

//2. Declaración de un objeto 
/* Para declarar un objeto en JS es necesario asignarle un nombre y todas sus propiedades irán entre {} y separadas por coma en el order clave : valor */
console.warn("2. Declaración de el objeto property1")
property1 = {
    id: 1,
    name: "Departamento en el Centro de Ciudad de México", 
    description:"Hermoso departamento de 3 recámaras , 1 baño y 1 cajón de estacionamiento ubicado en el Centro de Ciudad de México, Ubicado en un tercer piso.", 
    type: "D", 
    price:7500.00, 
    isRentable: true,
    isSaleable: false,
    includedServices :  ["Agua", "Luz", "Gas"],
    lat: 19.4283813,
    long: -99.1020177,
    status: "Good", 
    token: Symbol("D-12558-CDMX-MX-S") ,
    ownerID: 32412

};


// Impresión del obejto en formato tabla
console.table(property1);

//3.- Leyendo las propiedades de un Objeto
/* Un objeto es un conjunto de variables que abstraen una entidad física o conceptual de laque es significativo almacenar información para el programa
o sistema que estemos desarrollando

Para acceder a las propiedades individuales basta con poner el nombre del objetoun "." y el nombre de la propiedad */

console.warn("3.- Lectura de las propiedades de un Objeto");
console.log(`La propiedad: ${property1.name}(${property1.id}) descrita como: ${property1.description} se encuentra actualmentev a la 
    ${property1.isSaleable?"Venta":property1.isRentable?"Renta":"No disponible"} por un precio de: ${property1.price} con los servivios de 
    ${property1.includedServices}`);

//4. Modificación de los valores de las propiedades de un objeto 
/* Para Modificar los datos de una variable basta con acceder a la propiedad deseada a modificar y asignarle su nuevo 
a través del signo = */

property1.price = 8200.00;
property1.isSaleable = true;
property1.includedServices = ["Agua","Luz","Gas","Internet","Seguridad Privada"];

console.warn("4.-Modificación de Propiedades de un Objeto");

console.log(`El usuario con id: ${property1.ownerID} etsa rentando un: ${property1.name} el cual se describe como: ${property1.description} 
    por un precio de: ${property1.price} con los servicios incluidos de: ${property1.includedServices} 
    ${property1.isSaleable?", actualmete esta a la venta":"por el momento no esta a la venta"}.`);


    //5. Destructuración de objetos (OBJECT DESTRUCTURING)
    /*JavaScript es un lenguaje dinámico que permite que un objetopreviamnete definido pueda ser descompuesto en pequeñas nuevas partes (variables) para que
    estas puedan ser manipuladas según sea lanecesidad*/

    const user1 ={
        userID: 32412,
        name: "Jose Luis",
        email: "joseLuis@gmail.com",
        createdAT: new Date("2025-01-30T23:15:52"),
        lastLogin: new Date("2026-01-20T08:00:05"),
        userRole: "Vendedor",
        totalProperties: 12,
        rating: 9.4
    };

    const user2 ={
        userID: 48571,
        name: "Uriel Leonardo",
        email: "urielLeonardo@gmail.com",
        createdAT: new Date("2024-08-20T08:58:52"),
        lastLogin: new Date("2026-01-19T23:15:35"),
        userRole: "Comprador",
        rating: 8.5,
        lastOperation: "Buscando departamento para renta"
    };

    const user3 = {
  userID: 60141,
  name: "Karla Gutierrez",
  email: "kalitag@gmail.com",
  createdAt: new Date("2023-09-10T18:18:58"),
  lastLogin: new Date("2026-01-06T23:35:35"),
  userRole: "Comprador",
  rating: 6.2,
  lastOperation: "Buscando Departamento para renta"
};

const user4 = {
  userID: 9554,
  name: "Esteban Flores",
  email: "e.flores@gmail.com",
  createdAt: new Date("2020-03-16T07:08:16"),
  lastLogin: new Date("2026-01-19T10:05:35"),
  userRole: "Comprador",
  rating: 9.2,
  lastOperation: "Buscando Departamento para renta"
};


console.warn("5. Destructuración de Objetos");
/* Creamos una función para darle formato a la fecha y sea mas facil de leer por el usuario"*/

const formaDateMX = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2,"0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

const buyerBid = (seller, buyer, property, price_bidded) => {
    const {userID: sellerID, email: sellerEmail} = seller;
    const {userID: buyerID, email:buyerEmail} = buyer;
    const {price, id} = property;

    const fecha_oferta = new Date();

    console.log(
        `El usuario: ${buyerID}(${buyerEmail}) está realizando una oferta al usuario: ${sellerID}
        ${sellerEmail}
        por la cantidad ofertada de: ${price_bidded} por la propiedad ${id}
        Precio real: ${price}
        Fecha: ${formaDateMX(g¿fecha_oferta)}`
    );

    const bid_accuracy =((price_bidded/price)*100).toFixed(2) + "%";

    return{
        buyerID,
        sellerID,
        propertyID,
        propertyPrice: price,
        date_bidded: fecha_oferta,
        bid_accurate: bid_accuracy
    };

};

//Test 1: El usuario 2 realiza una oferta de 7500
let bid1 = buyerBid(user1, user2, property1, 7500);
console.log(`La oferta tiene una exactitud del: ${bid1.bid_accurate}`);

//Test 2: El usuario 3 realiza una oferta de 8200
let bid2 = buyerBid(user1, user3, property1, 8200);
console.log(`La oferta tiene una exactitud del: ${bid2.bid_accurate}`);

//Test 3: El usuario 4 realiza una oferta de 10000
let bid3 = buyerBid(user1, user4, property1, 10000);
console.log(`La oferta tiene una exactitud del: ${bid3.bid_accurate}`);