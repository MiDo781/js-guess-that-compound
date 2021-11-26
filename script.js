// Learn Section
const learnExitButton = document.querySelector(".button--exit--learn");

// Main Menu
const startButton = document.querySelector(".button--start");
const learnButton = document.querySelector(".button--learn");

// Choices
const choiceExitButton = document.querySelector(".button--exit");
const choiceScreen = document.querySelector(".screen-choices");

function showScreen(screen) {
    screen.style.opacity = "1";
    screen.style.left = "50%";
}

function hideScreen(screen) {
    screen.style.opacity = "0";
    screen.style.left = "76%";
}