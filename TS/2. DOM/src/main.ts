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
