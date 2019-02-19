const { Game } =  require('../spec.helper')
var game = require('../src/js/game.js');

describe('game', function () {

    });

    describe('the game is a draw if', function ()  {
        it('should return "draw" on "rock", "rock"', function () {
            expect(game('rock', 'rock')).to.equal('draw');
        });

        it('should return "draw" on "paper", "paper"', function () {
            expect(game('paper', 'paper')).to.equal('draw');
        });

        it('should return "draw" on "scissors", "scissors"', function () {
            expect(game('scissors', 'scissors')).to.equal('draw');
        });
    });

    describe('player_1 wins if', function ()   {
        it('should return "Player 1 wins" on "rock", "scissors"', function () {
            expect(game('rock', 'scissors')).to.equal('Player 1 wins');
        });

        it('should return "Player 1 wins" on "paper", "rock"', function () {
            expect(game('paper', 'rock')).to.equal('Player 1 wins');
        });

        it('should return "Player 1 wins" on "scissors", "paper"', function () {
            expect(game('scissors', 'paper')).to.equal('Player 1 wins');
        });
    });


    describe('player_2 wins if', function ()   {
        it('should return "Player 2 wins" on "scissors", "rock"', function () {
            expect(game('scissors', 'rock')).to.equal('Player 2 wins');
        });

        it('should return "Player 2 wins" on "rock", "paper"', function () {
            expect(game('rock', 'paper')).to.equal('Player 2 wins');
        });

        it('should return "Player 2 wins" on "paper", "scissors"', function () {
            expect(game('paper', 'scissors')).to.equal('Player 2 wins');
        });
    });

