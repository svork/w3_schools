// Este m�todo exibe a hora atual
function horas(){
	document.getElementById("horas").innerHTML = Date();
}

// Este m�todo deixa o texto bem doido
function doido(){
	document.getElementById("muda_eu_carai").style.fontSize="48px";
	document.getElementById("muda_eu_carai").style.color="yellow";
	document.getElementById("muda_eu_carai").style.backgroundColor="black";
}

// Este m�todo deixa o texto de buenas
function debuenas(){
	document.getElementById("muda_eu_carai").style.fontSize="14px";
	document.getElementById("muda_eu_carai").style.color="black";
	document.getElementById("muda_eu_carai").style.backgroundColor="white";
}

// Este m�todo mostra uma foto
function mostraFoto(){
	document.getElementById("fota").src="foto01.jpg";
}

// Este m�todo esconde um foto
function escondeFoto(){
	document.getElementById("fota").src="";
}