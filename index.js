// TASK 1
// assign the values to the variable

let a = 3;
let b = 5;
let c;

// Using alert to print the message in the alert of the browser on load, using string 
// interpolation to print variables operation in string as well
alert(`
var a = 3;
var b = 5;
var c;
--------
a + b = ${a + b}
a - b = ${a - b}
a * b = ${a * b}
a / b = ${a / b}
a % b = ${a % b}
a += b : ${a += b}
a -= b : ${a -= b}
a *= b : ${a *= b}
a /= b : ${a /= b}
a %= b : ${a %= b}
a == b : ${a == b}
a != b : ${a != b}
a > b : ${a > b}
a < b : ${a < b}
!a && !c : ${!a && !c}
!a || !c : ${!a || !c}
`
);


// TASK 2
// Declaring variable type string
let first_name = "Rahib";
let last_name = "Ahmed";
let email = "ahme0572@algonquinlive.com";
let output;

// Creating the expression using + operator to add the varioables to the string
output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + ".";

// Display the output
alert(output);
