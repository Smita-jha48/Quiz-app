// MAJOR ASSIGNMENT JAVASCRIPT - QUIZ APP
//  - Using the Dynamic rendering.
//  - Session Storage use for storing the name.

// Initialising the DOM Elements using the query Selector properties and defining the global variables.
const questionText = document.querySelector(".question-text");
const optionBox = document.querySelector(".option-box");
const currentQuestionNum = document.querySelector(".current-question-num");
const answerDescription = document.querySelector(".answer-description");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const correctAnswers = document.querySelector(".correct-answers");
const seeResultBtn = document.querySelector(".see-result-btn");
const remainingTime = document.querySelector(".remaining-time");
const timeUpText = document.querySelector(".time-up-text");
const takenTime = document.querySelector(".taken-time");
const quizBox = document.querySelector(".quiz-box");
const quizOverBox = document.querySelector(".quiz-over-box");
const quizHomeBox = document.querySelector(".quiz-home-box");
const startAgainQuizBtn = document.querySelector(".start-again-quiz-btn");
const goHomeBtn = document.querySelector(".go-home-btn");
const categoryBox = document.querySelector(".category-box");
const categoryText = document.querySelector(".category-text");
const sessionUser = document.querySelector("#username");
const username = "";
sessionUser.addEventListener("change", function (e) {
  username = e.target.value;
});
let attempt = 0;
let questionIndex = 0;
let number = 0;
let score = 0;
let myArray = [];
let interval;
let categoryIndex;
var timeLimitGlobal;
globalThis.timeLimitGlobal = 300;

