console.log("Wel-Come To Quantity Measurement")
let unit = require("../app/UnitType")

class QuantityMeasurement{

    unitMeasurement(unitType,unitValue) {
        let key = Object.keys(unit);
        key.forEach(element => {
                                if(element == unitType)
                                    return unitValue*unit[element];
                                
                                });
    };

    additionOFMeasurement(value1,value2){   
        var unitAddition=value1+value2;        
        return unitAddition;
    }
}
module.exports= new QuantityMeasurement;