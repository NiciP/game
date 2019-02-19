module.exports = function (player_1_choice, player_2_choice)  {
    if (player_1_choice === player_2_choice) {
        return 'draw';
    }
 
    if ((player_1_choice === 'rock' && player_2_choice === 'scissors')  ||
        (player_1_choice === 'scissors' && player_2_choice === 'paper') ||
        (player_1_choice === 'paper' && player_2_choice === 'rock'))
            return 'Player 1 wins';
        else 
            return 'Player 2 wins';
};





