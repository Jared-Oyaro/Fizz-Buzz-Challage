 
let n = 1, result;

while (n <= 100) {
  let multplesOf_3 = !(n % 3);
  let multplesOf_5 = !(n % 5);

 multplesOf_3 && multplesOf_5 ? result = 'fizzBizz' :
 multplesOf_3 ? result = 'fizz' : 
 multplesOf_5 ? result = 'Bizz' : 
 result = n;

  console.log(result);
  n++
}



