import { ionic, covalent, learn } from './questions.js'

// Screens
const selectScreen = document.querySelector(".screen--select");
const quizScreen = document.querySelector(".screen--quiz");
const backScreen = document.getElementsByClassName('back--screenMenu');
const backScreenCategory = document.querySelector('.back--screenCategory');
const timeupScreen = document.querySelector(".screen--timeup");
const wrongScreen = document.querySelector(".screen--wrong");
const correctScreen = document.querySelector(".screen--correct");

// Buttons
const startButton = document.querySelector(".button--start");
const learnButton = document.querySelector(".button--learn");
const ionicButton = document.querySelector('.button--ionic');
const covalentButton = document.querySelector('.button--covalent');
const popupNextButtons = document.getElementsByClassName("popup__next");

// For Quiz
const timer = document.querySelector('.quiz__timer');
const optionButtons = document.getElementsByClassName("button--option");
const compoundView = document.querySelector(".quiz__compound");
const compoundInfo = document.querySelector('.compound__information');
let number = 0;

// For Learn
const learnScreen = document.querySelector('.screen--learn');
const topics = document.querySelector('.topics');

startButton.addEventListener("click", () => {
   selectScreen.classList.add("screen--visible");
   // Listen for the user to select category
   ionicButton.addEventListener('click', () => {
      quizScreen.classList.add("screen--visible");
      showQuestions(ionic); // get the array from import
   });
   covalentButton.addEventListener('click', () => {
      quizScreen.classList.add("screen--visible");
      showQuestions(covalent); // get the array from import
   });
   // Array Length = Total Questions
   ionicButton.childNodes[3].textContent = `Total Items: ${ionic.length}`;
   covalentButton.childNodes[3].textContent = `Total Items: ${covalent.length}`;
});

learnButton.addEventListener('click', () => {
   learnScreen.classList.add("screen--visible");

   // Load 'Learn' Contents
   topics.innerHTML = learn.map((info) => {
      return ` <div class="topic">
                  <h2 class="topic__title">${info.title}</h2>
                  <p class="topic__content">${info.content}</p>
               </div>`
   }).join('');
});

Array.from(backScreen).forEach((btn) => {
   btn.addEventListener("click", () => {
      selectScreen.classList.remove("screen--visible");
      learnScreen.classList.remove("screen--visible");
   });
});

const showQuestions = (element) => {
   //Generate Random Question and Options
   let seconds = 15;
   let rand = Math.floor(Math.random() * element.length);
   let randomQuestion = element[rand].compound;
   let shuffleOptions = element[rand].options.sort(() => Math.random() - 0.5);
   timer.innerHTML = seconds;

   // Insert <sub> tag per subscripts to be editable in css
   let subscripts = /[\u2070-\u209F\u00B2\u00B3\u00B9]/g;
   let modifiedRandomQuestion = [...randomQuestion];
   for (let char = 0; char < randomQuestion.length; char++) {
      if (randomQuestion[char].match(subscripts)) {
         modifiedRandomQuestion[char] = `<sub>${randomQuestion[char].match(subscripts)}</sub>`;
      }
   }

   // Adding Question and Option to the document
   compoundView.innerHTML = modifiedRandomQuestion.join('');
   for (let option = 0; option < optionButtons.length; option++) {
      optionButtons[option].textContent = shuffleOptions[option];
   }

   // Countdown
   const start = setInterval(() => {
      timer.innerHTML = seconds--;

      if (seconds < 0) {
         clearInterval(start);
         timeupScreen.classList.add('screen--visible');
         correctScreen.classList.remove('screen--visible');
         wrongScreen.classList.remove('screen--visible');
      }
   }, 1000);

   // Listen response for user answer
   Array.from(optionButtons).forEach((option) => {
      option.addEventListener('click', () => {
         let userAnswer = option.textContent;
         let correctAnswer = element[rand].answer;
         let answerInfo = element[rand].info;

         clearInterval(start);
         checkAnswer(userAnswer, correctAnswer, answerInfo)
      });
   });

   // Back to screen Category
   backScreenCategory.addEventListener("click", () => {
      clearInterval(start);
      quizScreen.classList.remove("screen--visible");
   });

   // Remove popup when clicking next
   Array.from(popupNextButtons).forEach((btns) => {
      btns.addEventListener('click', () => {
         quizScreen.classList.remove("screen--visible");
         correctScreen.classList.remove('screen--visible');
         wrongScreen.classList.remove('screen--visible');
         timeupScreen.classList.remove('screen--visible');
      });
   });
};

function checkAnswer(user, key, info) {
   if (user === key) {
      compoundInfo.innerHTML = info;
      correctScreen.classList.add('screen--visible');
      wrongScreen.classList.remove('screen--visible');
   }

   if (user != key) {
      wrongScreen.classList.add('screen--visible');
      correctScreen.classList.remove('screen--visible');
   }
}