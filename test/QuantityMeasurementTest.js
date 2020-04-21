const assert = require('chai').assert;
const quatityMesure = require('../app/QuantityMeasurement.js');

describe('QuantityMeasurement',function(){
    it("given 0 feet and 0 feet should return equal",function(){
        assert.equal(0,quatityMesure.unitMeasurement('feet','feet',0));
    })
    it("given 0 feet and 1 feet should return not equal",function () {
        assert.notEqual(0,quatityMesure.unitMeasurement("feet","feet",1));
    })
    it("given 0 feet and null should return null",function(){
        assert.isNull(null,quatityMesure.unitMeasurement("feet","feet",0));
    })
    it("given feet value should return number",function(){
        assert.typeOf(quatityMesure.unitMeasurement("feet",0),'Number');
    })
    it("given 0 inch and 0 inch should return equal",function(){
        assert.equal(0,quatityMesure.unitMeasurement('inch','inch',0));
    })
    it("given 0 inch and 1 inch should return not equal",function () {
        assert.notEqual(0,quatityMesure.unitMeasurement("inch","inch",1));
    })
    it("given 0 inch and null should return null",function(){
        assert.isNull(null,quatityMesure.unitMeasurement("inch",0));
    })
    it("given inch value should return number",function(){
        assert.typeOf(quatityMesure.unitMeasurement("inch","inch",0),'number');
    })
    it(" given 1 feet should be equal to 12 inch",function(){
        assert.equal(12,quatityMesure.unitMeasurement("feet","inch",1));
    })
    it(" given 1 feet and 1 inch should return not equal",function(){
        assert.notEqual(1,quatityMesure.unitMeasurement("feet","inch",1));
    })
    it(" given 3 feet should be equal to 1 yard",function(){
        assert.equal(1,quatityMesure.unitMeasurement("feet","yard",3));
    })
    
});
