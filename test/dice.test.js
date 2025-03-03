'use strict';

const expect = require('chai').expect;
const Dice = require('../dice');

describe('methods/properties defined', function () {
    const dice = new Dice();
    it('getter maximumValue is defined', function () {
        expect(dice).to.have.a.property('maximumValue');
    });
    it('method roll is defined', function () {
        expect(dice).to.have.a.property('roll');
    });
    it('method toString is defined', function () { // not neccessary: is defined in the class by default
        expect(dice).to.have.a.property('toString');
    });
});

describe('test roll method', function () {
    let dice = new Dice();
    this.beforeEach(function () { // creates 6 sided dice by default
        dice = new Dice();
    });
    it('test not rolled yet', function () {
        expect(dice.dots).to.equal(0);
    });
    it('dice rolled', function () {
        dice.roll();
        expect(dice.dots).to.be.within(1, 6);
    });
}); 
