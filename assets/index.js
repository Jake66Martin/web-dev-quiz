var start = document.querySelector("#startButton");

var startBtn = document.querySelector(".start-button");

var seconds = document.querySelector("#secondsLeft");

var quiz = document.querySelector(".quiz");

var questionBtn = document.querySelector(".questionButtons");

var answerStatus = document.querySelector(".answerData");

var highScoreList = document.querySelector(".highScoreItems")

var finalScore = 0;

var secondsLeft = 75;



function timer() {

        timerInterval = setInterval(function() {
        secondsLeft--;
        seconds.textContent = "Time: " + secondsLeft;
    
        if (secondsLeft === 0) {
        clearInterval(timerInterval);
         quiz.innerHTML = "<h1>You have ran out of time.</h1>";
        questionBtn.innerHTML = "";
        answerStatus.innerHTML = "";
        }
    
      }, 1000);

}

function startGame() {

    quiz.innerHTML = "<h1>Choose the tag that corresponds with <br> the definition of an empty tag?</h1>";
    startBtn.innerHTML = "";

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

    lastBtn.addEventListener("click", function(event) {
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

















    start.addEventListener("click", startGame);
    start.addEventListener("click", timer);
