// class are used by React to create the Components
// classes are blueprint for javascript objects

class Human {
    // in ES6 we assign property inside constructor
    constructor() {
      this.gender = 'male';
    }
    
    printGender(){
      console.log(this.gender);
    }
  }
  
  
  class Person extends Human{
    constructor() {
      super();
      this.name = 'Maxwell';
      this.gender = 'Female';
    }
    
    printMyName() {
       console.log(this.name);
    }
  }
  
  const person = new Person();
  person.printMyName();
  console.log(person.name);
  
  // from inherited class
  console.log(person.gender);
  person.printGender();