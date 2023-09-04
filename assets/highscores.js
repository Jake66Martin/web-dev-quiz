var highScoreList = document.querySelector(".highScoreItems")
var clearScore = document.querySelector("#clearScore")
var div = document.querySelector(".div2")


// This function clears the data locally from local storage and removes the entires off the screen
clearScore.addEventListener("click", function () {
    localStorage.clear();
    highScoreList.innerHTML = "";
})


// This function renders the score on screen in the form of an ordered list from the data that is tored locally
function renderScore() {

    var scores = JSON.parse(localStorage.getItem("finalInformation"));



    for (i = 0; i < scores.length; i++) {
        nameScore = document.createElement("li")
        nameScore.textContent = scores[i].initials + " - " + scores[i].score;
        highScoreList.appendChild(nameScore)
    }





}



renderScore();