let firstName = "Sebastian";

console.log(firstName);

firstName = "Hanna";

let age = 45;
const isMarried = true;

console.log(age);
console.log(isMarried);

const newAge = age + 1;

console.log(newAge);

age = age + 1;

console.log(age);

age += 1;

console.log(age);

age++;

console.log(age);

console.log(age++); // 48 -> age = age + 1 -> age = 49

//age = 49

console.log(age * 2);

const ageAsCircle = age / 3.14;
console.log(ageAsCircle);

console.log(1 % 2); // 1/2 -> 1
console.log(2 % 2); // 2/2 = 1 0/2 -> 0
console.log(3 % 2);
console.log(4 % 2);
console.log(5 % 2);
console.log(6 % 2);
console.log(7 % 2);
console.log(8 % 2);
console.log(9 % 2);
console.log(10 % 2);

if (age !== "49") {
  console.log("49 år gammal");
  const myAwesomeVariable = 3;
  console.log(myAwesomeVariable);
} else {
  console.log("Haha, du är inte 49 :)");
}

const userResult = confirm("Lorem ipsum?");

console.log(userResult);
