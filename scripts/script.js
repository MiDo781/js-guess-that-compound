// Screens
const selectScreen = document.querySelector(".screen--select");
const quizScreen = document.querySelector(".screen--quiz");
const timeupScreen = document.querySelector(".screen--timeup");
const wrongScreen = document.querySelector(".screen--wrong");
const correctScreen = document.querySelector(".screen--correct");

// Buttons
const startButton = document.querySelector(".button--start");
const learnButton = document.querySelector(".button--learn");
const choiceButtons = document.getElementsByClassName("button--choice");
const popupNextButtons = document.getElementsByClassName("popup__next");

// For Quiz
const optionButtons = document.getElementsByClassName("button--option");
const compoundView = document.querySelector(".quiz__compound");
let number = 0;

startButton.addEventListener("click", () => {
   selectScreen.classList.add("screen--visible"); // add opacity 1 to show "Select Your Compounds" here, and output categories which is Ionic and Covalent

   // Add event listeners to choice buttons
   for (let i = 0; i < choiceButtons.length; i++) {
      switch (choiceButtons[i].attributes["data-quiz"].value) {
         case "ionic":
            choiceButtons[i].setAttribute("onclick", "showQuestions(ionic)");
            break;
         case "covalent":
            choiceButtons[i].setAttribute("onclick", "showQuestions(covalent)");
            break;
      }
   }
});

document.querySelector(".back--screenMenu").addEventListener("click", () => {
   selectScreen.classList.remove("screen--visible");
});

document.querySelector(".back--screenCategory").addEventListener("click", () => {
   document.querySelector(".screen--quiz").style.zIndex = 0;
   document.querySelector(".screen--quiz").style.opacity = 0;
   document.querySelector(".screen--quiz").style.left = "60%";
});

function showQuestions(type) {
   number = randomQuiz(type);
   showScreen(quizScreen)
   setCompound(type);
   createOptions(type);
}

function setCompound(type) {
   let finalCompound = "";
   let initialCompound = type[number].compound.split("");
   let subscripts = type[number].subscripts;
   let subscriptIndex = 0;
   /*
       -- Flow --
       1. For each character in initial compound
       2. Check if it includes a character from subscripts of index `subcriptIndex`
       3. If true
           3.1 Wrap thet current character's value with `<sub></sub>`
           3.2 Add that current character to the variable `finalComound`
           3.3 Increment subsciptIndex
       4. If false
           4.1 Add that current character to the variable `finalComound`
   */
   for (let i = 0; i < initialCompound.length; i++) {
      if (initialCompound[i].includes(subscripts[subscriptIndex])) {
         initialCompound[i] = "<sub>" + subscripts[subscriptIndex] + "</sub>";
         finalCompound += initialCompound[i];
         subscriptIndex += 1;
      } else {
         finalCompound += initialCompound[i];
      }
   }
   compoundView.innerHTML = finalCompound;
}

function createOptions(type) {
   for (let i = 0; i < type[number].options.length; i++) {
      optionButtons[i].innerHTML = type[number].options[i];
   }
}

function shuffleOptions(options) {
   return options.sort(() => Math.random() - 0.5);
}

function checkAnswer(option, type) {
   if (option.innerHTML == type[number].answer) {
      console.log(true);
      showNextQuiz(type);
      // showScreen(correctScreen);
   } else {
      console.log(false);
      showNextQuiz(type);
      // showScreen(wrongScreen);
   }
}

function randomQuiz(type) {
   return Math.floor(Math.random() * type.length)
}

function showScreen(screen) { // use this to go back at the categories
   screen.style.left = "50%";
   screen.style.opacity = "1";
   screen.style.zIndex = "1";
}

function hideScreen(screen) {
   screen.style.left = "60%";
   screen.style.opacity = "0";
   screen.style.zIndex = "-1";
}



// // Screens
// const choiceScreen = document.querySelector(".screen--choices");
// const quizScreen = document.querySelector(".screen--quiz");
// const ionicScreen = document.querySelector(".screen--ionic");
// // Pop-ups
// const popupTime = document.querySelector(".screen--pop-up");
// const popupCorrect = document.querySelector(".screen--correct");
// // Buttons
// const choiceButton = document.getElementsByClassName("button--choices");
// const quizButtonExit = document.querySelector(".button--exit--quiz");

// // Quiz
// let quizNumber = 0;
// let compound = document.querySelector(".compound");
// let choices = document.getElementsByClassName("button--choice")

// // Timer
// let counter;
// let timer = 14;
// let timerText = document.querySelector(".timer");

// // Add onclick function to choice buttons
// for (let i = 0; i < choiceButton.length; i++) {
//     choiceButton[i].addEventListener("click", () => {
//         if (choiceButton[i].getAttribute("data-quiz") == "ionic") {
//             showQuiz(ionic)
//         } else {
//             showQuiz(covalent)
//         }
//     });
// }

// console.log(covalent[quizNumber].answer);

// function showQuiz(type) {
//     showScreen(quizScreen);

//     // Set the compound text equal to the formatted compound
//     compound.innerHTML = formatCompound(type, quizNumber);

//     // Display Choices
//     for (let i = 0; i < choices.length; i++) {
//         choices[i].innerHTML = type[quizNumber].choices[i];
//         choices[i].addEventListener("click", () => {
//             checkAnswer(type, choices[i]);
//         });
//     }

//     startTimer();
// }

// function formatCompound(name, quizNumber) {
//     let finalCompound = "";
//     let initialCompound = name[quizNumber].compound.split("");
//     let subscripts = name[quizNumber].subscripts;
//     let subscriptIndex = 0;

//     for (let i = 0; i < initialCompound.length; i++) {
//         if (initialCompound[i].includes(subscripts[subscriptIndex])) {
//             initialCompound[i] = "<sub>" + subscripts[subscriptIndex] + "</sub>";
//             finalCompound += initialCompound[i];
//             subscriptIndex += 1;    
//         } else {
//             finalCompound += initialCompound[i];
//         }
//     }

//     return finalCompound;
// }

// function checkAnswer(type, choice) {
//     if (choice.innerHTML == type[quizNumber].answer) {
//         console.log("correct");
//         showQuiz();
//     } else {
//         console.log("try again");
//         showQuiz();
//     }
// }

// quizButtonExit.addEventListener("click", () => {
//     stopTimer();
//     hideScreen(quizScreen)
// });

// function startTimer() {
//     timer = 14;
//     counter = setInterval(() => {
//         if (timer == 0) {
//             timerText.innerHTML = timer--;  
//             clearInterval(counter);
//             showPopUp(popupTime);
//         } else {
//             if (timer <= 10) {
//                 timerText.innerHTML = timer--;
//                 timerText.style.color = "red";
//             } else {
//                 timerText.innerHTML = timer--;  
//             }
//         }
//     }, 1000);
// }

// function stopTimer() {
//     clearInterval(counter);
//     timerText.innerHTML = 15; 
//     timerText.style.color = "#111";
//     timer = 14;
// }

// function showScreen(screen) {
//     screen.style.opacity = "1";
//     screen.style.left = "50%";
//     screen.style.zIndex = "1";
// }

// function hideScreen(screen) {
//     screen.style.opacity = "0";
//     screen.style.left = "76%";
//     screen.style.zIndex = "-2";
// }

// function showPopUp(popup) {
//     popup.style.opacity = "1";
//     popup.style.zIndex = "999";
//     popup.style.top = "50%";
// }

// function hidePopUp(popup) {
//     popup.style.opacity = "0";
//     popup.style.zIndex = "-1";
//     popup.style.top = "60%";
// }