import "./style.css";

class Person {
  constructor(
    public name: string,
    public age: number,
    public isMarried: boolean
  ) {}
}

const me = new Person("Sebastian", 45, true);

interface IPerson {
  name: string;
  age: number;
  isMarried: boolean;
}

const meAgain: IPerson = { name: "Sebastian", age: 45, isMarried: true };

const sum = (x: number, y: number): number => {
  return x + y;
};

const someNumber = sum(10, 30);

const myApp = document.getElementById("app");

console.log(myApp);

if (myApp) {
  myApp.className = "Hej";
}
