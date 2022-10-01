let V0 = document.getElementById("V0");
let V1 = document.getElementById("V1");
let Sum = document.getElementById("Sum");
let Ampere = document.getElementById("Ampere");

let AllInputs = document.querySelectorAll("input");
let Answer = document.querySelector(".badge");
let btn = document.querySelector(".btn");
function Calc() {
  let Ans = 0;
  if (V0.value) Ans = ((V0.value || 1) - (V1.value || 1)) / (Ampere.value || 1);
  else Ans = (Sum.value || 1) / (Ampere.value || 1);
  Ans = Math.round(Ans * 1000.0) / 1000.0;
  return Ans;
}

function ClearAll() {
  AllInputs[0].focus();
  AllInputs.forEach((Item) => {
    Item.setAttribute("data-counter", 0);
    Item.value = null;
  });
}
let Solve = (Item, Val) => {
  let Cnt = parseInt(Item.getAttribute("data-counter"));
  Cnt += Val;
  Item.setAttribute("data-counter", Cnt);
};
for (let i = 0; i < AllInputs.length; i++) {
  AllInputs[i].addEventListener("input", (E) => {
    if (E.data) Solve(AllInputs[i], 1 * (E.data != "."));
    else Solve(AllInputs[i], -1);
    if (AllInputs[i].getAttribute("data-counter") == 3) {
      if (i == 1) AllInputs[3].focus();
      else if (i != 3) AllInputs[i + 1].focus();
    }
    Answer.textContent = Calc();
  });
}
btn.addEventListener("click", ClearAll);
