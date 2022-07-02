// no more issues with this keyword in arrow function

function printMyName(name) {
    console.log(name);
}

printMyName(); // undefined

printMyName("Nirmal Silwal")

// using arrow function

const myname = (name) => {
  console.log(name);
}

myname("arrow function output");

const emptyone = () => {
  console.log("inside empty arrow");
}
emptyone();

const addition = (num) => {
  return num * 5;
}
console.log(addition(2));

const multiply = num => num * 3;
console.log(multiply(3));