// myApp - Array of objects that contains the four different objects each containing the respected category  Questions, Options to the
// answer and the Answer
myApp = [
  {
    category: "Pipes and Cisterns",
    quizWrap: [
      {
        question:
          "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
        options: [
          "10 min. 20 sec.",
          "11 min. 45 sec.",
          "11 min. 45 sec.",
          "14 min. 40 sec.",
        ],
        answer: 3,
      },
      {
        question:
          "A tap can fill a tank in 6 hours. After half the tank is filled, three more similar taps are opened. What is the total time taken to fill the tank completely?",
        options: [
          "3 hrs 15 min",
          "3 hrs 45 min",
          "4 hrs 15 min",
          "4 hrs 1 min",
        ],
        answer: 1,
      },
      {
        question:
          "A pump can fill a tank with water in 2 hours. Because of a leak, it took 2(1/3) hours to fill the tank. The leak can drain all the water of the tank in:",
        options: ["7 hours", "8 hours", "12 hours", "14 hours"],
        answer: 3,
      },
      {
        question:
          "A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in ?",
        options: ["20 hrs", "28 hrs", "36 hrs", "40 hrs"],
        answer: 0,
      },
      {
        question:
          "Three taps A,B and C can fill a tank in 12,15 and 20 hours respectively. If A is open all the time and B ,C are open for one hour each alternatively, the tank will be full in:",
        options: ["6 hrs", "20/3 hrs", "7 hrs", "15/2 hrs"],
        answer: 2,
      },
      {
        question:
          "12 buckets of water fill a tank when the capacity of each tank is 13.5 liters. How many buckets will be needed to fill the same tank,if the capacity of each bucket is 9 liters?",
        options: ["8", "15", "16", "18"],
        answer: 3,
      },
      {
        question:
          "One pipe can fill a tank  three times as fast as another pipe. If together the two pipes can fill the tank in 36 min, then the slower alone will be able to fill the tank in:",
        options: ["81 min", "108 min", "144 min", "192 min"],
        answer: 2,
      },
      {
        question:
          "Water flows into a tank which is 200 m long and 150 m wide, through a pipe of cross-section (0.3m x 0.2m) at 20 km/h. In what time will the water level be 12m ?",
        options: ["200 hrs", "240 hrs", "300 hrs", "270 hrs"],
        answer: 2,
      },
      {
        question:
          "A cistern has a leak which would empty the cistern in 20 minutes. A tap is turned on which admits 4 liters a minute into the cistern, and it is emptied in 24 minutes. How many liters does the cistern hold ?",
        options: ["360 lit", "480 lit", " 320 lit", "460 lit"],
        answer: 1,
      },
      {
        question:
          "Two pipes A and B can fill a tank in 15 min and 20 min respectively. Both the pipes are opened together but after 4 min, pipe A is turned off. What is the total time required to fill the tank ?",
        options: [
          "15 min 20 sec.",
          "16 min 40 sec.",
          "13 min 10 sec.",
          "14 min 40 sec.",
        ],
        answer: 3,
      },
    ],
  },
  {
    category: "Probability",
    quizWrap: [
      {
        question:
          "A problem is given to three students whose chances of solving it are 1/2, 1/3 and 1/4 respectively. What is the probability that the problem will be solved?",
        options: ["1/4", "1/2", "3/4", "7/12"],
        answer: 2,
      },
      {
        question:
          "A bag contains 6 white and 4 black balls .2 balls are drawn at random. Find the probability that they are of same colour.",
        options: ["1/2", "7/15", "8/15", "1/8"],
        answer: 1,
      },
      {
        question:
          "Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?",
        options: ["1/2", "3/5", "9/20", "8/15"],
        answer: 2,
      },
      {
        question:
          "Two cards are drawn at random from a pack of 52 cards.what is the probability that either both are black or both are queen?",
        options: ["52/221", "55/190", "55/221", "19/221"],
        answer: 2,
      },
      {
        question:
          "A bag contains 4 white, 5 red and 6 blue balls. Three balls are drawn at random from the bag. The probability that all of them are red, is:",
        options: [" 2/91", " 1/22", " 3/22", " 2/77"],
        answer: 0,
      },
      {
        question:
          "In a lottery, there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize?",
        options: ["2/7", "5/7", "1/5", "1/2"],
        answer: 0,
      },
      {
        question:
          "Two dice are tossed. The probability that the total score is a prime number is:",
        options: ["5/12", "1/6", "1/2", "7/9"],
        answer: 0,
      },
      {
        question:
          "Three unbiased coins are tossed.What is the probability of getting at least 2 heads?",
        options: ["1/4", " 1/2", "3/4", "1/3"],
        answer: 1,
      },
      {
        question:
          "In a class, there are 15 boys and 10 girls. Three students are selected at random. The probability that 1 girl and 2 boys are selected, is:",
        options: ["21/46", "1/5", "3/25", "1/50"],
        answer: 0,
      },
      {
        question:
          "What is the probability of getting 53 Mondays in a leap year?",
        options: ["1/7", "3/7", "2/7", "1"],
        answer: 2,
      },
    ],
  },
  {
    category: "Problem on Ages",
    quizWrap: [
      {
        question:
          "A father said his son , 'I was as old as you are at present at the time of your birth.' If the father age is 38 now, the son age 5 years back was :",
        options: ["14", "19", "22", "28"],
        answer: 0,
      },
      {
        question:
          "In 10 years, A will be twice as old as B was 10 years ago. If A is now 9 years older than B, the present age of B is :",
        options: ["19", "29", "39", "49"],
        answer: 2,
      },
      {
        question:
          "The total age of A and B is 12 years more than the total age of B and C. C is how many years younger than A ?",
        options: ["12", "13", "14", "15"],
        answer: 0,
      },
      {
        question:
          "The ratio of the present ages of P and Q is 3 : 4. Five years ago, the ratio of their ages was 5 : 7. Find their present ages.",
        options: ["18:24", "24:32", "15:20", "30:40"],
        answer: 3,
      },
      {
        question:
          "'I am five times as old as you were, when I was as old as you are', said a man to his son. Find out their present ages, if the sum of their ages is 64 years ?",
        options: [
          "Father = 50; Son =14",
          "Father = 40; Son =24",
          "Father = 60; Son =14",
          "Father = 48; Son =16",
        ],
        answer: 1,
      },
      {
        question:
          "The ratio of the ages of Maala and Kala is 4 : 3. The total of their ages is 2.8 decades. The proportion of their ages after 0.8 decades will be [1 Decade = 10 years]",
        options: ["4:3", "7:5", "12:11", "6:5"],
        answer: 3,
      },
      {
        question:
          "Sachin is younger than Rahul by 7 years. If the ratio of their ages is 7:9, find the age of Sachin",
        options: ["24.5", "25.5", "26.5", "27.5"],
        answer: 0,
      },
      {
        question:
          "A person's present age is two-fifth of the age of his mother. After 8 years, he will be one-half of the age of his mother. How old is the mother at present ?",
        options: ["36 yrs", "38 yrs", "40 yrs", "42 yrs"],
        answer: 2,
      },
      {
        question:
          "Rajeev's age after 15 years will be 5 times his age 5 years back. What is the present age of rajeev?",
        options: ["12", "14", "22", "10"],
        answer: 3,
      },
      {
        question:
          "A man’s current age is 2/5 of the age of his father. After 8 years, he will be 1/2 of the age of his father. What is the age of father at now ?",
        options: ["50", "40", "33", "30"],
        answer: 1,
      },
    ],
  },
  {
    category: "Profit and Loss",
    quizWrap: [
      {
        question:
          "If selling price is doubled, the profit triples. Find the profit percent ?",
        options: ["200%", "100%", "300%", "400%"],
        answer: 1,
      },
      {
        question:
          "A shopkeeper cheats to the extent of 10% while buying and selling, by using false weights. His total gain is.",
        options: ["20%", "21%", "22%", "23%"],
        answer: 1,
      },
      {
        question:
          "By selling 45 lemons for Rs 40, a man loses 20%. How many should he sell for Rs 24 to gain 20% in the transaction ?",
        options: ["16", "18", "20", "22"],
        answer: 1,
      },
      {
        question:
          "If the cost price of 12 pens is equal to the selling price of 8 pens, the gain percent is ?",
        options: ["50%", "20%", "30%", "10%"],
        answer: 0,
      },
      {
        question:
          "A milkman purchases the milk at Rs. x per litre and sells it at Rs. 2x per litre still he mixes 2 litres water with every 6 litres of pure milk. What is the profit percentage?",
        options: ["116%", "166.66%", "60%", "100%"],
        answer: 1,
      },
      {
        question:
          "Tarun got 30% concession on the labelled price of an article and sold it for Rs. 8750 with 25% profit on the price he bought. What was the labelled price ?",
        options: ["10000", "12000", "13000", "14000"],
        answer: 0,
      },
      {
        question:
          "Due to reduction of 25% in price of oranges a customer can purchase 4 oranges more for Rs. 16. what is original price of an orange?",
        options: ["Rs. 1", "Rs. 1.33", "Rs. 1.5", "Rs. 1.6"],
        answer: 1,
      },
      {
        question:
          "A person incurs a loss of 5% be selling a watch for Rs. 1140. At what price should the watch be sold to earn 5% profit.",
        options: ["Rs.1200", "Rs.1230", "Rs.1260", "Rs.1290"],
        answer: 2,
      },
      {
        question:
          "In a scheme, a pack of three soaps with MRP Rs.45 is available for Rs.42. If it still gives a profit of 5% to the shopkeeper, then the cost price of the pack is ?",
        options: ["38", "39", "40", "42"],
        answer: 2,
      },
      {
        question:
          "The sale price of an article including the sales tax is Rs. 616. The rate of sales tax is 10%. If the shopkeeper has made a profit of 12%, then the cost price of the article is :",
        options: ["Rs.560", "Rs.530", "Rs.500", "Rs.514"],
        answer: 2,
      },
    ],
  },
];

