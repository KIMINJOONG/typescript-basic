const x = {};
const y = {};

console.log(x);
console.log(y);
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level
    // this.makeCoffee = (shots) => {
    //     console.log('making....');
    // }
}

// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making....');
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
    this.milk = milk;
}

const latteMachine = new LatteMachine(123);

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
console.log(latteMachine);
latteMachine.makeCoffee();
