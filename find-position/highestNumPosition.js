
function highestNumPosition(array) {
 let higherNumber = 0;
    if(array.length<1  || array==null){
      return[0,0];
    };
    for(let row = 0; row<=array.length-1;row++){
      for(let col =0;col<array[row].length; col++){
        if(array[row][col]>higherNumber){
          higherNumber = array[row][col];
        }
      }
    }
    //return the  value
    for(let row=0;row<=array.length-1;row++){
      for(let col =0;col<array[row].length;col++){
        if(array[row][col] == higherNumber){
          return [row,col];
        }
      }
    }
}
module.exports = highestNumPosition;
