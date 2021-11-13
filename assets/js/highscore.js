var storage = JSON.parse(localStorage.getItem('user'));
var mainContent = document.getElementById('mainHs');
var ul = document.getElementById('scores');
var buttons = document.getElementById('hsButtons');
var clearHs = document.getElementById("clearBtn");
var returnBtn = document.getElementById("returnBtn");

if (storage === null) {

    mainContent.textContent = "No Highscores"

} else {

    mainContent.textContent = ""

    for (var i = 0; i < storage.length; i++) {
        var li = document.createElement('li')
        li.textContent = 'Name: ' + storage[i].name + ' - Score: ' + storage[i].score
        ul.append(li)
    }
}

var clearAllScores = function() {
    localStorage.clear();
    ul.remove("li");
    mainContent.textContent = "No Highscores"
}

var returnHome = function() {
    window.location.href = "index.html";
};

clearHs.addEventListener("click", clearAllScores);
returnBtn.addEventListener("click", returnHome);