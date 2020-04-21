console.log("Wel-Come To Quantity Measurement")

module.exports = {

    unitMeasurement(unitType, unitValue){
        var unitTypes = ["feet","inch"];
        var result,input = unitValue

        if(unitTypes[0] == unitType)
            result = 1*input;
        if (unitTypes[1] == unitType)
            result = 1*input;
        return result;
    }
}