import "./style.css";
import { Person } from "./models/Person";

const wife = new Person("Hanna", 44, true);
// wife.name = "Hanna";
// wife.age = 44;
// wife.isMarried = true;

const me = new Person("Sebastian", 45, true);
// me.name = "Sebastian";
// me.age = 45;
// me.isMarried = true;

const son = new Person("Alvar", 14, false);
const daughter = new Person("Astrid", 14, false);

console.log(me);
console.log(wife);

const family = [me, wife, daughter, son];

for (let i = 0; i < family.length; i++) {
  const container = document.createElement("div");
  const name = document.createElement("h2");
  const age = document.createElement("p");
  const isMarried = document.createElement("input");

  container.className = "person";
  name.innerHTML = family[i].name;
  age.innerHTML = family[i].age;

  isMarried.type = "checkbox";
  isMarried.checked = family[i].isMarried;
  isMarried.disabled = true;

  container.appendChild(name);
  container.appendChild(age);
  container.appendChild(isMarried);

  document.getElementById("app").appendChild(container);
}
