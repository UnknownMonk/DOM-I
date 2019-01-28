const tens = document.querySelector('#secondTens');
let secondOnes = document.getElementById('secondOnes');

let counter = 0;

function timerSeconds() {
  if (counter < 9) {
    counter++;
    secondOnes.textContent = counter;
  } else {
    secondOnes.innerHTML = '0';
    secondOnes.style.color = 'red';
  }
}

function timerTen() {
  tens.textContent = 1;
  tens.style.color = 'red';
}
let tTen = setInterval(timerTen, 10000);
let tSec = setInterval(timerSeconds, 1000);