// Function to render the list of categories in the Quiz app.
function createCategory() {
  for (let i = 0; i < myApp.length; i++) {
    const categoryList = document.createElement("div");
    categoryList.innerHTML = myApp[i].category;
    categoryList.setAttribute("data-id", i);
    categoryList.setAttribute("onclick", "selectedCategory(this)");
    categoryBox.appendChild(categoryList);
  }
}

// Function to select the clicked category to continue the quiz with the same category.
function selectedCategory(ele) {
  categoryIndex = ele.getAttribute("data-id");
  categoryText.innerHTML = myApp[categoryIndex].category;
  quizHomeBox.classList.remove("show");
  quizBox.classList.add("show");
  startTimer();
  nextQuestion();
}

function load() {
  number++;
  questionText.innerHTML =
    myApp[categoryIndex].quizWrap[questionIndex].question;
  createOptions();
  scoreBoard();
  currentQuestionNum.innerHTML =
    number + "/" + myApp[categoryIndex].quizWrap.length;
}

// Function to create the options.
function createOptions() {
  optionBox.innerHTML = "";
  let animationDelay = 0.2;
  for (
    let i = 0;
    i < myApp[categoryIndex].quizWrap[questionIndex].options.length;
    i++
  ) {
    const option = document.createElement("div");
    option.innerHTML = myApp[categoryIndex].quizWrap[questionIndex].options[i];
    option.classList.add("option");
    option.id = i;
    option.style.animationDelay = animationDelay + "s";
    animationDelay = animationDelay + 0.2;
    option.setAttribute("onclick", "check(this)");
    optionBox.appendChild(option);
  }
}
// Function to check whether the clicked option is correct or not.
function check(ele) {
  const id = ele.id;
  if (id == myApp[categoryIndex].quizWrap[questionIndex].answer) {
    ele.classList.add("correct");
    score++;
    scoreBoard();
  } else {
    ele.classList.add("wrong");
    for (let i = 0; i < optionBox.children.length; i++) {
      if (
        optionBox.children[i].id ==
        myApp[categoryIndex].quizWrap[questionIndex].answer
      ) {
        optionBox.children[i].classList.add("show-correct");
      }
    }
  }
  attempt++;
  disableOptions();
  showAnswerDescription();
  showNextQuestionBtn();
  if (number == myApp[categoryIndex].quizWrap.length) {
    quizOver();
  }
}

