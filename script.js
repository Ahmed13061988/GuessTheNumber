'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🥳 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When is there no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
    //When player guess the number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number!';
    document.querySelector('body').style.backgroundColor = 'green';
    //When player guess too high
  } else if (guess > secretNumber && score > 1) {
    document.querySelector('.message').textContent = '📈 Too high!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
    //When the player guess is too low
  } else if (guess < secretNumber && score > 1) {
    document.querySelector('.message').textContent = '📉 Too low';
    score = score - 1;
    document.querySelector('.score').textContent = score;
    //When the player run out of tryings
  } else {
    document.querySelector('.message').textContent = 'Game Over 😞';
    document.querySelector('.score').textContent = 0;
  }
});
