let V0 = document.getElementById("V0");
let V1 = document.getElementById("V1");
let Ampere = document.getElementById("Ampere");

let AllInputs = document.querySelectorAll("input");
let Answer = document.querySelector(".badge");

function Calc() {
  return ((V0.value || 1) - (V1.value || 1)) / (Ampere.value || 1);
}

AllInputs.forEach((Item) => {
  Item.addEventListener("input", () => {
    Answer.textContent = Calc();
  });
});
