let num01 = 10;
let num02 = 90;

//addition
alert(num01 + num02);

//subtraction
alert(num01 - num02); 

//multiplication
alert(num01 * num02);

//divition
alert(num01 / num02); 

//modulus
alert(num01 % num02);

//exponent
alert(num01 ** num02); 

//same answe but add the bigInt()
      alert(BigInt(num01) ** BigInt(num02)); 

// DOM Method Call (o Selector Method)

 let answer = BigInt(num01) ** BigInt(num02) ;

document.getElementById("biig_IInteger").textContent = answer;      