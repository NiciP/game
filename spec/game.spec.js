const { Game } =  require('../spec.helper')
var game = require('../src/js/game.js');

describe.only('game', function () {
    describe('test', function () {
        it('should exist', function () {    
            expect(game).to.exist;
        });

    });

    describe('the game is a draw if', function ()  {
        it('should return "draw" on "paper", "paper"', function () {
            expect(game('paper', 'paper')).to.equal('draw');
        });
    });
});