/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score,roundScroes,activePlayer,gamePlaying;

init();

 document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6+1);
        var docDom = document.querySelector('.dice');
        docDom.style.display = 'block';
        docDom.src= 'dice-' + dice+ '.png';
       
        if(dice !==1){
           
    
            roundScroes += dice;
        
            //console.log(roundScroes);
            document.getElementById('current-' + activePlayer).textContent = roundScroes;
        }else{
            //next player
            nextPlayer();
        }
    }

 });

 document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gamePlaying){
        scores[activePlayer] += roundScroes;

        document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];

        if(scores[activePlayer] >=100){
            gamePlaying = false;

            document.getElementById('name-'+activePlayer).textContent = "WoN!!";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        }else{
            nextPlayer();
        }
    }

    
 });

 function nextPlayer(){
    gamePlaying = true ;
    activePlayer === 0 ? activePlayer = 1  : activePlayer = 0;
    roundScroes = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

 }

 function init(){
    scores = [0,0];
    roundScroes = 0 ;
    activePlayer = 0;
    gamePlaying = true;
   
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    //console.log(dice);
   
    //document.getElementById('current-0').textContent = dice;
    //document.getElementById('current-0').innerHTML ='<strong>' + dice + '</strong>';
   
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";

    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
 }

 document.querySelector('.btn-new').addEventListener('click',init);