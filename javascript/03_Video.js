var coelho = document.getElementById("rabbit");

// Este m�todo pausa ou inicia o video
function pausar() {
	if (coelho.paused)
		coelho.play();	
	else
		coelho.pause();	
}

// Este m�todo aumenta largura do v�deo para 480px
function grande() {	
	coelho.width = 480;
}

// Este m�todo define a largura do v�deo para 320px
function deboas() {
	coelho.width = 320;
}