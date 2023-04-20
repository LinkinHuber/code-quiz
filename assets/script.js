  var btnStartEl = document.querySelector('.start-button');
  var questionEl = document.getElementById('question');
  var choiceButtons = document.getElementById('question-answers');
  var timer = document.querySelector('.timer-count');
  var secondsLeft = 10;
  var score = 0;
  var timeleft;
  var gameover;
  var arrOfQuestions = [];
  var QuestionIndex = 0;


  var questions = [
    { questionTitle: 'What is my first name?', 
      rightAnswr: '1. Linkin', 
      choices: [{choice: '1. Linkin '}, {choice: '2. Chad'}, {choice: '3. Dylan'}, {choice: '4. Dennis'}]
    },
    { q: 'How old am I?', 
      a: '2. 20', 
      choices: [{choice: '1. 19'}, {choice: '2. 20'}, {choice: '3. 18'}, {choice: '4. 21'}]
    },
  ];


//hides intro page and shows the question page. The first question is selected in a random order. 
var startQuiz = function() {
    document.getElementById('intro-page').hidden = true;
    document.getElementById('question-container').hidden = false;
    arrOfQuestions = questions.sort(() => Math.random() - 0.5)
    startTimer()
    setQuestion()
  }

//set next question for quiz
var setQuestion = function() {
    resetAnswers()
    displayQuestion(arrOfQuestions[QuestionIndex])
}

//remove answer buttons
var resetAnswers = function() {
    while (choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild)
    };
};

//display question information (including answer buttons)
var displayQuestion = function(index) {
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
var checkAnswr = function(event) {
    var chosenAnswr = event.target
        if (arrOfQuestions[QuestionIndex].a === chosenAnswr.innerText){
            score = score + 1
        }

        else {
          timeleft = timeleft - 2;
      };

    //go to next question, check if there is more questions
      QuestionIndex++
        if  (arrOfQuestions.length > QuestionIndex + 1) {
            setQuestion()
        }   
        else {
           gameover = 'true';
            }
}

function startTimer() {
  var countDown = setInterval(function(){
    secondsLeft--;
    timer.textContent = secondsLeft;
    if(secondsLeft === 0){
      clearInterval(countDown);
    }
  },1000);
}

btnStartEl.addEventListener("click", startQuiz)