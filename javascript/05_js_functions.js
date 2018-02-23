// Variables
var x = 40;
var z = "Test";
var a = false;
var b = [0,1,2,3];
var c = {nome:"Zé Programador", salario: 2000};

// This function return the type of data
function get_type(data){
  return typeof(data);
}

// This function writes to an HTML element
function escreve(){
  document.getElementById("first").innerHTML = get_type(c);
  console.log("The data is " + get_type(c));
}
