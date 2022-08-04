// create an array of question objects
var questions = [
    {
        title: 'What method do you use to add text to an html element using javascript?',
        choices: ['createElement', 'textContent', 'elementContent', 'querySelector'],
        answer: 'textContent'
    },
    {
        title: 'What does CSS stand for?',
        choices: ['Creative Style Starter', 'Cascading Syntax Sheet', 'Creative Syntax Sheet', 'Cascading Style Sheet'],
        answer: 'Cascading Style Sheet'
    }
]

// set question index- 
var qIndex = 0;

// declare timer interval

// set variable for time allowed in quiz
var time = 60;
// Global Variables
var choicesEl = document.querySelector('.choices');

// event listener listening to the start button
    // start function-
        // start timer
        // hide start quiz title
        // show question container
        // call the next function which will populate question one
    
// populate questions
function nextQuestion(){
    // use array and qIndex to populate the quiz

    // Populate the title

    // Populate choices
    questions[qIndex].choices.forEach(function(choice){
        // Create the Element
        var btn = document.createElement('button')
        // Give it content
        btn.textContent = choice;
        // Optional - set attributes
        btn.setAttribute('class', 'choiceBtn')
        // Append to the page
        choicesEl.append(btn);
        
        ////// Create Event lister to check for write or wrong answer
        btn.addEventListener('click', checkAnswer);
    })
}
// check if user answered correctly
function checkAnswer() {
    // use this!
    console.log(this.innerText)

    // if correct
    if (this.innerText === questions[qIndex].answer) {

    }
    // if wrong
    else {

        //deduct time
        time -= 5;
        // readd time to the page using textContent
        //check to make sure time doesn't go below 0;
    }

    // Move to next question
    qIndex++

    // See what next course should be?

    // Check to see if you have questions left? - compare qIndex to questions.length

    // If questions left - move to next question
        // call nextQuestion();
    //if no questions left end quiz
}

function endQuiz(){
    // stop the timer
    // display the final score (can be time)
    // hide the question container
    //show the quiz over container
}

// Click listener for submit button to save score to local storage


