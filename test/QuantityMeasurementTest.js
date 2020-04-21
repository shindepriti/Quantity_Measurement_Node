const assert = require('chai').assert;
const quatityMesure = require('../app/QuantityMeasurement.js');

describe('QuantityMeasurement',function(){
    it("given 0 feet and 0 feet should return equal",function(){
        assert.equal(quatityMesure.unitMeasurement(0,0),true);
    })
    it("given 0 feet and 1 feet should return not equal",function () {
        assert.notEqual(quatityMesure.unitMeasurement(0,1),true);
    })
});