// Function to select the random question from the selected category.
function generateRandomQuestion() {
  const randomNumber = Math.floor(
    Math.random() * myApp[categoryIndex].quizWrap.length
  );
  let hitDuplicate = 0;
  if (myArray.length == 0) {
    questionIndex = randomNumber;
  } else {
    for (let i = 0; i < myArray.length; i++) {
      if (randomNumber == myArray[i]) {
        hitDuplicate = 1;
      }
    }
    if (hitDuplicate == 1) {
      generateRandomQuestion();
      return;
    } else {
      questionIndex = randomNumber;
    }
  }
  myArray.push(randomNumber);
  console.log(myArray);
  load();
}

// Function to render the "Time is up" when the given time i.e., 300s gets over.
function timeIsUp() {
  showTimeUpText();
  for (let i = 0; i < optionBox.children.length; i++) {
    if (
      optionBox.children[i].id ==
      myApp[categoryIndex].quizWrap[questionIndex].answer
    ) {
      optionBox.children[i].classList.add("show-correct");
    }
  }
  seeResultBtn.classList.add("show");
  quizResult();
  disableOptions();
  showAnswerDescription();
}

// Function to control the timer part
var value;
function startTimer() {
  let timeLimit = timeLimitGlobal;
  remainingTime.innerHTML = timeLimit;
  remainingTime.classList.remove("less-time");
  interval = setInterval(() => {
    timeLimit = timeLimit - 1;
    if (timeLimit < 100) {
      timeLimit = "0" + timeLimit;
    }
    if (timeLimit < 30) {
      remainingTime.classList.add("less-time");
    }
    remainingTime.innerHTML = timeLimit;
    if (timeLimit == 0) {
      timeLimit = 0;
      clearInterval(interval);
      timeIsUp();
    }
    if (timeLimit == NaN) {
      timeLimit = 0;
    }
    value = timeLimit;
  }, 1000);
  // timeLimitGlobal = timeLimit;
  // value = timeLimit;
  // console.log(timeLimit);
  // console.log(timeLimitGlobal);
}

