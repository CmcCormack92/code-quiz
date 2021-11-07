var buttonEl = document.querySelector("#btn");
var ansBtn = document.querySelector(".answer-button");
var message = document.querySelector("#message");
var save = document.querySelector("#save-score");
var rstBtn = document.querySelector("#reset");
var nameInput = document.querySelector("#name-input");


var score = 100;
var timeLeft = 75;
var questNum = 0;
var initials = "";
var highScoreArr = [];

var questions = ["Which is not a primitive data type?", "Which keyword is most commonly used to iterate through an array?", "Function parameters are enclosed in _____.", "What is the proper way to connect a seperate JavaScript file to your HTML?", "Which is the correct way to add a comment in JavaScript?"];

var answers = {
    ans1: ["1. Number", "1. for", "1. double quotes", "1. <script src= ''>", "1. <!--This is a comment-->"],
    ans2: ["2. String", "2. var", "2. curly brackets", "2. <script href=''>", "2. //This is a comment"],
    ans3: ["3. Object", "3. if", "3. square brackets", "3. <srcipt name=''>", "3. 'This is a commment'"],
    ans4: ["4. Boolean", "4. else", "4. parenthesis", "4. None of the above", "4. {This is a comment}"]
};

//Starts the quiz when start button pressed
var startQuiz = function () {
    setInterval(timeHandler, 1000);

    buttonEl.remove("#btn");
    createBtn();
    var timeLabel = document.querySelector("#time-label").textContent = "Time: ";
    message.textContent = "";
};

//Timer function
var timeHandler = function () {
    if (timeLeft > 0) {
        document.getElementById("time-value").textContent = timeLeft;
        timeLeft--;
    }
    if (timeLeft < 10) {
        document.getElementById("time-value").style.color = "red";
    } if (timeLeft === 1) {
        endQuiz();
    }
};

//creates answer buttons
var createBtn = function () {
    var btn1 = document.createElement("button");
    btn1.className = "btn";
    btn1.id = "btn1";
    ansBtn.appendChild(btn1);

    var btn2 = document.createElement("button");
    btn2.className = "btn";
    btn2.id = "btn2";
    ansBtn.appendChild(btn2);

    var btn3 = document.createElement("button");
    btn3.className = "btn";
    btn3.id = "btn3";
    ansBtn.appendChild(btn3);

    var btn4 = document.createElement("button");
    btn4.className = "btn";
    btn4.id = "btn4";
    ansBtn.appendChild(btn4);
};

//changes to next question
var nextQuestion = function () {
    if (questNum <= questions.length - 1) {
        document.getElementById("quiz-question").textContent = questions[questNum];
        document.getElementById("btn1").textContent = answers.ans1[questNum];
        document.getElementById("btn2").textContent = answers.ans2[questNum];
        document.getElementById("btn3").textContent = answers.ans3[questNum];
        document.getElementById("btn4").textContent = answers.ans4[questNum];

        questNum++;
    } else {
        endQuiz();
    }
};

//Quiz complete
var endQuiz = function () {
    if (timeLeft === 1) {
        document.getElementById("quiz-question").textContent = "You ran out of time!";
    } else {
        document.getElementById("quiz-question").textContent = "Quiz Complete";
        timeLeft = 0;
    }

    ansBtn.remove(".btn");

    message.textContent = "Your score was " + score;

    var input = document.createElement("input");
    nameInput.appendChild(input);
    input.id = "name";
    document.getElementById("name").placeholder = "Type Your Initials Here"

    var svBtn = document.createElement("button");
    svBtn.className = "btn";
    svBtn.id = "svBtn";
    save.appendChild(svBtn);
    document.getElementById("svBtn").textContent = "Save Score";

    var reset = document.createElement("button");
    reset.className = "btn";
    reset.id = "reset-button";
    rstBtn.appendChild(reset);
    document.getElementById("reset-button").textContent = "Try Again";
}

var saveScore = function () {
    var svInitials = document.getElementById("name").value;
    if (svInitials === "" || svInitials === null || svInitials.length < 3) {
        alert("Please enter a valid input to save!");
    } else {
        highScoreArr.push(svInitials);
        highScoreArr.push(score);
        localStorage.setItem("highScoreArr", JSON.stringify(highScoreArr));
        tryAgain();
        alert("Your high score has been saved");
    }
};

var tryAgain = function () {
    document.location.reload();
    timeLeft = 75;
    score = 100;
};



buttonEl.addEventListener("click", startQuiz);
ansBtn.addEventListener("click", nextQuestion);
save.addEventListener("click", saveScore);
rstBtn.addEventListener("click", tryAgain);
