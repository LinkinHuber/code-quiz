  var startButton = document.querySelector('.start-button');
  var questionEl = document.getElementById('question');
  var choiceButtons = document.getElementById('question-answers');
  var timer = document.querySelector('.timer-count');
  var secondsLeft = 15;
  var score = 0;
  var gameover;
  var questionsAnswers = [];
  var QuestionIndex = 0;

  var questionsAnswers = [
    { q: 'What does "JS" stand for?', 
      a: '1. JavaScript', 
      choices: [{choice: '1. JavaScript '}, {choice: '2. '}, {choice: '3. '}, {choice: '4. '}]
    },
    { q: 'What does "CSS" stand for?', 
      a: '3. Cascading Style Sheets', 
      choices: [{choice: '1. '}, {choice: '2. '}, {choice: '3. Cascading Style Sheets'}, {choice: '4. '}]
    },
    { q: 'What does "HTML" stand for?', 
      a: '2. Hypertext Markup Language', 
      choices: [{choice: '1. '}, {choice: '2. Hypertext Markup Language'}, {choice: '3. '}, {choice: '4. '}]
    },
  ];

//deals with the countdown timer
function startTimer() {
  var countDown = setInterval(function(){
    secondsLeft--;
    timer.textContent = secondsLeft;
    if(secondsLeft === 0){
      clearInterval(countDown);
    }
  },1000);
}

//hides intro page and shows the question page, the questions are then put in a random order. 
function startQuiz() {
    document.getElementById('intro-page').hidden = true;
    document.getElementById('question-container').hidden = false;
    questionsAnswers.sort(() => Math.random() - 0.5)
    startTimer()
    setQuestion()
  }

//displays the next question
function setQuestion() {
    resetAnswers()
    displayQuestion(questionsAnswers[QuestionIndex])
}

//removes all the answer buttons
function resetAnswers() {
    while (choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild);
    };
};

//displays question information (including answer buttons)
function displayQuestion(index) {
    questionEl.innerText = index.q
    for (var i = 0; i < index.choices.length; i++) {
        var answerbutton = document.createElement('button')
        answerbutton.innerText = index.choices[i].choice
        answerbutton.classList.add('btn')
        answerbutton.classList.add('answerbtn')
        answerbutton.addEventListener('click', checkAnswr)
        choiceButtons.appendChild(answerbutton)
        }
    };

//check if answer is correct    
function checkAnswr(event) {
    var selectedanswer = event.target
        if (questionsAnswers[QuestionIndex].a === selectedanswer.innerText){
          console.log('yes');
            score = score + 1
        }
        else {
          console.log('no');
          secondsLeft = secondsLeft -2;
      };

    //go to next question, check if there is more questions
      QuestionIndex++
        if  (questionsAnswers.length > QuestionIndex + 0) {
            setQuestion()
        }   
        else {
          endGame()
            }
}

function endGame() {
    document.getElementById('question-container').hidden = true;
    document.getElementById('scoreboard').hidden = false;
  }

startButton.addEventListener("click", startQuiz)

