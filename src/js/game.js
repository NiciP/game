module.exports = function (player_choice, pc_choice)  {
    
    function roll_dice() {
        var dice = Math.random();
        if (dice <= 0.33) {
            pc_choice = "rock";
        } 
        else if (dice > 0.33 && dice <= 0.66) {
            pc_choice = "paper";
        } 
        else {
            pc_choice = "scissors";
        }
     }

    if (player_choice === pc_choice) {
        return 'It is a draw';
    }
 
    if ((player_choice === 'rock' && pc_choice === 'scissors')  ||
        (player_choice === 'scissors' && pc_choice === 'paper') ||
        (player_choice === 'paper' && pc_choice === 'rock'))
            return 'Yay, you win!';
        else 
            return 'Sorry, you lose';
};





