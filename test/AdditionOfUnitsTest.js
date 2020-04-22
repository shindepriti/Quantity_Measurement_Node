const assert = require('chai').assert;
const unitAddition = require('../app/QuantityMeasurement.js');

describe("Additition of Two Units",function(){

    it("given 2 inch and 2 inch should return addition of length in inch",function(){
        assert.equal(4,unitAddition.additionOfMeasurement("inch",2,"inch",2,"inch"))
    })
    it("given 1 feet and 2 inch should return 14 length in inch",function(){
        assert.equal(14,unitAddition.additionOfMeasurement("feet",1,"inch",2,"inch"))
    })
    it("given 1 feet and 1 feet should return 24 length in inch",function(){
        assert.equal(24,unitAddition.additionOfMeasurement("feet",1,"feet",1,"inch"))
    })
})
