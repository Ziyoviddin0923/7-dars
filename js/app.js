import words from "./data.js";

const randomWord = document.getElementById("random_word");
const randomWordInput = document.getElementById("random_word_input");
const userScore = document.getElementById("user_score");
const userTime = document.getElementById("user_time");
const restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", restartGame);
const easyButton = document.getElementById("easyButton");
const hardButton = document.getElementById("hardButton");

let globalWord;
let score = 0;
let time = 10;

function randomWordGenerator() {
  const randomNumber = Math.trunc(Math.random() * words.length);
  randomWord.textContent = words[randomNumber];
  globalWord = words[randomNumber];
}

randomWordGenerator();

randomWordInput.addEventListener("input", () => {
  if (randomWordInput.value === globalWord) {
    randomWordGenerator();
    randomWordInput.value = "";
    score++;
    userScore.textContent = score;
  }
});

function colorByRange(number) {
  if (number >= 8 && number <= 10) {
    return "green";
  } else if (number >= 4 && number <= 7) {
    return "yellow";
  } else {
    return "red";
  }
}

function endGame() {
  clearInterval(timer);
  randomWordInput.disabled = true;
  randomWord.textContent = "O'yin tugadi!";
}

if (time <= 0) {
  endGame();
}
const timer = setInterval(() => {
  time--;
  userTime.textContent = `${time}s`;
  if (time === 7 || time === 4 || time === 6 || time === 5) {
    userTime.style.color = "yellow";
  } else {
    userTime.style.color = "";
  }

  if (time <= 0) {
    clearInterval(timer);
    endGame();
  }
}, 1000);

function restartGame() {
  clearInterval(timer);
  randomWordInput.disabled = false;
  score = 0;
  time = 10;
  userScore.textContent = score;
  userTime.textContent = `${time}s`;
  randomWordInput.value = "";
  randomWordGenerator(); //
  timer = setInterval(countdown, 1000);
}

easyButton.addEventListener("click", () => {});

hardButton.addEventListener("click", () => {});
