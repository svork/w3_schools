// Variables
var logico = true;
var numero = 3;
var literal = "Test";
var nada;

// This function shows the data type of the variable
function show_data_type(){
  var data = document.getElementById("first").value;  
  
  switch(typeof(data)) {
    case "string":
      document.getElementById("output").innerHTML = "String Deliciosa";
      break;

    case "number":
      document.getElementById("output").innerHTML = "Number";
      break;

    case "boolean":
      document.getElementById("output").innerHTML = "Boolean";
      break;

    default:
      document.getElementById("output").innerHTML = "undefined";
      break;
  }
  // Showing the actual data type
  console.log("This data is " + typeof(data));
}

// This function returns the type of data
function get_data_type(){
  document.getElementById("output").innerHTML = typeof(nada);
  console.log("This data is " + typeof(nada));
}
