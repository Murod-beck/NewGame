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

let currents = 0;
let activePlayer = 0;
let holds = [0, 0];

const switchPlayer = () => {
  currents = 0;
  document.querySelector(`.current-${activePlayer}`).textContent = currents;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(".card-0").classList.toggle("blue-grey");
  document.querySelector(".card-1").classList.toggle("blue-grey");
};

const gameOver = () => {
  hold.classList.add("disabled");
  roll.classList.add("disabled");
  document.querySelector(`.game-over${activePlayer}`).style.display = "block";
};

roll.addEventListener("click", () => {
  const randomFilter = Math.trunc(Math.random() * values.length);
  filter.textContent = values[randomFilter];
  if (randomFilter !== 0) {
    currents += randomFilter + 1;
    document.querySelector(`.current-${activePlayer}`).textContent = currents;
  } else {
    switchPlayer();
  }
});

hold.addEventListener("click", () => {
  holds[activePlayer] += currents;
  document.querySelector(`.count-${activePlayer}`).textContent =
    holds[activePlayer];
  if (holds[activePlayer] >= 100) {
    gameOver();
  } else switchPlayer();
});

newgame.addEventListener("click", () => {
  hold.classList.remove("disabled");
  roll.classList.remove("disabled");
  document.querySelector(`.game-over${activePlayer}`).style.display = "none";
  currents = 0;
  activePlayer = 0;
  holds = [0, 0];
  filter.textContent = "filter";
  document.querySelector(".count-0").textContent = 0;
  document.querySelector(".count-1").textContent = 0;
  document.querySelector(".current-0").textContent = 0;
  document.querySelector(".current-1").textContent = 0;
  document.querySelector(".card-0").classList.add("blue-grey");
  document.querySelector(".card-1").classList.remove("blue-grey");
});
