var highScoreList = document.querySelector(".highScoreItems")
var scoreContainer = document.querySelector("div2")




function init() {

    scores = JSON.parse(localStorage.getItem("finalInformation"));
    highScoreList.innerHTML = scores.initials + " - " + scores.score;



    
}

init()