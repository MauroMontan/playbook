export default class MyPokemon {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`${this.name} dice hola! `);
  }
}
