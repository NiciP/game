const rock = document.getElementById('rock').addEventListener('click', run);
const paper = document.getElementById('paper').addEventListener('click', run);
const scissors = document.getElementById('scissors').addEventListener('click', run);
var pc_choice;
var player_choice;
var player = document.getElementById('player');
var computer = document.getElementById('computer');
var outcome = document.getElementById('outcome');

function run() {
    player_choice = this.innerText;
    computerGamble();
    compare();
}

function computerGamble() {
    var dice = Math.random();
  if (dice <= 0.33) {
        pc_choice = "Rock";
  } else if (dice > 0.33 && dice <= 0.66) {
        pc_choice = "Paper";
  } else {
        pc_choice = "Scissors";
  }
}

function compare() {
    player.innerHTML = "You choice is " + player_choice;
    computer.innerHTML = "Computer choice is " + pc_choice;
    var result;
    if (player_choice === pc_choice) {
        result = 'It is a draw';
        console.log(player_choice.toLowerCase())
        
    } else if ((player_choice.toLowerCase() === 'rock' && pc_choice.toLowerCase() === 'scissors')  ||
        (player_choice.toLowerCase() === 'scissors' && pc_choice.toLowerCase() === 'paper') ||
        (player_choice.toLowerCase() === 'paper' && pc_choice.toLowerCase() === 'rock'))
            result = 'Yay, you win!';
        else 
            result = 'Sorry, you lose';
        
        outcome.innerHTML = result    
};





