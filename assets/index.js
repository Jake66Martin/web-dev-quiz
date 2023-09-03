var start = document.querySelector("#startButton");

var startBtn = document.querySelector(".start-button");

var seconds = document.querySelector("#secondsLeft");

var quiz = document.querySelector(".quiz");

var questionBtn = document.querySelector(".questionButtons");

var answerStatus = document.querySelector(".answerData");

var finalScore = 0;


function startGame() {

    quiz.innerHTML = "<h1>Choose the tag that corresponds with <br> the definition of an empty tag?</h1>";
    startBtn.innerHTML = "";

    var button = document.createElement("button");
    button.textContent = "The p tag";
    questionBtn.appendChild(button);
    button.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button2 = document.createElement("button");
    button2.textContent = "The nav tag";
    questionBtn.appendChild(button2);
    button2.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button3 = document.createElement("button");
    button3.textContent = "The img tag";
    questionBtn.appendChild(button3);
    button3.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button4 = document.createElement("button");
    button4.textContent = "The h1 tag";
    questionBtn.appendChild(button4);
    button4.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var idx = 2;
    var btns = document.querySelectorAll("button")
    for (let i = 0; i < btns.length; i++)
        btns[i].addEventListener('click', e => {
            if (i === idx) {
                answerStatus.setAttribute("style", "color: green")
                answerStatus.textContent = "Right answer!"
                finalScore += 20;
                nextQuestion();
                return;
            } else {
                answerStatus.setAttribute("style", "color: red")
                answerStatus.textContent = "Wrong answer!";
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
    button.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button2 = document.createElement("button");
    button2.textContent = "Heading";
    questionBtn.appendChild(button2);
    button2.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button3 = document.createElement("button");
    button3.textContent = "Home";
    questionBtn.appendChild(button3);
    button3.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button4 = document.createElement("button");
    button4.textContent = "Horizontal";
    questionBtn.appendChild(button4);
    button4.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")


    var idx = 1;
    var btns = document.querySelectorAll("button")
    for (let i = 0; i < btns.length; i++)
        btns[i].addEventListener('click', e => {
            if (i === idx) {
                answerStatus.setAttribute("style", "color: green")
                answerStatus.textContent = "Right answer!"
                finalScore += 20;
                nextQuestion1();
                return;
            } else {
                answerStatus.setAttribute("style", "color: red")
                answerStatus.textContent = "Wrong answer!";
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
    button.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button2 = document.createElement("button");
    button2.textContent = "( )";
    questionBtn.appendChild(button2);
    button2.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button3 = document.createElement("button");
    button3.textContent = "[ ]";
    questionBtn.appendChild(button3);
    button3.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button4 = document.createElement("button");
    button4.textContent = "< >";
    questionBtn.appendChild(button4);
    button4.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")


    var idx = 0;
    var btns = document.querySelectorAll("button")
    for (let i = 0; i < btns.length; i++)
        btns[i].addEventListener('click', e => {
            if (i === idx) {
                answerStatus.setAttribute("style", "color: green")
                answerStatus.textContent = "Right answer!"
                finalScore += 20;
                nextQuestion2();
                return;
            } else {
                answerStatus.setAttribute("style", "color: red")
                answerStatus.textContent = "Wrong answer!";
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
    button.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button2 = document.createElement("button");
    button2.textContent = "||";
    questionBtn.appendChild(button2);
    button2.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button3 = document.createElement("button");
    button3.textContent = "@@";
    questionBtn.appendChild(button3);
    button3.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button4 = document.createElement("button");
    button4.textContent = "&&";
    questionBtn.appendChild(button4);
    button4.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")


    var idx = 3;
    var btns = document.querySelectorAll("button")
    for (let i = 0; i < btns.length; i++)
        btns[i].addEventListener('click', e => {
            if (i === idx) {
                answerStatus.setAttribute("style", "color: green")
                answerStatus.textContent = "Right answer!";
                finalScore += 20;
                nextQuestion3();
                return;
            } else {
                answerStatus.setAttribute("style", "color: red")
                answerStatus.textContent = "Wrong answer!";
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
    var btns = document.querySelectorAll("button")
    for (let i = 0; i < btns.length; i++)
        btns[i].addEventListener('click', e => {
            if (i === idx) {
                answerStatus.setAttribute("style", "color: green")
                answerStatus.textContent = "Right answer!"
                finalScore += 20;
                nextQuestion4();
                return;
            } else {
                answerStatus.setAttribute("style", "color: red")
                answerStatus.textContent = "Wrong answer!";
                nextQuestion4();
                return;
            }
        });
}

function nextQuestion4() {

    quiz.innerHTML = "<h1>In order to repeat code for x members of an array, what operation do we use?</h1>";
    questionBtn.innerHTML = "";

    var button = document.createElement("button");
    button.textContent = "A conditional";
    questionBtn.appendChild(button);
    button.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button2 = document.createElement("button");
    button2.textContent = "A function";
    questionBtn.appendChild(button2);
    button2.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button3 = document.createElement("button");
    button3.textContent = "A declaration block";
    questionBtn.appendChild(button3);
    button3.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")

    var button4 = document.createElement("button");
    button4.textContent = "A for loop";
    questionBtn.appendChild(button4);
    button4.setAttribute("style", "background-color: black; color: white; font-size: 20px; width: 100px;")


    var idx = 3;
    var btns = document.querySelectorAll("button")
    for (let i = 0; i < btns.length; i++)
        btns[i].addEventListener('click', e => {
            if (i === idx) {
                answerStatus.setAttribute("style", "color: green")
                answerStatus.textContent = "Right answer!"
                highScoreInput();
                return;
            } else {
                answerStatus.setAttribute("style", "color: red")
                answerStatus.textContent = "Wrong answer!";
                highScoreInput();
                return;
            }
        })
}


function highScoreInput() {

    quiz.innerHTML = "<h1>All done!</h1><p> Your final score is " + finalScore + "</p>"; 
    questionBtn.innerHTML = "<form><label>Enter initials: <input type = text><br><button>Submit</button></form>";
    
    if (finalScore >= 60) {
    answerStatus.innerHTML = "Great job!";
    } else {
    answerStatus.innerHTML = "You must study some more!";
    }


    

}















start.addEventListener("click", startGame);
