/* @flow */

class Pet {
  type = 'DOG';

  constructor(type) {
    this.type = type;
  }
}

const milou = new Pet('DOG');
const fluffy = new Pet('DOG');
const whiskers = new Pet('CAT');

let pets = {
  dogs: [milou, fluffy],
};

pets = {...pets, cats: [whiskers]};

console.log(pets.dogs.map(p => p.type));
