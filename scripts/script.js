// Screens
const choiceScreen = document.querySelector(".screen--choices");
const quizScreen = document.querySelector(".screen--quiz");
const ionicScreen = document.querySelector(".screen--ionic");
// Pop-ups
const popUp = document.querySelector(".screen--pop-up");
// Buttons
const choiceButton = document.getElementsByClassName("button--choices");
const quizButtonExit = document.querySelector(".button--exit--quiz");

let quizNumber = 2;

// Timer
let counter;
let timer = 14;
let timerText = document.querySelector(".timer");

// Add onclick function to choice buttons
for (let i = 0; i < choiceButton.length; i++) {
    choiceButton[i].addEventListener("click", () => {
        if (choiceButton[i].getAttribute("data-quiz") == "ionic") {
            showQuiz(ionic)
        } else {
            showQuiz(covalent)
        }
    });
}

function showQuiz(type) {
    showScreen(quizScreen);

    let compound = document.querySelector(".compound");
    let choices = document.getElementsByClassName("button--choice")

    // Set the compound text equal to the formatted compound
    compound.innerHTML = formatCompound(type, quizNumber);

    // Display Choices
    for (let i = 0; i < choices.length; i++) {
        choices[i].innerHTML = type[quizNumber].choices[i];
        choices[i].addEventListener("click", () => {
            console.log("I am " + choices[i].innerHTML);
        });
    }

    startTimer();
}

function formatCompound(name, quizNumber) {
    let finalCompound = "";
    let initialCompound = name[quizNumber].compound.split("");
    let subscripts = name[quizNumber].subscripts;
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
    timerText.style.color = "#111";
    timer = 14;
}

function showScreen(screen) {
    screen.style.opacity = "1";
    screen.style.left = "50%";
    screen.style.zIndex = "1";
}

function hideScreen(screen) {
    screen.style.opacity = "0";
    screen.style.left = "76%";
    screen.style.zIndex = "-2";
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