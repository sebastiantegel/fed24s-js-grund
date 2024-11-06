import "./style.css";

// i =           0  1  2  3  4  5
const numbers = [1, 1, 2, 3, 5, 8];

console.log(numbers);

// Lägg till ett värde
numbers.push(13);

console.log(numbers);

// Ta bort ett värde
// 1
numbers.pop();
console.log(numbers);

// 2
numbers.splice(2, 1);
console.log(numbers);

// Ändra ett värde i listan
numbers[0] = 100;
console.log(numbers);

const biggerNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(biggerNumbers);

let sum = 0;
const result = document.getElementById("result");

numbers.push(13);
numbers[0] = 1;
numbers.push(21);
// numbers = [1, 1, 3, 5, 8, 13, 21]

const texts = ["Lorem", "ipsum", "dolor", "sit", "amet"];

for (let i = 0; i < numbers.length; i++) {
  const numberContainer = document.createElement("section");
  const numberSpan = document.createElement("span");

  numberSpan.innerHTML = numbers[i]; // <span>100</span> om i = 0
  numberContainer.className = "container";

  numberContainer.addEventListener("click", () => {
    console.log("Du klickade på en section:", numbers[i]);
    sum += numbers[i];
    result.innerHTML = sum;
  });

  numberContainer.appendChild(numberSpan);

  document.getElementById("numbers").appendChild(numberContainer);
}
