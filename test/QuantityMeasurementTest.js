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
    it(" given 1 feet and 1 yard should return not equal",function(){
        assert.notEqual(1,quatityMesure.unitMeasurement("feet","yard",1))  
    })
    it(" given 1 inch and 1 yard should return not equal",function(){
        assert.notEqual(1,quatityMesure.unitMeasurement("inch","yard",1));
    })
    it(" given 1 yard should be equal to 36 inch",function(){
        assert.equal(36,quatityMesure.unitMeasurement("yard","inch",1));
    })
    it(" given 36 inch should be equal to 1 yard",function(){
        assert.equal(1,quatityMesure.unitMeasurement("inch","yard",36));
    })
    it(" given 1 yard should be equal to 3 inch",function(){
        assert.equal(3,quatityMesure.unitMeasurement("yard","feet",1));
    })
    it(" given 2 inch should be equal to 5 inch",function(){
        assert.equal(5,quatityMesure.unitMeasurement("inch","centimeter",2));
    })
    it(" given 1 gallon should be equal to 3.78 litre",function(){
        assert.equal(3.78,quatityMesure.unitMeasurement("gallon","litre",1));
    })
    it(" given 1 litre should be equal to 1000 ml",function(){
        assert.equal(1000,quatityMesure.unitMeasurement("litre","ml",1));
    })
    it(" given 1 kilogram should be equal to 1000 gram",function(){
        assert.equal(1000,quatityMesure.unitMeasurement("kilogram","gram",1));
    })
    it(" given 1 tonne should be equal to 1000 kilogram",function(){
        assert.equal(1000,quatityMesure.unitMeasurement("tonne","kilogram",1));
    })
    it('100 fahrenheit should be equal to 212 celsius',function(){
        assert.equal(212,quatityMesure.unitMeasurement("fahrenheit","celsius",100));
    
    })
   
});
