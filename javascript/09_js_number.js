// Variables
var n1 = 0;
var n2 = 0;
var result = 0;

// This function sums two numbers
function sum(){
  document.getElementById("operator").innerHTML = " + ";

  // Converts from String to Float
  n1 = parseFloat(document.getElementById("txt_01").value);
  n2 = parseFloat(document.getElementById("txt_02").value);

  result = n1 + n2;
  document.getElementById("result").innerHTML = "The result is: " + result;
}

// This function substracts two numbers
function sub(){
  document.getElementById("operator").innerHTML = " - ";

  // Converts from String to Float
  n1 = parseFloat(document.getElementById("txt_01").value);
  n2 = parseFloat(document.getElementById("txt_02").value);

  result = n1 - n2;
  document.getElementById("result").innerHTML = "The result is: " + result;
}


// This function multiplies two numbers
function mult(){
  document.getElementById("operator").innerHTML = " * ";

  // Converts from String to Float
  n1 = parseFloat(document.getElementById("txt_01").value);
  n2 = parseFloat(document.getElementById("txt_02").value);

  result = n1 * n2;
  document.getElementById("result").innerHTML = "The result is: " + result;
}


// This function divides two numbers
function div(){
  document.getElementById("operator").innerHTML = " / ";

  // Converts from String to Float
  n1 = parseFloat(document.getElementById("txt_01").value);
  n2 = parseFloat(document.getElementById("txt_02").value);

  result = n1 / n2;
  document.getElementById("result").innerHTML = "The result is: " + result;
}


// This function powers two numbers
function power(){
  document.getElementById("operator").innerHTML = " ^ ";

  // Converts from String to Float
  n1 = parseFloat(document.getElementById("txt_01").value);
  n2 = parseFloat(document.getElementById("txt_02").value);

  result = Math.pow(n1,n2);
  document.getElementById("result").innerHTML = "The result is: " + result;
}


// This function prints the output of two numbers
function equal(){
  alert("Not implemented yet!");
}

// This function clear the input fields
function clear_input(){
  document.getElementById("txt_01").innerHTML = "";
  document.getElementById("txt_02").innerHTML = "";
}
