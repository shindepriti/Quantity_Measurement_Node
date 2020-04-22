console.log("Wel-Come To Quantity Measurement")

module.exports = {

    unitMeasurement(unitType1, unitType2, unitValue) {
        var unitTypes = ["feet", "inch","yard","centimeter","gallon","litre","ml"];
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
            result=input*2.5;
            return result;
        }
        if(unitType1==unitTypes[4] && unitType2==unitTypes[5]){
            result=input*3.78;
            return result;
        }
        if(unitType1==unitTypes[5] && unitType2==unitTypes[6]){
            result=input*1000;
            return result;
        }
        else {
            result = 1 * input;
        }
        return result;
    },

    additionOfMeasurement(unitType1,unitValue1,unitType2,unitValue2,unitType3){
            var value1 = this.unitMeasurement(unitType1,unitType3,unitValue1);
            var value2 = this.unitMeasurement(unitType2,unitType3,unitValue2);
            var unitAddition = value1+value2;
            return unitAddition;

    }
}