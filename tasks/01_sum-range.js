function range(a, b, step){
  var arr = [];
  if(typeof step === 'undefined'){
    step = 1;
  }
  if(step === 0){
    throw 'что-то пошло не так';
  }
  if(step < 0){
    for(var i = a; i >= b; i += step){
      arr.push(i);
    }
  } else{
    for(var i = a; i <= b; i += step){
      arr.push(i);
    }
  }
  console.log(arr);
  return arr;
}

function sum(arr){
  var s = 0;
  for(var i = 0; i < arr.length; i++){
    s+=arr[i];
  }
  return s;
}

try{
  console.log(sum(range(100000, 10, -15)));
} catch(err){
  console.log(err);
}
