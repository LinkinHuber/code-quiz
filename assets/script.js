var startButton = document.querySelector('.start-button');
var questionContainer = document.getElementById('question');
var quizButtons = document.getElementById('question-answers');
var timer = document.querySelector('.timer-count');
var questionsAnswers = [];
var QuestionIndex = 0;
var secondsLeft = 15;

var scoreboardEl = document.getElementById('scoreboard');
var scores = JSON.parse(localStorage.getItem('scores')) || [];
var initials;
  
//arr of questions, choices, and answers
var questionsAnswers = [
  { q: 'What does "JS" stand for?', 
    a: '1. JavaScript', 
    choices: [{choice: '1. JavaScript '}, {choice: '2.JavScrpt '}, {choice: '3. JavaSpt '}, {choice: '4.JaSipt '}]
  },
  { q: 'What does "CSS" stand for?', 
    a: '3. Cascading Style Sheets', 
    choices: [{choice: '1. Casca Syle Seets '}, {choice: '2. Casing Style Sets '}, {choice: '3. Cascading Style Sheets'}, 
    {choice: '4. Cascad Ste Shs'}]
  },
  { q: 'What does "HTML" stand for?', 
    a: '2. Hypertext Markup Language', 
    choices: [{choice: '1. Hyper Mark Lang'}, {choice: '2. Hypertext Markup Language'}, {choice: '3. Herex Mkup Luage'}, 
    {choice: '4. Hypertext Mark Langua'}]
  },
];

//deals with the countdown timer
function startTimer() {
  var countDown = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(countDown);
    };
  },1000);
};

//hides intro page and shows the question page, the questions are then put in a random order. 
function startQuiz() {
  document.getElementById('intro-page').hidden = true;
  document.getElementById('question-container').hidden = false;
  questionsAnswers.sort(() => Math.random() - 0.5);
  startTimer();
  setQuestion();
};

//displays question information (including answer buttons)
function displayQuestion(index) {
  questionContainer.innerText = index.q;
  for (var i = 0; i < index.choices.length; i++) {
    var answerbutton = document.createElement('button');
      answerbutton.innerText = index.choices[i].choice;
      answerbutton.classList.add('btn');
      answerbutton.classList.add('answerbtn');
      answerbutton.addEventListener('click', checkAnswr);
      quizButtons.appendChild(answerbutton);
  };
};

//displays the next question
function setQuestion() {
  resetAnswers();
  displayQuestion(questionsAnswers[QuestionIndex]);
};

//checks if the answer is right or wrong and will then subtract time if its wrong  
function checkAnswr(event) {
  var selectedanswer = event.target;
    if (questionsAnswers[QuestionIndex].a === selectedanswer.innerText){
      console.log('yes');
    }
    else {
      console.log('no');
      secondsLeft = secondsLeft -2;
    };

//goes to next question after a question is answered and checks if there are more questions
    QuestionIndex++
      if  (questionsAnswers.length > QuestionIndex + 0) {
          setQuestion();
      }   
      else {
        endGame();
      };
};

//removes all of the answer buttons
function resetAnswers() {
  while (quizButtons.firstChild) {
      quizButtons.removeChild(quizButtons.firstChild);
  };
};

//when game is over it hides the question page and the timer then makes the score page visible
function endGame() {
    document.getElementById('card-timer').hidden = true;
    document.getElementById('question-container').hidden = true;
    document.getElementById('scoreboard').hidden = false;
    getUserInitials();
};

//
function getUserInitials() {
  initials = prompt("Game Over! Enter Your Initials");
  addScoreToLocalStorage();
};

//
function addScoreToLocalStorage() {
  scores.push({
    objInitials: initials,
    objScore: secondsLeft
  });
  localStorage.setItem("scores", JSON.stringify(scores));
  scoreboard();
};

//
function scoreboard() {
  let i = 0;
  while (i < scores.length-1) {
    i++;
    var divEl = document.getElementById("scoreboard");
    var pEl = document.createElement("p");
    var leaderboard = JSON.parse(localStorage.getItem("scores"));
    console.log(leaderboard);
    pEl.textContent = leaderboard[i].objInitials + " " + leaderboard[i].objScore + "points";
    divEl.append(pEl);
  }
  localStorage.clear();
};

//event listener for start button on intro page 
startButton.addEventListener("click", startQuiz);