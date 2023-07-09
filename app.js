const cards = document.querySelector(".card");
const count1 = document.querySelector(".count-1");
const count2 = document.querySelector(".count-2");
const current1 = document.querySelector(".current-1");
const current2 = document.querySelector(".current-2");
const filter = document.querySelector(".filters");
const newgame = document.querySelector(".new-game");
const hold = document.querySelector(".hold");
const roll = document.querySelector(".roll-dice");

const values = [
  "filter_1",
  "filter_2",
  "filter_3",
  "filter_4",
  "filter_5",
  "filter_6",
  "filter_7",
  "filter_8",
  "filter_9",
];

roll.addEventListener("click", () => {
  const randomFilter = Math.trunc(Math.random() * values.length);
  filter.textContent = values[randomFilter];
  current1.textContent = randomFilter + 1;
});
