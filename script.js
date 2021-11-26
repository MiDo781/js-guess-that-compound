// Screens
const choiceScreen = document.querySelector(".screen--choices");
const quizScreen = document.querySelector(".screen--quiz");
const ionicScreen = document.querySelector(".screen--ionic");

// Ionic

// Buttons
const ionicButton = document.querySelector(".button--ionic");
ionicButton.addEventListener("click", () => {
    showScreen(ionicScreen);

    let timer = 14;
    let timerText = document.querySelector(".timer");
    let compound = document.querySelector(".compound");
    let choices = document.getElementsByClassName("button--choice");

    compound.innerHTML = ionic[0].compound;
    for (let i = 0; i < choices.length; i++) {
        choices[i].innerHTML = ionic[0].choices[i];
    }

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
});

function showScreen(screen) {
    screen.style.opacity = "1";
    screen.style.left = "50%";
}

function hideScreen(screen) {
    screen.style.opacity = "0";
    screen.style.left = "76%";
}