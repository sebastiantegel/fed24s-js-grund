export function createHtmlCar(car) {
  const carContainer = document.createElement("div");
  carContainer.innerHTML = car.manufacturer;

  carContainer.addEventListener("click", () => {
    console.log("Du klickade på:", car);
  });

  document.getElementById("app").appendChild(carContainer);
}

export function createHtmlPerson(person) {
  const container = document.createElement("div");
  const name = document.createElement("h2");
  const age = document.createElement("p");
  const isMarried = document.createElement("input");

  container.className = "person";
  name.innerHTML = person.name;
  age.innerHTML = person.age;

  isMarried.type = "checkbox";
  isMarried.checked = person.isMarried;
  isMarried.disabled = true;

  container.appendChild(name);
  container.appendChild(age);
  container.appendChild(isMarried);

  document.getElementById("app").appendChild(container);
}
