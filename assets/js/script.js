var buttonEl = document.querySelector("#btn");
var timeLeft = 75

var startQuiz = function () {
    var timeLabel = document.querySelector("#time-label").textContent = "Time:";
    setInterval(timeHandler, 1000)
};

var timeHandler = function () {
    if (timeLeft > 0) {
        document.getElementById("time-value").textContent = timeLeft;
        timeLeft--;
    }
};









buttonEl.addEventListener("click", startQuiz);
