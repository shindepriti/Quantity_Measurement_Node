const assert = require('chai').assert;
const unitAddition = require('../app/QuantityMeasurement.js');

describe("Additition of Two Units",function(){

    it("given 2 inch and 2 inch should return 4 length in inch",function(){
        let result = unitAddition.unitMeasurement(unitAddition.additionOFMeasurement("INCH",2),unitAddition.additionOFMeasurement("INCH",2));
        assert.equal(result,4)
    })
    it("given 1 feet and 2 inch should return 14 length in inch",function(){
        let result = unitAddition.unitMeasurement(unitAddition.additionOFMeasurement("FEET",1),unitAddition.additionOFMeasurement("FEET",2));
        assert.equal(result,14)
    })
    it("given 1 feet and 1 feet should return 24 length in inch",function(){
        let result = unitAddition.unitMeasurement(unitAddition.additionOFMeasurement("FEET",1),unitAddition.additionOFMeasurement("FEET",1));
        assert.equal(result,24)
    })
    it("given 1 gallon and 1 litre should return 7.56 length in litre",function(){
        let result = unitAddition.unitMeasurement(unitAddition.additionOFMeasurement("GALLON",1),unitAddition.additionOFMeasurement("LITER",3.78));
        assert.equal(7.56,result)
    })

})
