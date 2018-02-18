// This function writes text on a HTML element
function change_text(){
  document.getElementById("first").innerHTML = "This text has been input'd using JavaScript";
}

// This function print data on the HTML body and should only be used for TEST
// It will also overwrite all the HTML document, beware of that!
function over_write(){
  window.alert(" You fucked up!");
  document.write("I told you to not fuck up, you fool!"); 
}

// This function creates an alert box
function create_alert(){
  window.alert("Help me, they're trying to kill me!"); 
}

// This functions writes to browser's console log, it is used for debugging when you press F12
function write_console(){
  console.log("hue HUE hue BR br");
}
