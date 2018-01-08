var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {
		//1. Need a random number
		var dice = Math.floor(Math.random() * 6) + 1;
		//2. Display the result
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';
		//3. Evaluate based on roll(s) whether round score or nextPlayer should be updated.
		if (dice != 1 && dice != 6) {
			//Add score
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
			sixFlag = false;
		} else if (dice = 1) {
			//Change to next player
			gamePlaying = false;
		} else if (dice = 6) {
			if (sixFlag = true) {
				gamePlaying = false;
			} else {
				sixFlag = true;
			}
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		//Add current score to global score
		scores[activePlayer] += roundScore;
		//update UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		//Check if player won
		if (scores[activePlayer] >= 100) {
			document.querySelector('#name-' + activePlayer).textContent = "WINNER!";
			//Clear die image from screen in celebration of win
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
  		gamePlaying = false;
		}
	}
	
});

function init () {
	//initialize all counters to zero
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	sixFlag = false;
	
	//reset displays to zero 
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	//reset player names to one and two
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	//hide die element
	document.querySelector('.dice').style.display = 'none';
	//reset player classes
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	//set roundScore to 0
	roundScore = 0;
	//set both players' current scores to 0 in prep for next round
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	//toggle the active class to visibly distinguish active player
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-next').addEventListener('click', function() {
	if (gamePlaying === false) {
		if (scores[0] < 100 && scores[1] < 100) {
			gamePlaying = true;
			nextPlayer();
		}
	}
});
