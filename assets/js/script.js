var buttonEl = document.querySelector("#btn");
var ansBtn = document.querySelector(".answer-button");
var timeLeft = 75;

var startQuiz = function () {
    var timeLabel = document.querySelector("#time-label").textContent = "Time:";
    setInterval(timeHandler, 1000)
    createBtn();
};

var timeHandler = function () {
    if (timeLeft > 0) {
        document.getElementById("time-value").textContent = timeLeft;
        timeLeft--;
    }
};

var createBtn = function() {
    buttonEl.remove("#btn");
    var btn1 = document.createElement("button");
    btn1.className = "btn";
    btn1.id = btn1;
    ansBtn.appendChild(btn1);

    var btn2 = document.createElement("button");
    btn2.className = "btn";
    btn2.id = btn2;
    ansBtn.appendChild(btn2);

    var btn3 = document.createElement("button");
    btn3.className = "btn";
    btn3.id = btn3;
    ansBtn.appendChild(btn3);

    var btn4 = document.createElement("button");
    btn4.className = "btn";
    btn4.id = btn4;
    ansBtn.appendChild(btn4);
};








buttonEl.addEventListener("click", startQuiz);
