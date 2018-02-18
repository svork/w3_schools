// Esta m�todo cria um ret�ngulo com linha cruzadas
function cruzado(){
	var r = document.getElementById("retangulo");
	var rc = r.getContext("2d");
	rc.moveTo(0, 0);
	rc.lineTo(400, 200);			
	rc.stroke();
	rc.moveTo(400, 0);
	rc.lineTo(0, 200);
	rc.stroke();
}

// Este m�todo cria um c�rculo dentro do ret�ngulo
function circulo(){
	var c = document.getElementById("retangulo");
	var cir = c.getContext("2d");
	cir.beginPath();
	cir.arc(95, 50, 40, 0, 2 * Math.PI);
	cir.stroke();
}

// Este m�todo escreve um texto comum dentro do ret�ngulo
function texto(){
	var t = document.getElementById("retangulo");
	var txt = t.getContext("2d");
	txt.font = "48px Arial";
	txt.fillText("Se acredita??", 10, 50);
}

// Este m�todo escreve um texto viad�o dentro do ret�ngulo
function texto_viadao(){
	var v = document.getElementById("retangulo");
	var viadao = v.getContext("2d");
	viadao.font = "48px Arial";
	viadao.strokeText("Viad�o", 50, 100);
}

// Este m�todo desenha um gradiente no ret�ngulo
function gradiente(){
	var g = document.getElementById("retangulo");
	var gr = g.getContext("2d");

	// Criar o gradiente, mudar de uma cor para outra
	var gradi = gr.createLinearGradient(255, 0, 0, 0);
	gradi.addColorStop(0, "red");
	gradi.addColorStop(1, "yellow");

	// Usar o gradiente no retangulo
	gr.fillStyle = gradi;
	gr.fillRect(0, 0, 400,200);
}