// function to stop the timer.
function stopTimer() {
  clearInterval(interval);
}

// function to disable the options.
function disableOptions() {
  for (let i = 0; i < optionBox.children.length; i++) {
    optionBox.children[i].classList.add("already-answered");
  }
}

// Function to show the answer description
function showAnswerDescription() {
  if (
    typeof myApp[categoryIndex].quizWrap[questionIndex].description !==
    "undefined"
  ) {
    answerDescription.classList.add("show");
    answerDescription.innerHTML =
      myApp[categoryIndex].quizWrap[questionIndex].description;
  }
}

// Event-Listener to get the name of the user
document.querySelector(".user-btn").addEventListener("click", function () {
  if (sessionUser.value == "") {
    alert("Please Enter Your name to continue");
    return;
  }
  window.sessionStorage.setItem("username", sessionUser.value);
  sessionUser.value = "";
});

// Function to hide the answer description.
function hideAnswerDescription() {
  answerDescription.classList.remove("show");
  answerDescription.innerHTML = "";
}

// Function to render the next Question.
function showNextQuestionBtn() {
  nextQuestionBtn.classList.add("show");
}

// Function to hide the next question.
function hideNextQuestionBtn() {
  nextQuestionBtn.classList.remove("show");
}
// Dynamic class redering function  to show the Time is Up text.
function showTimeUpText() {
  timeUpText.classList.add("show");
}
// Dynamic class redering function  to remove the Time is Up text.
function hideTimeUpText() {
  timeUpText.classList.remove("show");
}
// Function to show the score board.
function scoreBoard() {
  correctAnswers.innerHTML = score;
}
/////////////////////////////
/// Function to Render the Next Question.
nextQuestionBtn.addEventListener("click", nextQuestion);
function nextQuestion() {
  generateRandomQuestion();
  hideNextQuestionBtn();
  hideAnswerDescription();
  hideTimeUpText();
}

/////////////////////////////////////////////////////

// Function to reset the quiz.
function resetQuiz() {
  attempt = 0;
  //questionIndex=0;
  score = 0;
  number = 0;
  myArray = [];
}

// Function to close the quiz and redirect them to the score component.
function quizOver() {
  nextQuestionBtn.classList.remove("show");
  seeResultBtn.classList.add("show");
}

// Function to display the result values inside the score board.
function quizResult() {
  // console.log(300 - timeLimitGlobal);
  let calcTime = timeLimitGlobal - value;
  document.querySelector(".username-value").innerHTML =
    sessionStorage.getItem("username");
    takenTime.innerHTML = calcTime;
  document.querySelector(".total-questions").innerHTML =
    myApp[categoryIndex].quizWrap.length;
  document.querySelector(".total-attempt").innerHTML = attempt;
  document.querySelector(".total-correct").innerHTML = score;
  document.querySelector(".total-wrong").innerHTML = attempt - score;
  const percentage = (score / myApp[categoryIndex].quizWrap.length) * 100;
  document.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
}

// Event listener to see the result on the single click.
seeResultBtn.addEventListener("click", () => {
  quizBox.classList.remove("show");
  seeResultBtn.classList.remove("show");
  quizOverBox.classList.add("show");
  quizResult();
});

// Event listener to start the quiz again.
startAgainQuizBtn.addEventListener("click", () => {
  quizBox.classList.add("show");
  quizOverBox.classList.remove("show");
  resetQuiz();
  nextQuestion();
  startTimer();
});

// Event listener for returning to the home page.
goHomeBtn.addEventListener("click", () => {
  quizOverBox.classList.remove("show");
  quizHomeBox.classList.add("show");
  resetQuiz();
});

// Event listener of for loading the category on the document load.
window.onload = () => {
  createCategory();
};
