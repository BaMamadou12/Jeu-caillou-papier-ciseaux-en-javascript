let wins = 0 ; let loses = 0;
const choices = ['papier','caillou','ciseaux'];
const gameStatus = document.getElementById('gameStatus');
const gameScore = document.getElementById('gameScore');

paper= document.getElementById('paper');
rock= document.getElementById('rock');
scissors= document.getElementById('scissors');

function runGame(userchoice)
{
  const computerChoice=choices[Math.floor(Math.random()*choices.length)];
   // console.log("Me:"+ userchoice+" |Co :"+computerChoice);
   switch (userchoice+'_'+computerChoice) {
    case 'papier_ciseaux':
    case 'ciseaux_caillou':  
    case 'caillou_papier':
        loses +=1;
        gameStatus.innerHTML = 'Me :'+userchoice +' | Co :'+computerChoice+'    wins => Computer';
        break;
    case 'ciseaux_papier':
    case 'caillou_ciseaux':
    case  'papier_caillou':
        wins += 1;
        gameStatus.innerHTML = 'Me :'+userchoice +' | Co :'+computerChoice+'     wins => Me';
        break;
    
    case 'ciseaux_ciseaux' :
    case 'caillou_caillou' :
    case 'papier_papier' :
         gameStatus.innerHTML = 'Me :'+userchoice +' | Co :'+computerChoice+'    => Vous ètes à égalité';
        break;            
   }
   
   gameScore.innerHTML = 'Wins: ' + wins + ' | Loses: ' + loses;
}

paper.addEventListener('click',()=>runGame('papier'));
rock.addEventListener('click',()=>runGame('caillou'));
scissors.addEventListener('click',()=>runGame('ciseaux'));
