var userScore=0;
var computerScore=0;
const userScoreSpan=document.getElementById('user-score');
const computerScoreSpan=document.getElementById('comp-score');
const scoreBoardDiv=document.querySelector('.score-board');
var resultDiv=document.querySelector('.result');
const rockDiv=document.getElementById('r');
const paperDiv=document.getElementById('p');
const scissorsDiv=document.getElementById('s');


function game(userChoice){
  const enemyChoice=Math.floor(Math.random() * 3)+1;
  if (userChoice=="r"){
    if (enemyChoice==1){
      resultDiv.innerHTML="DRAW!"
        document.getElementById(userChoice).classList.add('grey-glow');
        setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')},500);
      return;
    }
    if (enemyChoice==2){
      resultDiv.innerHTML="Paper covers Rock."+" You Lose!";
      loss(userChoice);
      return;
    }
    if (enemyChoice==3){
      resultDiv.innerHTML="Rock fucks Scissors."+" You Win!";
      win(userChoice);
      return;
    }
  }
  if (userChoice=="p"){
    if (enemyChoice==1){
      resultDiv.innerHTML="Paper covers Rock."+" You Win!";
      win(userChoice);
      return;
    }
    if (enemyChoice==2){
      resultDiv.innerHTML="DRAW!"
      document.getElementById(userChoice).classList.add('grey-glow');
      setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')},500);
      return;
    }
    if (enemyChoice==3){
      resultDiv.innerHTML="Scissors obliterate paper."+" You Lose!"
      loss(userChoice);
      return;
    }
  }
  if (userChoice=="s"){
    if (enemyChoice==1){
      resultDiv.innerHTML="Rock fucks Scissors."+" You Lose!";
      loss(userChoice);
      return;
    }
    if (enemyChoice==2){
      resultDiv.innerHTML="Scissors obliterate paper."+" You Win!"
      win(userChoice);
      return;
    }
    if (enemyChoice==3){
      resultDiv.innerHTML="DRAW!"
      document.getElementById(userChoice).classList.add('grey-glow');
      setTimeout(function(){document.getElementById(userChoice).classList.remove('grey-glow')},500);
      return;
    }
  }
}
function win(userChoice){
  userScore++;
  userScoreSpan.innerHTML=userScore;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},500);
}
function loss(userChoice){
  computerScore++;
  computerScoreSpan.innerHTML=computerScore;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},500);
}


function main(){
  rockDiv.addEventListener('click',()=> game("r"));
  paperDiv.addEventListener('click',()=> game("p"));
  scissorsDiv.addEventListener('click',()=> game("s"));
}
main();
