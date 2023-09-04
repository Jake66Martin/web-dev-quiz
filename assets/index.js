// All functions have the same functionality, therefore comments will only be added to the first
// in order to demonstrate how they work

var start = document.querySelector("#startButton");

var startBtn = document.querySelector(".start-button");

var seconds = document.querySelector("#secondsLeft");

var quiz = document.querySelector(".quiz");

var questionBtn = document.querySelector(".questionButtons");

var answerStatus = document.querySelector(".answerData");

var highScoreList = document.querySelector(".highScoreItems")

var finalScore = 0;

var secondsLeft = 75;


// This function serves to start the timer for the quiz
function timer() {

    timerInterval = setInterval(function () {
        secondsLeft--;
        seconds.textContent = "Time: " + secondsLeft;


        // If the timer hits zero, the interval will stop notifying the user that they have ran out of time       
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            quiz.innerHTML = "<h1>You have ran out of time.</h1>";
            questionBtn.innerHTML = "";
            answerStatus.innerHTML = "";
        }

    }, 1000);

}


//This function starts the game by dynamically changing the content of the div with class quiz to said question and the answer buttons
function startGame() {

    quiz.innerHTML = "<h1>Choose the tag that corresponds with <br> the definition of an empty tag?</h1>";
    startBtn.innerHTML = "";


    // These variables create and append the quiz buttons
    var button = document.createElement("button");
    button.textContent = "The p tag";
    questionBtn.appendChild(button);
    button.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button2 = document.createElement("button");
    button2.textContent = "The nav tag";
    questionBtn.appendChild(button2);
    button2.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button3 = document.createElement("button");
    button3.textContent = "The img tag";
    questionBtn.appendChild(button3);
    button3.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button4 = document.createElement("button");
    button4.textContent = "The h1 tag";
    questionBtn.appendChild(button4);
    button4.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    //This for loop checks for the button with the index allocated to the right answer in order to initiate a click event with a conditional
    //Both conditionals trigger the next question/set of buttons, while a wrong answer will deduct ten seconds and the right answer will add 20 points
    // A wrong answer will send a wrong answer message while the right answer will send a right answer message
    var idx = 2;
    var btns = document.querySelectorAll("button");
    for (let i = 0; i < btns.length; i++)
        btns[i].addEventListener('click', e => {
            if (i === idx) {
                answerStatus.setAttribute("style", "color: green");
                answerStatus.textContent = "Right answer!";
                finalScore += 20;
                nextQuestion();
                return;
            } else {
                answerStatus.setAttribute("style", "color: red");
                answerStatus.textContent = "Wrong answer!";
                secondsLeft -= 10;
                nextQuestion();
                return;
            }
        });


}


//The function for the next set of questions
function nextQuestion() {

    quiz.innerHTML = "<h1>What does h stand for in h1?</h1>";
    questionBtn.innerHTML = "";

    var button = document.createElement("button");
    button.textContent = "Header";
    questionBtn.appendChild(button);
    button.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button2 = document.createElement("button");
    button2.textContent = "Heading";
    questionBtn.appendChild(button2);
    button2.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button3 = document.createElement("button");
    button3.textContent = "Home";
    questionBtn.appendChild(button3);
    button3.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button4 = document.createElement("button");
    button4.textContent = "Horizontal";
    questionBtn.appendChild(button4);
    button4.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    //The same functionality as the first for loop
    var idx = 1;
    var btns = document.querySelectorAll("button");
    for (let i = 0; i < btns.length; i++)
        btns[i].addEventListener('click', e => {
            if (i === idx) {
                answerStatus.setAttribute("style", "color: green");
                answerStatus.textContent = "Right answer!";
                finalScore += 20;
                nextQuestion1();
                return;
            } else {
                answerStatus.setAttribute("style", "color: red");
                answerStatus.textContent = "Wrong answer!";
                secondsLeft -= 10;
                nextQuestion1();
                return;
            }
        });

}


function nextQuestion1() {

    quiz.innerHTML = "<h1>Which brackets do CSS declarations use?</h1>";
    questionBtn.innerHTML = "";

    var button = document.createElement("button");
    button.textContent = "{ }";
    questionBtn.appendChild(button);
    button.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button2 = document.createElement("button");
    button2.textContent = "( )";
    questionBtn.appendChild(button2);
    button2.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button3 = document.createElement("button");
    button3.textContent = "[ ]";
    questionBtn.appendChild(button3);
    button3.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button4 = document.createElement("button");
    button4.textContent = "< >";
    questionBtn.appendChild(button4);
    button4.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");


    var idx = 0;
    var btns = document.querySelectorAll("button");
    for (let i = 0; i < btns.length; i++)
        btns[i].addEventListener('click', e => {
            if (i === idx) {
                answerStatus.setAttribute("style", "color: green");
                answerStatus.textContent = "Right answer!";
                finalScore += 20;
                nextQuestion2();
                return;
            } else {
                answerStatus.setAttribute("style", "color: red");
                answerStatus.textContent = "Wrong answer!";
                secondsLeft -= 10;
                nextQuestion2();
                return;
            }
        });
}


