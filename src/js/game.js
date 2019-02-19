module.exports = function (player_1_choice, player_2_choice)  {
    if (player_1_choice === player_2_choice) {
        return 'draw';
    }
 
    if (player_1_choice === 'rock' && player_2_choice === 'scissors')  {
        return 'Player 1 wins';
    }
    
};





