const assert = require('chai').assert;
const unitAddition = require('../app/QuantityMeasurement.js');

describe("Additition of Two Units",function(){

    it("given 2 inch and 2 inch should return addition of length in inch",function(){
        assert.equal(4,unitAddition.additionOfMeasurement("inch",2,"inch",2))
    })
})
