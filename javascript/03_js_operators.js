// Variables
  var x = 3;
  var y = 5;
  var z = 0;

  var a = "Jailson"
  var b = "Mendez"
  var c = 0;

// This function sums two values and prints the result
function sum(){
  z = x + y;
  document.getElementById("first").innerHTML = z;
}

// This function subtracts two values and prints the result
function sub(){
  z = x - y;
  document.getElementById("first").innerHTML = z;
}

// This function multiplies two values and prints the result
function mult(){
  z = x * y;
  document.getElementById("first").innerHTML = z;
}

// This function divides two values and prints the result
function div(){
  z = x / y;
  document.getElementById("first").innerHTML = z;
}

// This function concatenates two strings
function concat(){
  c = a + b;
  document.getElementById("second").innerHTML = c;
}