function nextQuestion2() {

    quiz.innerHTML = "<h1>Which symbol represents the logical and operator in javascript?</h1>";
    questionBtn.innerHTML = "";

    var button = document.createElement("button");
    button.textContent = "==";
    questionBtn.appendChild(button);
    button.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button2 = document.createElement("button");
    button2.textContent = "||";
    questionBtn.appendChild(button2);
    button2.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button3 = document.createElement("button");
    button3.textContent = "@@";
    questionBtn.appendChild(button3);
    button3.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button4 = document.createElement("button");
    button4.textContent = "&&";
    questionBtn.appendChild(button4);
    button4.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");


    var idx = 3;
    var btns = document.querySelectorAll("button");
    for (let i = 0; i < btns.length; i++)
        btns[i].addEventListener('click', e => {
            if (i === idx) {
                answerStatus.setAttribute("style", "color: green");
                answerStatus.textContent = "Right answer!";
                finalScore += 20;
                nextQuestion3();
                return;
            } else {
                answerStatus.setAttribute("style", "color: red");
                answerStatus.textContent = "Wrong answer!";
                secondsLeft -= 10;
                nextQuestion3();
                return;
            }
        });
}


function nextQuestion3() {

    quiz.innerHTML = "<h1>Which symbol represents the logical or operator?</h1>";
    questionBtn.innerHTML = "";

    var button = document.createElement("button");
    button.textContent = "==";
    questionBtn.appendChild(button);
    button.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button2 = document.createElement("button");
    button2.textContent = "||";
    questionBtn.appendChild(button2);
    button2.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button3 = document.createElement("button");
    button3.textContent = "@@";
    questionBtn.appendChild(button3);
    button3.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");

    var button4 = document.createElement("button");
    button4.textContent = "&&";
    questionBtn.appendChild(button4);
    button4.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;");


    var idx = 1;
    var btns = document.querySelectorAll("button");
    for (let i = 0; i < btns.length; i++)
        btns[i].addEventListener('click', e => {
            if (i === idx) {

                clearInterval(timerInterval);
                seconds.innerHTML = "";
                answerStatus.setAttribute("style", "color: green");
                answerStatus.textContent = "Right answer!";
                finalScore += 20;
                highScoreInput();
                return;
            } else {

                clearInterval(timerInterval);
                seconds.innerHTML = "";
                answerStatus.setAttribute("style", "color: red");
                answerStatus.textContent = "Wrong answer!";
                highScoreInput();
                return;
            }
        });
}


// This function sends a message to the user, notifying them of how well theyve done
// or whether or not they need to study more, based on their final score. It also
// dynamically creates a form from which the user can input their initials in order to save
// to a highscore list.
function highScoreInput() {

    quiz.innerHTML = "<h1>All done!</h1><p> Your final score is " + finalScore + "</p>";
    questionBtn.innerHTML = "<form><label for = submit>Enter initials: <input type = text id = submit><br><button id = submitScore>Submit</button></form>";


    if (finalScore >= 60) {
        answerStatus.setAttribute("style", "color: green;");
        answerStatus.innerHTML = "Great job!";
    } else {
        answerStatus.setAttribute("style", "color: red;");
        answerStatus.innerHTML = "You must study some more!";
    }

    var initial = document.querySelector("#submit");
    var lastBtn = document.querySelector("#submitScore");


    // This function is what allows the user to store the data locally for the highscore list   
    lastBtn.addEventListener("click", function (event) {
        event.preventDefault();


        var localStorageItems = JSON.parse(localStorage.getItem("finalInformation")) || [];
        var finalInformation = {
            initials: initial.value,
            score: finalScore
        };

        localStorageItems.push(finalInformation)
        localStorage.setItem("finalInformation", JSON.stringify(localStorageItems));
        window.location.href = 'highscores.html';

    })





}
















// These are the event listeners in order to start the quiz
start.addEventListener("click", startGame);
start.addEventListener("click", timer);
