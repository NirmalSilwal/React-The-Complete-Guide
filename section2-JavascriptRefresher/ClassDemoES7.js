class Human {
  gender = 'male';

  printGender = () => {
    console.log(this.gender);
  }
}


class Person extends Human {
  name = 'Maxwell';
  gender = 'Female';

  printMyName = () => {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
console.log(person.name);

// from inherited class
console.log(person.gender);
person.printGender();