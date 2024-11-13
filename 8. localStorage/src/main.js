import { Person } from "./models/Person";
import "./style.css";

//#region Strings in localStorage
document.getElementById("savestring").addEventListener("click", () => {
  localStorage.setItem("firstname", "Sebastian");
});

document.getElementById("getstring").addEventListener("click", () => {
  const foundValue = localStorage.getItem("firstname");

  if (foundValue) {
    const pTag = document.createElement("p");
    pTag.innerHTML = foundValue;
    document.getElementById("app").appendChild(pTag);
  }
});

//#endregion

//#region Objects in localStorage
document.getElementById("saveobject").addEventListener("click", () => {
  const p = new Person("Sebastian", 45, 14.3);

  localStorage.setItem("me", JSON.stringify(p));
});

document.getElementById("getobject").addEventListener("click", () => {
  const foundValue = localStorage.getItem("me");

  if (foundValue) {
    const pAgain = JSON.parse(foundValue);
    const div = document.createElement("div");
    div.innerHTML = pAgain.age;
    document.getElementById("app").appendChild(div);
  }
});
//#endregion

//#region Arrays in localStorage
const me = new Person("Hanna", 44, 9);
const wife = new Person("Hanna", 44, 9);

const family = [me, wife];

document.getElementById("savearray").addEventListener("click", () => {
  localStorage.setItem("family", JSON.stringify(family));
});

document.getElementById("getarray").addEventListener("click", () => {
  const foundValue = localStorage.getItem("family");

  if (foundValue) {
    const familyAgain = JSON.parse(foundValue);
    const span = document.createElement("span");
    span.innerHTML = familyAgain.length;
    document.getElementById("app").appendChild(span);
  }
});

//#endregion
