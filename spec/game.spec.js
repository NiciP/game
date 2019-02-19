const { Game } =  require('../spec.helper')
var game = require('../src/js/game.js');

describe('game', function () {

    });

    describe('the game is a draw if', function ()  {
        it('should return "draw" on "paper", "paper"', function () {
            expect(game('paper', 'paper')).to.equal('draw');
        });
    
    });

    describe('player_1 wins if', function ()   {
        it('should return "Player 1 wins" on "rock", "scissors"', function () {
            expect(game('rock', 'scissors')).to.equal('Player 1 wins');
        });

    });

