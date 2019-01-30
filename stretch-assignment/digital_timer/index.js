const tens = document.querySelector('#secondTens');
let ones = document.querySelector('#secondOnes');
let hundo = document.querySelector('#msHundreds');

let counter = 0;
let counterMs = 0;
let counterHundo = 0;

function timerSeconds() {
  if (counter < 9) {
    counter++;
    secondOnes.textContent = counter;
  } else {
    ones.innerHTML = '0';
    ones.style.color = 'red';
  }
}

function timerTen() {
  tens.textContent = 1;
  tens.style.color = 'red';
}

let tTen = setInterval(timerTen, 10000);
let tSec = setInterval(timerSeconds, 1000);

let thundo = setInterval(timerHuno, 10);

function timerHuno() {
  if (counterHundo < 9) {
    counterHundo++;
    hundo.textContent = counterHundo;
  } else {
    hundo.innerHTML = '0';
    hundo.style.color = 'red';
  }
}
