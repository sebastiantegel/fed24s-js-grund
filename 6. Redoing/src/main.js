import "./style.css";

const sum = (x, y) => {
  const result = x + y;
  return result;
};

const s = sum(5, 7);
console.log(s);

const calcControlNumber = (pnr) => {
  let result = 0;

  // Loopa igenom alla siffror i pnr
  for (let i = 0; i < pnr.length; i++) {
    // Om vi är på en jämn position (varannan gång)
    if (i % 2 === 0) {
      const t = +pnr[i] * 2;
      if (t >= 10) {
        // Beräkna siffersumman
        result += 1 + (t % 10);
      } else {
        // Addera bara t till sum
        result += t;
      }
    } else {
      result += +pnr[i];
    }
  }

  // Beräkna skillnaded mellan det närmsta större 10-tal och result.
  let ctrl = 10 - (result % 10);

  // Kontrollera om result är jämnt delbart med 10
  if (result % 10 === 0) {
    ctrl = 0;
  }

  return pnr + ctrl;
};

document.getElementById("calc").addEventListener("click", () => {
  const completePnrNumber = calcControlNumber(
    document.getElementById("pnr").value
  );

  document.getElementById("result").innerHTML = completePnrNumber;
});
