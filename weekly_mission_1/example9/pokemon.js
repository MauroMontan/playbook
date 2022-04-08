class Pokemon {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Mi pokemon ${this.name} te saluda `);
  }

  sayMessage() {
    console.log(`${this.name} te sluda`);
  }
}

module.exports = Pokemon;
