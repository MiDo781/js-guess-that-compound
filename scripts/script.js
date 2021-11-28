// Screens
const choiceScreen = document.querySelector(".screen--choices");
const quizScreen = document.querySelector(".screen--quiz");
const ionicScreen = document.querySelector(".screen--ionic");
// Pop-ups
const popUp = document.querySelector(".screen--pop-up");
// Buttons
const choiceButton = document.getElementsByClassName("button--choices");
const quizButtonExit = document.querySelector(".button--exit--quiz");
console.log(quizButtonExit);

let quizNumber = 1;

// Timer
let counter;
let timer = 14;
let timerText = document.querySelector(".timer");

// Add onclick function to choice buttons
for (let i = 0; i < choiceButton.length; i++) {
    choiceButton[i].addEventListener("click", () => {
        showQuiz();
    });
}

// TODO 
// Fix quizButton returning null

function showQuiz() {
    showScreen(quizScreen);

    let compound = document.querySelector(".compound");
    let choices = document.getElementsByClassName("button--choice")

    // Set the compound text equal to the formatted compound
    compound.innerHTML = formatCompound(ionic, quizNumber);

    // Display Choices
    for (let i = 0; i < choices.length; i++) {
        choices[i].innerHTML = ionic[quizNumber].choices[i];
        choices[i].addEventListener("click", () => {
            console.log("I am " + choices[i].innerHTML);
        });
    }

    startTimer();
}

quizButtonExit.addEventListener("click", () => {
    stopTimer();
    hideScreen(quizScreen)
});

function startTimer() {
    timer = 14;
    counter = setInterval(() => {
        if (timer == 0) {
            timerText.innerHTML = timer--;  
            clearInterval(counter);
            showPopUp(popUp);
        } else {
            if (timer <= 10) {
                timerText.innerHTML = timer--;
                timerText.style.color = "red";
            } else {
                timerText.innerHTML = timer--;  
            }
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(counter);
    timerText.innerHTML = 15; 
    timer = 14;
}

function formatCompound(type, quizNumber) {
    let finalCompound = "";
    let initialCompound = type[quizNumber].compound.split("");
    let subscripts = type[quizNumber].subscripts;
    let subscriptIndex = 0;

    for (let i = 0; i < initialCompound.length; i++) {
        if (initialCompound[i].includes(subscripts[subscriptIndex])) {
            initialCompound[i] = "<sub>" + subscripts[subscriptIndex] + "</sub>";
            finalCompound += initialCompound[i];
            subscriptIndex += 1;    
        } else {
            finalCompound += initialCompound[i];
        }
    }

    return finalCompound;
}

function showScreen(screen) {
    screen.style.opacity = "1";
    screen.style.left = "50%";
}

function hideScreen(screen) {
    screen.style.opacity = "0";
    screen.style.left = "76%";
}

function showPopUp(popup) {
    popup.style.opacity = "1";
    popup.style.zIndex = "999";
    popup.style.top = "50%";
}

function hidePopUp(popup) {
    popup.style.opacity = "0";
    popup.style.zIndex = "-1";
    popup.style.top = "60%";
}