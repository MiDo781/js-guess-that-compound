const startButton = document.querySelector(".button--start");
const exitButton = document.querySelector(".button--exit");
const choiceScreen = document.querySelector(".screen-choices");

startButton.addEventListener("click", () => {
    showScreen(choiceScreen)
    console.log("working?")
});

exitButton.addEventListener("click", () => {
    hideScreen(choiceScreen)
    console.log("working?")
});

function showScreen(screen) {
    screen.style.opacity = "1";
    screen.style.left = "50%";
}

function hideScreen(screen) {
    screen.style.opacity = "0";
    screen.style.left = "76%";
}