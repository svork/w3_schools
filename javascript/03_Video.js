var coelho = document.getElementById("rabbit");

// Este método pausa ou inicia o video
function pausar() {
	if (coelho.paused)
		coelho.play();	
	else
		coelho.pause();	
}

// Este método aumenta largura do vídeo para 480px
function grande() {	
	coelho.width = 480;
}

// Este método define a largura do vídeo para 320px
function deboas() {
	coelho.width = 320;
}