let V0 = document.getElementById("V0");
let V1 = document.getElementById("V1");
let Ampere = document.getElementById("Ampere");

let AllInputs = document.querySelectorAll("input");
let Answer = document.querySelector(".badge");
let btn = document.querySelector(".btn");

function Calc() {
  let Ans = ((V0.value || 1) - (V1.value || 1)) / (Ampere.value || 1);

  Ans = Math.round(Ans * 1000.0) / 1000.0;
  return Ans;
}

function ClearAll() {
  AllInputs.forEach((Item) => {
    Item.value = "";
  });
}

AllInputs.forEach((Item) => {
  Item.addEventListener("input", () => {
    Answer.textContent = Calc();
  });
});
btn.addEventListener("click", ClearAll);
