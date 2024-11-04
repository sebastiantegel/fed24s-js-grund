import "./style.css";

// for

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let name = "sebastian";

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

// while

let j = 0;
while (j < 10) {
  console.log(j);

  j++;
}

// forEach

["S", "e", "b"].forEach((characterInLoop) => {
  console.log(characterInLoop);
});

// map
const NAME = ["S", "e", "b"].map((c) => {
  return c.toUpperCase();
});
console.log(NAME);

// for med html
const ul = document.createElement("ul");

for (let i = 0; i < name.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = name[i].toUpperCase();
  ul.appendChild(li);
}

const theMainDiv = document.getElementById("app");
theMainDiv.appendChild(ul);

// Nytt exempel - stor bokstav

let newName = "";
for (let i = 0; i < name.length; i++) {
  if (i === 0) {
    newName += name[i].toUpperCase();
  } else {
    newName += name[i];
  }
}

const pTag = document.createElement("p");
pTag.innerHTML = newName;
theMainDiv.appendChild(pTag);
