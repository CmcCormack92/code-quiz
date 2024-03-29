var storage = JSON.parse(localStorage.getItem('user'));
var mainContent = document.getElementById('mainHs');
var ul = document.getElementById('scores');
var buttons = document.getElementById('hsButtons');
var clearHs = document.getElementById("clearBtn");
var returnBtn = document.getElementById("returnBtn");

//checks local storage for saved highscores
if (storage === null) {

    mainContent.textContent = "No High Scores"

} else {

    mainContent.textContent = ""

    //sets each highscore to a list item
    for (var i = 0; i < storage.length; i++) {
        var li = document.createElement('li')
        li.textContent = 'Name: ' + storage[i].name + ' - Score: ' + storage[i].score
        ul.append(li)
    }
}

//clears all high scores
var clearAllScores = function() {
    localStorage.clear();
    ul.remove("li");
    mainContent.textContent = "No High Scores"
}

//returns to home page
var returnHome = function() {
    window.location.href = "index.html";
};

clearHs.addEventListener("click", clearAllScores);
returnBtn.addEventListener("click", returnHome);