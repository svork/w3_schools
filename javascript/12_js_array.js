// Variables
var i = 0;
var people = ["Lais", "Mariana", "Daniela", "Hillory", "Juliana", "Luiza", "Aretuza"];

// This function will iterate over an array, using a simple FOR statement
function proximo(){
  // This will go over each element of the array, showing the value and the index
  for ( i; i < people.length; ) {
    document.getElementById("lbl_item").innerHTML = i;
    document.getElementById("lbl_name").innerHTML = people[i];
    console.log(i);
    i++;
    break;
  }
}

// This function will sort the array
function arrumar(){
  document.getElementById("lbl_array").innerHTML = people.toString();
  document.getElementById("lbl_arrumado").innerHTML = people.sort();
}

// This function adds an element to the end of the array
function adicionar(){
  var name = document.getElementById("txt_name").value;
  people.push(name);
  document.getElementById("lbl_new_name").innerHTML = people.toString();
}

// This function removes an element from the end of the array
function remover(){
  var removida = people.pop();
  alert("A pessoa " + removida + " foi removida");
  document.getElementById("lbl_new_name").innerHTML = people.toString();
}

// This function removes an element from the beginnig of the array
function remover_inicio(){
  var removida = people.shift();
  alert("A pessoa " + removida + " foi removida");
  document.getElementById("lbl_new_name").innerHTML = people.toString();
}

// This function adds an element to the beginning of the array
function adicionar_inicio(){
  var name = document.getElementById("txt_name").value;
  people.unshift(name);
  document.getElementById("lbl_new_name").innerHTML = people.toString();
}

// This function inserts an element on the middle of the array
function fatiar(){
  var name = document.getElementById("txt_add_middle").value;
  var position = parseFloat(document.getElementById("txt_position").value);
  people.splice(position, 0, name);
  document.getElementById("lbl_new_middle").innerHTML = people.toString();
}
