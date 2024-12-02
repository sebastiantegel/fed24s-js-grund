import { Todo } from "./models/Todo";
import "./style.scss";

// import.meta.env.VITE_API_KEY

// const theForm = document.getElementById("todoForm");
// if(theForm) {
//   theForm.addEventListener("submit", () => {})
// }

document.getElementById("todoForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const theInputTag = document.getElementById("todoText");

  if (theInputTag) {
    const theText = (theInputTag as HTMLInputElement).value;
    todos.push(new Todo(theText));
    createHtml();
  }
});

const todo = new Todo("Ipsum");
const todos: Todo[] = [todo];

const ul = document.getElementById("todos");

const createHtml = () => {
  if (ul) {
    ul.innerHTML = "";
  }

  todos.forEach((t) => {
    const container = document.createElement("li");
    const span = document.createElement("span");

    span.innerHTML = t.text;

    container.appendChild(span);

    // if (ul) {
    //   ul.appendChild(container);
    // }

    ul?.appendChild(container);
  });
};

createHtml();

document.getElementById("generate")?.addEventListener("click", () => {
  const theInput = document.getElementById("pnr");

  let pnr = "";
  if (theInput) {
    pnr = (theInput as HTMLInputElement).value;
  }

  if (pnr !== "") {
    let sum = 0;

    for (let i = 0; i < pnr.length; i++) {
      if (i % 2 === 0) {
        const product = +pnr[i] * 2;
        if (product > 9) {
          sum += (product % 10) + 1;
        } else {
          sum += product;
        }
      } else {
        sum += +pnr[i];
      }
    }

    const ctrl = 10 - (sum % 10);

    const heading = document.createElement("H1");
    heading.innerHTML = pnr + ctrl;
    document.getElementById("app")?.appendChild(heading);
  }
});

const numbers: number[] = [1, 1, 2, 3, 5, 8, 13];

numbers.pop();
numbers.push(13);
numbers.splice(2, 1);

document.getElementById("start")?.addEventListener("click", () => {
  const correct = Number(prompt("Ange ett tal mellan 1 och 100"));
  let guess = -1;
  let i = 0;

  while (correct !== guess) {
    guess = Number(prompt("Gissa på ett tal:"));

    if (guess < correct) {
      alert("Din gissning var för låg, prova igen");
    }
    if (guess > correct) {
      alert("Din gissning var för hög, prova igen");
    }
    i++;
  }

  alert(`Du gissade rätt! Det tog ${i} försök`);
});
