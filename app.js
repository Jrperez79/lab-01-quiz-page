// import functions and grab DOM elements

//Reference needed DOM elements
const quizButton = document.getElementById('quiz-button');
const result = document.getElementById('quiz-result'); 

// initialize state

// set event listeners to update state and DOM
function startQuiz() {
    let correctAnswer = 0;
    let name = '';

    alert('Hi Everyone! Wanna take a quiz?');

    const confirmed = confirm('You sure you want to take the quiz');
    if (confirmed === false) {
        return;
    }

    const emptyString = '';

    const firstName = prompt('What is your first name?');
    name += firstName;

    const lastName = prompt('What is your last name?');
    name += lastName;

    const isWillieFromTexas = prompt('Is Willie from Texas (yes/no)?');
    if (isWillieFromTexas === true) {
        correctAnswer++;
    }

    const isWillieOneOfTheGreats = prompt('Is Willie one of the greats of all time (yes/no)?')
    if (isWillieOneOfTheGreats === true) {
        correctAnswer++;
    }

    let response = 'Your name is ' + name;

    if (correctAnswer >= 1) {
        response += ' and you are a true Willie fan!';
    } else {
        response += ' you need to turn on some Willie and be enlightened!';
    }

    result.textContent = response;
}

quizButton.addEventListener('click', startQuiz);