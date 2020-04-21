const assert = require('chai').assert;
const quatityMesure = require('../app/QuantityMeasurement.js');

describe('QuantityMeasurement',function(){
    it("given 0 feet and 0 feet should return equal",function(){
        assert.equal(quatityMesure.unitMeasurement('feet',0),0);
    })
    it("given 0 feet and 1 feet should return not equal",function () {
        assert.notEqual(quatityMesure.unitMeasurement("feet",1),0);
    })
    it("given 0 feet and null should return null",function(){
        assert.isNull(null,quatityMesure.unitMeasurement("feet",0));
    })
    it("given feet value should return number",function(){
        assert.typeOf(quatityMesure.unitMeasurement("feet",0),'Number');
    })
    it("given 0 inch and 0 inch should return equal",function(){
        assert.equal(quatityMesure.unitMeasurement('inch',0),0);
    })
    it("given 0 inch and 1 inch should return not equal",function () {
        assert.notEqual(quatityMesure.unitMeasurement("inch",1),0);
    })
    it("given 0 inch and null should return null",function(){
        assert.isNull(null,quatityMesure.unitMeasurement("inch",0));
    })
    it("given inch value should return number",function(){
        assert.typeOf(quatityMesure.unitMeasurement("inch",0),'Number');
    })
    it(" given 1 feet should be equal to 12 inch",function(){
        assert.equal(quatityMesure.unitMeasurement("feet",1),12);
    })
    it(" given 1 feet and 1 inch should return not equal",function(){
        let checkFeet = quatityMesure.unitMeasurement("feet",1);
        let checkInch = quatityMesure.unitMeasurement("inch",1);
        assert.notEqual(checkFeet,checkInch);
    })
   
});
