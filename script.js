'use strict';

const setSicretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = setSicretNumber();

let score = 20;
let highScore = 0;

const message = function (output) {
  return (document.querySelector('.message').textContent = output);
};

const setNumber = function (output) {
  return (document.querySelector('.number').textContent = output);
};

const setScore = function (output) {
  return (document.querySelector('.score').textContent = output);
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = setSicretNumber();
  message('Start guessing...');
  document.querySelector('.guess').value = '';
  setScore(score);
  setNumber('?');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When is there no input
  if (!guess) {
    message('⛔️ No number!');
    //When player guess the number
  } else if (guess !== secretNumber) {
    message(guess > secretNumber ? '📈 Too high!' : '📉 Too low');
    score--;
    setScore(score);
    if (score < 1) {
      setScore(0);
      message('Game Over 😞');
    }
  } else if (guess === secretNumber) {
    message('🥳 Correct Number!');
    document.querySelector('body').style.backgroundColor = 'green';
    setNumber(secretNumber);
    document.querySelector('.number').style.width = '30rem'; //always should equal to string in styling
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  }
});
