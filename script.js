// Screens
const choiceScreen = document.querySelector(".screen--choices");
const quizScreen = document.querySelector(".screen--quiz");
const ionicScreen = document.querySelector(".screen--ionic");

// Timer
let timerText = document.querySelector(".timer");
let timer = 15;
let counter = setInterval(() => {
    if (timer == 0) {
        timerText.innerHTML = timer--;  
        clearInterval(counter);
    } else {
        if (timer <= 10) {
            timerText.innerHTML = timer--;
            timerText.style.color = "red";
        } else {
            timerText.innerHTML = timer--;  
        }
    }
}, 1000);

function showScreen(screen) {
    screen.style.opacity = "1";
    screen.style.left = "50%";
}

function hideScreen(screen) {
    screen.style.opacity = "0";
    screen.style.left = "76%";
}