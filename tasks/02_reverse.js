function reverseArray(arr){
  var reversedArr = [];
  for(var i = arr.length - 1; i >= 0; i--){
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

function reverseArrayInPlace(arr){
  for(var i = 0, j = arr.length - 1; i < j; i++, j--){
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
}

var q = [5, 6, 7, 8, 9];
console.log(q);
reverseArrayInPlace(q);
console.log(q);

/*var a = [2, 3, 4];
console.log('a:' + a);
var b = reverseArray(a);
console.log('b:' + b);
console.log('a:' + a);
*/
