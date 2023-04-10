    var startButton = document.querySelector('.start-button');
    var timer = document.querySelector('.timer-count');
    var secondsLeft = 10;
    var score = 0;

    var qp1Button = document.querySelector('#qp-1');
    var qp2Button = document.querySelector('#qp-2');
    var qp3Button = document.querySelector('#qp-3');
    

    function hideStartPage() {
      document.getElementById('intro-page').hidden = true;
    }

    function showQuestionPage1() {
      document.getElementById('qp-1').hidden = false;
    }
    
    function hideQuestionPage1() {
      document.getElementById('qp-1').hidden = true;
    }

    function showQuestionPage2() {
      document.getElementById('qp-2').hidden = false;
    }
   
    function hideQuestionPage2() {
      document.getElementById('qp-2').hidden = true;
    }

    function showQuestionPage3() {
      document.getElementById('qp-3').hidden = false;
    }

    function hideQuestionPage3() {
      document.getElementById('qp-3').hidden = true;
    }
    
    function showScorePage() {
      document.getElementById('scoreboard').hidden = false;
    }


      startButton.addEventListener('click', function(event){
        event.preventDefault();
          hideStartPage();
          startTimer();
          showQuestionPage1()
          
      });

      qp1Button.addEventListener('click', function(event){
        event.preventDefault();
        hideQuestionPage1();
        showQuestionPage2()
      });
        
      qp2Button.addEventListener('click', function(event){
        event.preventDefault();
        hideQuestionPage2();
        showQuestionPage3() 
      });

      qp3Button.addEventListener('click', function(event){
        event.preventDefault();
        hideQuestionPage3();
        showScorePage() 
      });
      

  function startTimer() {
    var countDown = setInterval(function(){
      secondsLeft--;
      timer.textContent = secondsLeft;
      if(secondsLeft === 0){
        clearInterval(countDown);
        hideQuestionPage1();
        hideQuestionPage2();
        hideQuestionPage3();
        showScorePage()

      }
    },1000)
  }


  //1. need a way to figure out what answers are right or wrong

  //2. need a way to keep track of the score and add points for right answers

  //3. need a way to subtract time from the countdown if the question is answered wrong

  //4. need a way to then save the persons initials and their score
  

  function rightWrongAnswers() {
   
  }


  function addPoints() {

  }


  function subtractTime() {

  }