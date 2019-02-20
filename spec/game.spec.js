const { Game } =  require('../spec.helper')
var game = require('../src/js/game.js');

describe('game', function () {
    
    describe('you draw if', function ()  {
        it('should return "It is a draw" on "rock", "rock"', function () {
            expect(game('rock', 'rock')).to.equal('It is a draw');
        });

        it('should return "It is a draw" on "paper", "paper"', function () {
            expect(game('paper', 'paper')).to.equal('It is a draw');
        });

        it('should return "It is a draw" on "scissors", "scissors"', function () {
            expect(game('scissors', 'scissors')).to.equal('It is a draw');
        });
    });

    describe('you win if', function ()   {
        it('should return "Yay, you win!" on "rock", "scissors"', function () {
            expect(game('rock', 'scissors')).to.equal('Yay, you win!');
        });

        it('should return "Yay, you win!" on "paper", "rock"', function () {
            expect(game('paper', 'rock')).to.equal('Yay, you win!');
        });

        it('should return "Yay, you win!" on "scissors", "paper"', function () {
            expect(game('scissors', 'paper')).to.equal('Yay, you win!');
        });
    });


    describe('you lose if', function ()   {
        it('should return "Sorry, you lose" on "scissors", "rock"', function () {
            expect(game('scissors', 'rock')).to.equal('Sorry, you lose');
        });

        it('should return "Sorry, you lose" on "rock", "paper"', function () {
            expect(game('rock', 'paper')).to.equal('Sorry, you lose');
        });

        it('should return "Sorry, you lose" on "paper", "scissors"', function () {
            expect(game('paper', 'scissors')).to.equal('Sorry, you lose');
        });
    });
});
