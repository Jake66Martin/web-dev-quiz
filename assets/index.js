var start = document.querySelector("#startButton");

var startBtn = document.querySelector(".start-button");

var seconds = document.querySelector("#secondsLeft");

var quiz = document.querySelector(".quiz");

var questionBtn = document.querySelector(".questionButtons");



function startGame() {
    
quiz.innerHTML = "<h1>Choose the tag that corresponds with <br> the definition of an empty tag</h1>";
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

button = false;
button2 = false;
button3 = true;
button4 = false;







   
   




    
   


}

start.addEventListener("click", startGame)