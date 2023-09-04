var highScoreList = document.querySelector(".highScoreItems")

function renderScores() {

    var score = JSON.parse(localStorage.getItem(finalInformation));
    highScoreList.innerHTML = score
}

renderScores(finalInformation);