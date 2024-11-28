import "./style.css";
import { Person } from "./models/Person";
import { Car } from "./models/Car";
import { createHtmlCar, createHtmlPerson } from "./functions";

//#region Person
const wife = new Person("Hanna", 44, true);
const me = new Person("Sebastian", 45, true);
const son = new Person("Alvar", 14, false);
const daughter = new Person("Astrid", 14, false);

const family = [me, wife, daughter, son];

for (let i = 0; i < family.length; i++) {
  createHtmlPerson(family[i]);
}
//#endregion

//#region Cars
const volvo = new Car("Volvo", "V90", "Brown");
const bmw = new Car("BMW", "i5", "Blue");
const audi = new Car("Audi", "A8", "Silver");

const cars = [volvo, bmw, audi];

cars.forEach((car) => {
  createHtmlCar(car);
});
//#endregion
