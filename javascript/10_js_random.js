// Variables
var counter = 0;

// Generates a "random" number between 0 and 9
var aleatorio = Math.floor(Math.random() * 10);
var tentativa = 0;

// Cheat mode: printing the choosen number. This is just wrong
console.log(aleatorio);

// This function checks whether the user has guessed the right number
function verify_win(){
  // Converts user input from String to number
  tentativa = parseFloat(document.getElementById("txt01").value);

  // Checks the user input against the system generated random number
  if( aleatorio == tentativa ){
    document.getElementById("win").innerHTML = "Congratulations, you won!!1!!eleven"; 
  }
  else {
    counter++;
    document.getElementById("counter").innerHTML = counter;
  }
}
