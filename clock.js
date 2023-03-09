const timerSection = document.getElementById('timer-section');
let intervalId;

function startTimer() {
    let num = 0;
    intervalId = setInterval(() => {
      timerSection.textContent = num;
      num++;
      console.log(num);
    }, 1000);
  }
  

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer(){
    timerSection.innerHTML= 0
}

const stopButton = document.getElementById('stop-btn');
stopButton.addEventListener('click', stopTimer);

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', resetTimer)