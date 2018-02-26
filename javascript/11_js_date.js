// Variables
//var agora = new Date(year, month, day);
var agora = new Date();

// This function returns the today's date
function hoje(){
  document.getElementById("hoje").innerHTML = agora.toDateString();
}

// This function reads the input from user and prints its birthday date
function bday(){
  // Assign the user input to the "niver" object
  var niver = new Date(document.getElementById("birthday").value);
  console.log(niver);

  // Creating a new date object from "niver"
  var ano = niver.getFullYear();
  var mes = niver.getMonth();
  var dia = niver.getDate();

  var aniversario = new Date(ano, mes, dia);
  console.log(aniversario);
  document.getElementById("bday_date").innerHTML = aniversario.toDateString();
}
