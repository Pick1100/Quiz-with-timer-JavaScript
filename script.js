// TODO 
// modify the index var to determine if the last question has been reached, and the length.
// At end of game, another function for an array for initials and value of the seconds left, using local storage- push. On the high scores page, use loops for local storage to order the scores highest to lowest. On submit on initials, push
// Model- How you store your data, structure- array, obj, array.object
// Randomizes for questions (A-D)
// Display Question after Next click
// Display Answers (A-D)
// Select correct answer media query (on click correct answer A-D)
// Ending screen 
// High score list
// Try again menu
// On going score
// answers.addEventListener('click')var answers = document.getElementById("answers")
var timerEl = document.getElementById("timer")
var startEl = document.getElementById("start")
var questionEl = document.getElementById("question")
var answersEl = document.getElementById("answers")
var highScore = document.getElementById("timer")

var timeRemaining = 60
var timerID;
var currentQuestionIndex = 0;

var questions = [
    //   Question:Value Repeat line 8-14 ensure you have commas for i=0 .rand # of items in array
    {
        question: 'Which can the DOM NOT do?',
        answers: ['Change content of the HTML', 'Add and Delete HTML Elements', 'Modify Elements in the HTML', 'Allow a user to access a webpage via a browser extension'],
        correctAnswer: 3,
    },
    {
        question: 'Most Common was to declare variables that do not have value changes',
        answers: ['let', 'var', 'const', 'var = []'],
        correctAnswer: 2,
    },
    {
        question: 'What is the purpose of a loop',
        answers: ['To repeat tasks based on conditions', 'to iterate using the i =', 'To allow for greater usage of math and variables', 'To make the developer struggle to understand JavaScript'],
        correctAnswer: 0,
    },
    {
        question: 'Where is the best place to link your script to .js?',
        answers: ['At the top before the HTML tag', 'At the bottom of your HTML', 'Inside your first <div>', 'Under your .css link'],
        correctAnswer: 0,
    },
    {
        question: 'Where can you find the answers to most questions?',
        answers: ['In the forums of Facebook', 'Bing', 'Through the BootStrap Library', 'The software documentation or Google'],
        correctAnswer: 3,
    },

];

// Timer with decreasing time for wrong answers
function time() {
    timeRemaining = timeRemaining - 1;
    timerEl.textContent = timeRemaining;
    if (timeRemaining <= 0) {
        clearInterval(timerID);
        timerEl.textContent = 0;
        return;
    }

}

function displayQuestion() {
    var q = questions[currentQuestionIndex];
    questionEl.textContent = q.question;
    answersEl.innerHTML = '';
    for (var i = 0; i < q.answers.length; i++) {
        var choice = q.answers[i];
        var btnEl = document.createElement('button');
        btnEl.textContent = choice;
        btnEl.dataset.index = i;
        btnEl.addEventListener("click", function () {
            if (btnEl.dataset.index == q.correctAnswer) {

                console.log("Correct Answer")

            } else {
                timeRemaining = timeRemaining - 10;
                alert("Wrong Answer")
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                clearInterval(timerID);
                outerBox.classList.add('hide');
                highScore();

                //TODO: End the game and go to initials/high score and try again screen
            }
        });
        answersEl.appendChild(btnEl);
    }

}

function highScore() {
    var nameEl = prompt("What is your name?"); 
    var highScore = timeRemaining
    if (localStorage.HighScore > timeRemaining) {
        localStorage.setItem(highScore);
        localStorage.setItem(nameEl);
        confirm.log(localStorage.highScore, nameEl);
    } else {
        localStorage.getItem(highScore);
        localStorage.getItem(nameEl);
        confirm.log(localStorage.highScore, nameEl);
    }
}

    startEl.addEventListener('click', function () {
        startEl.classList.add('hide');
        timerID = setInterval(time, 1000);
        displayQuestion();

    })




