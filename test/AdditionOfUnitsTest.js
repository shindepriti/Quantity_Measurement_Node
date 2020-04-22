const assert = require('chai').assert;
const unitAddition = require('../app/QuantityMeasurement.js');

describe("Additition of Two Units",function(){

    it("given 2 inch and 2 inch should return 4 length in inch",function(){
        assert.equal(4,unitAddition.additionOfMeasurement("inch",2,"inch",2,"inch"))
    })
    it("given 1 feet and 2 inch should return 14 length in inch",function(){
        assert.equal(14,unitAddition.additionOfMeasurement("feet",1,"inch",2,"inch"))
    })
    it("given 1 feet and 1 feet should return 24 length in inch",function(){
        assert.equal(24,unitAddition.additionOfMeasurement("feet",1,"feet",1,"inch"))
    })
    it("given 1 gallon and 1 litre should return 7.56 length in litre",function(){
        assert.equal(7.56,unitAddition.additionOfMeasurement("gallon",1,"litre",3.78,"litre"))
    })
    it("given 1 litre and 1000 milliliter should return 2 litre",function(){
        assert.equal(2,unitAddition.additionOfMeasurement("litre",1,"ml",1000,"litre"))
    })
    it("given 1 tonne and 1000 gram should return 1001 kilogram",function(){
        assert.equal(1001,unitAddition.additionOfMeasurement("tonne",1,"gram",1000,"kilogram"))
    })

})
