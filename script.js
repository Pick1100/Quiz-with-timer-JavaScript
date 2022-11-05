// TODO 
// start game function is hidden on click, need to make questions appear in the form of buttons. This can be done ith a for loop and .rand, i =  index array number 
// using headers (h2) assign values to the different questions to appear on the screen. To randomize and loop, for loop for the questions. With JS create buttons and create for each. Use the index.array  for each answer. ENsure you have the correct RealAnswer
// Append the html for the divs and java script. Next, using an event listener to figure out the answer selected. Next will check answers function to get the text value of the button the user selects and compares to the array. This can be done iwh if conditions. You can then get a prompt for correct or incorrect, subtract time from the timer on click
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
// Start screen (overlay)
// answers.addEventListener('click')var answers = document.getElementById("answers")
var timer = document.getElementById("timer")
var start = document.getElementById("start")    
var timeRemaining = 60
var timerID;
var questions = [
    //   Question:Value Repeat line 8-14 ensure you have commas for i=0 .rand # of items in array
    {
    'question': 'Which can the DOM NOT do?', 
    'answers': ['Change content of the HTML','Add and Delete HTML Elements','Modify Elements in the HTML', 'Allow a user to access a webpage via a browser extension'],
    'correctAnswer': 'Allow a user to access a webpage via a browser extension',
    },
    {
    'question' :'Most Common was to declare variables that do not have value changes', 
    'answers': ['let','var','const', 'var =[]'],
    'correctAnswer': 'const',
    },    
    {
    'question' :'What is the purpose of a loop', 
    'answers': ['To repeat tasks based on conditions','to iterate using the i =','To allow for greater usage of math and variables', 'To make the developer struggle to understand JavaScript'],
    'correctAnswer': 'To repeat tasks based on conditions',
    },
    {
    'question' :'Where is the best place to link your script to .js?', 
    'answers': ['At the top before the HTML tag','At the bottom of your HTML','Inside your first <div>', 'Under your .css link'],
    'correctAnswer': 'At the bottom of your HTML',
    },  
    {
    'question': 'Where can you find the answers to most questions?', 
    'answers': ['In the forums of Facebook','Bing','Through the BootStrap Library', 'The software documentation or Google'],
    'correctAnswer': 'The software documentation or Google',
    },  
    
];
timerID = setInterval(time, 1000)

// Timer with decreasing time for wrong answers
function time(){
    timeRemaining = timeRemaining - 1;
     timer.textContent = timeRemaining;
     if (timer.value == 0) {
        timer.textCOntent = 0;
        return;
    }

}
function startGame(){
 start.addEventListener('click', function(){
alert("Alert")
start.classList.add('hide')

})
}

startGame()





