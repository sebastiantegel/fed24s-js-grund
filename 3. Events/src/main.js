// const handleClick = () => {
//   console.log("Du klickade på knappen");

//   const cancelButton = document.createElement("button");
//   cancelButton.innerHTML = "Avbryt";
//   cancelButton.addEventListener("click", () => {
//     saveButton.className = "";
//   });
//   document.body.appendChild(cancelButton);

//   saveButton.className = "btn";
// };
// function handleClick() {
//   console.log("Du klickade på knappen");

//   const cancelButton = document.createElement("button");
//   cancelButton.innerHTML = "Avbryt";
//   cancelButton.addEventListener("click", () => {
//     saveButton.className = "";
//   });
//   document.body.appendChild(cancelButton);

//   saveButton.className = "btn";
//}

const saveButton = document.getElementById("save");

console.log(saveButton);

if (saveButton) {
  saveButton.addEventListener("click", () => {
    console.log("Du klickade på knappen");

    const cancelButtonFound = document.getElementById("cancel");

    if (cancelButtonFound === null) {
      const cancelButton = document.createElement("button");
      cancelButton.innerHTML = "Avbryt";
      cancelButton.id = "cancel";
      cancelButton.addEventListener("click", () => {
        saveButton.className = "";
      });
      document.body.appendChild(cancelButton);
    }

    saveButton.className = "btn";
  });
}
