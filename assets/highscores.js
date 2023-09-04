var highScoreList = document.querySelector(".highScoreItems")




function renderScore() {

    var scores = JSON.parse(localStorage.getItem("finalInformation"));
    
    for (i = 0; i < scores.length; i++) {
    var nameScore = document.createElement("li")
    nameScore.textContent = scores[i].initials + " - " + scores[i].score;
    highScoreList.appendChild(nameScore)
    }

   

    
}

renderScore();