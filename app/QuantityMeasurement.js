console.log("Wel-Come To Quantity Measurement")

module.exports = {

    unitMeasurement(unitType1, unitType2, unitValue) {
        var unitTypes = ["feet", "inch","yard","centimeter"];
        var result, input = unitValue;

       if (unitTypes[0] == unitType1 && unitTypes[1] == unitType2) {
            result = 12 * input;
            return result;
        }
        if(unitType1==unitTypes[0] && unitType2==unitTypes[2]){
            result=(input/3);
            return result;
        }
        if(unitType1==unitTypes[2] && unitType2==unitTypes[0]){
            result=input*3;
            return result
        }
        if(unitType1==unitTypes[2] && unitType2==unitTypes[1]){
            result=input*36;
            return result;
        }
        if(unitType1==unitTypes[1] && unitType2==unitTypes[2]){
            result=input/36;
            return result;
        }
        if(unitType1==unitTypes[1] && unitType2==unitTypes[3]){
            result=input*2.5
            return result;
        }
        else {
            result = 1 * input;
        }
        return result;
    }
}