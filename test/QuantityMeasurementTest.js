const assert = require('chai').assert;
const quatityMeasure = require('../app/QuantityMeasurement.js');

describe('Test Case To Compare Length In Feet',function(){
    it("given 0 feet and 0 feet should return equal",function(){
        let length1 = quatityMeasure.unitMeasurement("FEET",0);
        let length2 = quatityMeasure.unitMeasurement("FEET",0);
        assert.equal(length1,length2);
    })
    it("given 0 feet and 1 feet should return not equal",function () {
        let length1 = quatityMeasure.unitMeasurement("FEET",0);
        let length2 = quatityMeasure.unitMeasurement("FEET",1);
        assert.isUndefined(length1,length2);
    })
    it("given 0 feet and null should return null",function(){
        assert.isNull(null,quatityMeasure.unitMeasurement("FEET","FEET",0));
    })
    it("given feet value should return number",function(){
        assert.isNotNaN(quatityMeasure.unitMeasurement("FEET",0),'Number');
    })
})

describe('Test Case To Compare Of Length In Inch ',function(){
    it("given 0 inch and 0 inch should return equal",function(){
        let length1 = quatityMeasure.unitMeasurement("INCH",0);
        let length2 = quatityMeasure.unitMeasurement("INCH",0);
        assert.equal(length1,length2);
    })
    it("given 0 inch and 1 inch should return not equal",function () {
        let length1 = quatityMeasure.unitMeasurement("INCH",0);
        let length2 = quatityMeasure.unitMeasurement("INCH",1);
        assert.isUndefined(length1,length2);
    })
    it("given 0 inch and null should return null",function(){
        assert.isNull(null,quatityMeasure.unitMeasurement("INCH",0));
    })
    it("given inch value should return number",function(){
        let unitType1 = quatityMeasure.unitMeasurement("INCH",0)
        assert.isNotNaN(unitType1,'Number');
    })
})

describe('Test Case To Compare Feet And Inch Length ',function(){
    it(" given 1 feet should be equal to 12 inch",function(){
        let length1 = quatityMeasure.unitMeasurement("FEET",1);
        let length2 = quatityMeasure.unitMeasurement("INCH",12);
        assert.equal(length1,length2);
    })
    it(" given 1 feet and 1 inch should return not equal",function(){
        let length1 = quatityMeasure.unitMeasurement("FEET",1);
        let length2 = quatityMeasure.unitMeasurement("INCH",1);
        assert.isUndefined(length1,length2);
    })
})

describe('Test Case To Compare  Feet And Yard Length ',function(){
    it(" given 3 feet should be equal to 1 yard",function(){
        let length1 = quatityMeasure.unitMeasurement("FEET",3);
        let length2 = quatityMeasure.unitMeasurement("YARD",1);
        assert.equal(length1,length2);
    })
    it(" given 1 feet and 1 yard should return not equal",function(){
        let length1 = quatityMeasure.unitMeasurement("FEET",1);
        let length2 = quatityMeasure.unitMeasurement("YARD",1);
        assert.isUndefined(length1,length2);  
    })
})

describe('Test Case To Compare Of Inch And  Yard ',function(){
    it("given 1 inch and 1 yard should return not equal",function(){
        let length1 = quatityMeasure.unitMeasurement("INCH",1);
        let length2 = quatityMeasure.unitMeasurement("YARD",1);
        assert.isUndefined(length1,length2);
    })
    it(" given 1 yard should be equal to 36 inch",function(){
        let length1 = quatityMeasure.unitMeasurement("INCH",36);
        let length2 = quatityMeasure.unitMeasurement("YARD",1);
        assert.equal(length1,length2);
    })
    it(" given 36 inch should be equal to 1 yard",function(){
        let length1 = quatityMeasure.unitMeasurement("YARD",1);
        let length2 = quatityMeasure.unitMeasurement("INCH",36);
        assert.equal(length1,length2);
    })
    it(" given 1 yard should be equal to 3 inch",function(){
        let length1 = quatityMeasure.unitMeasurement("YARD",1);
        let length2 = quatityMeasure.unitMeasurement("FEET",3);
        assert.equal(length1,length2);
    })
    it(" given 2 inch should be equal to 5 inch",function(){
        let length1 = quatityMeasure.unitMeasurement("INCH",2);
        let length2 = quatityMeasure.unitMeasurement("CENTIMETER",5);
        assert.equal(length1,length2);
    })
})

describe("Test case To Check Equality Of Volume In Gallon,Litre,Milliliter",function(){
    it(" given 1 gallon should be equal to 3.78 litre",function(){
        let volumn1 = quatityMeasure.unitMeasurement("GALLON",1);
        let volumn2 = quatityMeasure.unitMeasurement("LITER",3.78);
        assert.equal(volumn1,volumn2);
    })
    it(" given 1 litre should be equal to 1000 ml",function(){
        let volumn1 = quatityMeasure.unitMeasurement("LITER",1);
        let volumn2 = quatityMeasure.unitMeasurement("MILLILITER",1000);
        assert.equal(volumn1,volumn2);
    })
})

describe("Test case To Check Equality Of Weight In Gram,Kilogram,Tonne",function(){
    it(" given 1 kilogram should be equal to 1000 gram",function(){
        let weight1 = quatityMeasure.unitMeasurement("KILOGRAM",1);
        let weight2 = quatityMeasure.unitMeasurement("GRAM",1000);
        assert.equal(weight1,weight2);
    })
    it(" given 1 tonne should be equal to 1000 kilogram",function(){
        let weight1 = quatityMeasure.unitMeasurement("TONNE",1);
        let weight2 = quatityMeasure.unitMeasurement("KILOGRAM",1000);
        assert.equal(weight1,weight2);
    })
})

describe("Test case To Check Equality Of Temperature",function(){
    it('100 fahrenheit should be equal to 212 celsius',function(){
        let temperature1 = quatityMeasure.unitMeasurement("FAHRENHEIT",100);
        let temperature2 = quatityMeasure.unitMeasurement("CELSIUS",212);
        assert.equal(temperature1,temperature2);
    
    })
    
   
})
