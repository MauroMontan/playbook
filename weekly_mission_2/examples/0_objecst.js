console.log("Objetos");

// Ejemplo 1: Crear un objeto
const myObjetc = {}; // Esto es un objeto vacío
console.log("Ejemplo 1: Crear un objeto vacío");
console.log(myObjetc);

// Ejemplo 2: Crear un objeto con propiedades
const myObjetc2 = {
  name: "Mauro",
  age: 21,
};
console.log("Ejemplo 2: Crear un objeto con propiedades");
console.log(myObjetc2);

// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
  name: "Rocky",
  age: 6,
};
console.log("Ejemplo 3: Objeto con diferentes propiedades");
console.log(myObject3);

// Ejemplo 4: Objeto con métodos
const pet = {
  name: "Mauro",
  // Esta es una función que se guarda como propiedad
  sayHello: function () {
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} te saluda en español!`);
  },
};

console.log("Ejemplo 4: Objeto con métodos");
pet.sayHello();

// Ejemplo 5: Objeto con método que recibe parámetros
