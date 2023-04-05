//1. need an event listener to start the quiz via the press of a "button"

//2. need a way to store all of the questions/answers... example
  /*
    {
      name: "what is the best seafood?"
      answers: [

      ]
    }
  */
//3. need a timer that counts down over the duration of the quiz

//4. need a way to move onto the next question after a question is answered 

//5. need a way to subtract time from the countdown if the question is answered wrong

//6. need a way to stop the game after all the questions have been answered or the time ran out

//7. need a way to then save the persons initials and their score

// general layout to get the quiz started

//user arrives at web page
//click the start button
  //first question appears
  //timer starts

  //listen for user to click on one of the answers

//when an answer is clicked
  //determine if the correct answer was clicked

    //if it was correct => move onto next question without subtracting time

    //if not correct => subtract time and move onto the next question

    var q1 = {
      q: "Whats your first name?",
      a1: "Linkin",
      a2: "Dennis",
      a3: "Chad",
      a4: "Dylan"
    }

    var q2 = {
      q: "Whats your last name?",
      a1: "Cool",
      a2: "Awesome",
      a3: "McMan",
      a4: "Huber"
    }

    var qSelect = [q1, q2];
    var startButton = document.querySelector(".button");
    var secondsLeft = 10;
    var timer = document.querySelector(".timer-count")


    function startQuiz(){
    
    }
  
    startButton.addEventListener("click", function(event){
      event.preventDefault()
      startQuiz()
      startTimer()

      console.log(startButton)
  });


  function startTimer(){
    var countDown = setInterval(function(){
      secondsLeft--;
      timer.textContent = secondsLeft;
      if(secondsLeft === 0){
        gameOver()

        console.log(countDown)
      }
    },1000)
  }

  function gameOver(){

  }