/*
Class Review 

method to create new objects must be called constructor
class keyword creates a constant, so you can not redefine it.
*/

// define class properties
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  // instance method
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'you are expelled!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }
}

// creating an instance

let firstStudent = new Student('Colt', 'Steele', 4);
let secondStudent = new Student('Blue', 'Steele', 3);

secondStudent.addScore(92);
secondStudent.addScore(87);
console.log(secondStudent.scores);
console.log(secondStudent.calculateAverage());
