// Variables
var glb = "Esta variável é global";
console.log(glb);

// This function has a local variable
function variavel_local(){
  var lcl = "Esta variável é local";
  
  // Changing the value of a global variable
  glb = "I've been changed";
  console.log(glb);
} 
