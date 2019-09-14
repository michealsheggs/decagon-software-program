function wordCount(arrayOfStrings) {
  // create an empty json variable that will hold the words and its counts
  return arrayOfStrings.reduce(function(counter,value){
    counter[value] = (counter[value] || 0) + 1;
    return counter;
  }, {});
}
  //call the function wordCount and pass on the arrays
module.exports = wordCount;






// function wordCount(arrayOfStrings) {
//   //first create an empty json variable that will hold the words and its counts
// var stringMap = {};
//   for(var a = 0; a < arrayOfStrings.lenght; a++){
//     let word = arrayOfStrings[a];
//     stringMap[word] =(stringMap[word] + 1) || 1;
//   }
//   return stringMap;

// wordCount(["a", "b", "a", "c", "b"]);
// wordCount(["c", "b", "a"]);
// wordCount(["c", "c", "c", "c"]);