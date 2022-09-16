const timerEl = document.getElementById("time");
const startButton = document.getElementById("start-quiz");
const startContainer = document.getElementById("start-container");
const questionContainer = document.getElementById("question-container");
const questTitleEl = document.getElementById("qTitle");
const questChoicesEl = document.getElementById("choices");
const endContainer = document.getElementById("end-container");
const userScore = document.getElementById("user-score");
const initialsSubmit = document.getElementById("initials-submit");

// create an array of question objects
var questions = [
  {
    title:
      "What method do you use to add text to an html element using javascript?",
    choices: [
      "createElement",
      "textContent",
      "elementContent",
      "querySelector",
    ],
    answer: "textContent",
  },
  {
    title: "What does CSS stand for?",
    choices: [
      "Creative Style Starter",
      "Cascading Syntax Sheet",
      "Creative Syntax Sheet",
      "Cascading Style Sheet",
    ],
    answer: "Cascading Style Sheet",
  },
  {
    title: "JavaScript is a _____-side programming language.",
    choices: [
      "Server",
      "Client",
      "Both client and server",
      "Neither client nor server",
    ],
    answer: "Both client and server",
  },
  {
    title:
      "Which of the following will write the message Hello World in an alert Box?",
    choices: [
      "alert(Hello World);",
      "alert('Hello World');",
      "alertBox('Hello World');",
      "alertUser(Hello World);",
    ],
    answer: "alert('Hello World');",
  },
  {
    title:
      "What will be the output of the following code: console.log(3 > 2 >1);?",
    choices: ["true", "false", "invalid", ">0"],
    answer: "false",
  },
  {
    title: "A JavaScript file has an extension of...",
    choices: [".java", ".javascript", ".script", ".js"],
    answer: ".js",
  },
  {
    title:
      "Which statement can not be used to declare a variable in JavaScript?",
    choices: ["let", "var", "const", "init"],
    answer: "init",
  },
  {
    title:
      "If you declare a variable 'const food = banana', then later reassign stating 'food = popcorn', what will happen?",
    choices: [
      "food will equal banana",
      "food will equal popcorn",
      "food will be undefined",
      "JavaScript will raise an error",
    ],
    answer: "JavaScript will raise an error",
  },
  {
    title: "For strict equality comparisons you should use ...",
    choices: ["=", "==", "== || = ", "==="],
    answer: "===",
  },
  {
    title:
      "What is the correct syntax to use an external script called 'new.js'?",
    choices: [
      "<script name='new.js.'>",
      "<script type='new.js'>",
      "<script href='new.js'>",
      "<script src='new.js'>",
    ],
    answer: "<script src='new.js'>",
  },
];

// set question index-
var qIndex = 0;

// declare timer interval
var timerInterval;

// set variable for time allowed in quiz
var time = 60;

// Global Variables
var choicesEl = document.querySelector(".choices");

// start timer
// hide start quiz title
// show question container
// call the next function which will populate question one

// start quiz function
const startQuiz = () => {
  startContainer.style.display = "none";
  questionContainer.style.display = "block";
  timerEl.textContent = time;
  timerInterval = setInterval(countdown, 1000);
  nextQuestion();
};

const countdown = () => {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
};

// populate questions
function nextQuestion() {
  // use array and qIndex to populate the quiz

  // Populate the title
  questTitleEl.textContent = questions[qIndex].title;

  // clear buttons
  questChoicesEl.innerHTML = "";
  // Populate choices
  questions[qIndex].choices.forEach(function (choice) {
    // Create the Element
    var btn = document.createElement("button");
    // Give it content
    btn.textContent = choice;
    // Optional - set attributes
    btn.setAttribute("class", "choiceBtn");
    // Append to the page
    questChoicesEl.append(btn);

    ////// Create Event lister to check for write or wrong answer
    btn.addEventListener("click", checkAnswer);
  });
}
// check if user answered correctly
function checkAnswer() {
  // use this!
  console.log(this.innerText, questions[qIndex].answer);

  if (this.innerText === questions[qIndex].answer) {
    console.log("correct");
  }
  // if wrong
  else {
    console.log("wrong");
    //deduct time
    time -= 5;
  }

  // Move to next question
  qIndex++;

  // call nextQuestion();
  if (qIndex < questions.length) {
    nextQuestion();
  } else {
    endQuiz();
  }
  //if no questions left end quiz
}

function endQuiz() {
  console.log("You're done!");
  // stop the timer
  clearInterval(timerInterval);
  // display the final score (can be time)
  userScore.innerText = time;

  //show the end quiz container
  endContainer.style.display = "block";

  // hide the question container and timer
  questionContainer.style.display = "none";
  timerEl.style.display = "none";
}

// Click listener for submit button to save score to local storage
initialsSubmit.addEventListener("click", () => {
  // returns [["abc", 11]]
  const userInitials = document.getElementById("initials").value;
  let savedScores = JSON.parse(localStorage.getItem("saved scores"));
  if (!savedScores) savedScores = [];
  savedScores.push([userInitials, time]);
  savedScores.sort((a, b) => {
    if (a[1] < b[1]) {
      return 1;
    }
    if (a[1] > b[1]) {
      return -1;
    }
    return 0;
  });
  savedScores.splice(5);
  console.log(userInitials, savedScores);
  localStorage.setItem("saved scores", JSON.stringify(savedScores));
});

// event listener listening to the start button
startButton.addEventListener("click", startQuiz);
