// This function modifies the text of an HTML element
function modify_text(){
  document.getElementById("first").innerHTML="I've been changed";
}

// This function increases the text size
function increase_size(){
  document.getElementById("second").style.fontSize="40px";
}

// This function hides an HTML element
function hide_me(){
  document.getElementById("third").style.display="none";
}

// This function shows an HTML element
function show_me(){
  document.getElementById("third").style.display="block";
}
