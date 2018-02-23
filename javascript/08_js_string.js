// This function returns the length of a given string
function tamanho_string(){
  var texto = document.getElementById("in_01").value;
  document.getElementById("first").innerHTML = texto.length;
}

// This function finds a string
function acha_string(){
  var texto = document.getElementById("in_01").value;
  var procura = document.getElementById("in_02").value;

  // Checks if the input is found on the string
  if ( texto.indexOf(procura) == -1 ) {
    document.getElementById("second").innerHTML = "String not found!";
    console.log("Position: " + texto.indexOf(procura));
  }

  // String was found, show its position
  else {
    document.getElementById("second").innerHTML = "String has been found" + 
    " on position: " + texto.indexOf(procura);
  }
}

// This function slices a string from position 3 to 10
function fatia_string(){
  var texto = document.getElementById("in_01").value;
  document.getElementById("third").innerHTML = texto.slice(3,10);
}

// This function replaces a string by another
function troca_string(){
  var texto = document.getElementById("in_01").value;
  var old = document.getElementById("old").value;
  var novo = document.getElementById("new").value;
  document.getElementById("fourth").innerHTML = texto.replace(old,novo);
}

// This function converts everything to Upper case
function maiuscula(){
  var texto = document.getElementById("in_01").value;
  document.getElementById("grande_pequena").innerHTML = texto.toUpperCase();
}

// This function converts everything to Lower case
function minuscula(){
  var texto = document.getElementById("in_01").value;
  document.getElementById("grande_pequena").innerHTML = texto.toLowerCase();
}

// This function returns the position of a given char
function posicao_string(){
  var texto = document.getElementById("in_01").value;
  var posicao = document.getElementById("find_char").value;
  document.getElementById("position").innerHTML = posicao;
  document.getElementById("char").innerHTML = texto.charAt(posicao);
}
