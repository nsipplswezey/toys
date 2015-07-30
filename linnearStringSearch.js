var firstArrayOfStrings = ["a","b","c","d"];
var secondArrayOfStrings = ["a","b"];


var arrayToObject = function(inputArray){
  var result = {};
  for (var i = 0; i < inputArray.length; i++){
    result[inputArray[i]] = false;
  }
  return result;
}

//function only finds a single difference between the two arrays of strings
var extraString = function(target,comparison){
  //todo: check input type is array

  target = arrayToObject(target);
  comparison = arrayToObject(comparison);

  for(var keys in target){
    if(!comparison.hasOwnProperty(keys)){
      return keys;
    }
  }
}

extraString(firstArrayOfStrings,secondArrayOfStrings) //returns c

//function only finds a single difference between the two arrays of strings.
//linnear time... 1n for each helper call... 1n for extraString call.
//3n... linnear time.
var firstArrayOfStrings = ["a","b","c","d"];
var secondArrayOfStrings = ["a","b"];

extraString(firstArrayOfStrings,secondArrayOfStrings) //also only returns c
