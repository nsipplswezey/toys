var fizzbuzz1 = function(num){

  for (var i = 1; i <= num; i++){
    if (i%3 === 0 && i%5 === 0){
      console.log("fizzbuzz: " + i)
    } else if (i%3 === 0){
      console.log("fizz: " + i)
    } else if (i%5 === 0){
      console.log("buzz: " + i)
    } else {
      console.log(i);
    }
  }
}



var fizzbuzz2 = function(num){
  var fizz, buzz, result;

  for (var i = 0; i < num; i++){
    fizz = (i%3 === 0);
    buzz = (i%5 === 0);

    result = ""

    if(fizz){
      result += "fizz";
    }

    if(buzz){
      result += "buzz";
    }

    result += i;

    console.log(result)
  }
}

fizzbuzz1(16)
fizzbuzz2(15)
