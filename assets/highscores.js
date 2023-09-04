var highScoreList = document.querySelector(".highScoreItems")





function renderScores() {

    
}


function init() {

    scores = JSON.parse(localStorage.getItem("finalInformation"));
    highScoreList.innerHTML = scores.initials + " - " + scores.score;
    
   
   renderScores();

    
}

init()