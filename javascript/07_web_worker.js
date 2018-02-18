// Este método inicia o web worker
var trabalhador;

function comecar() {
	if (typeof(Worker) !== "undefined") {
		if (typeof(trabalhador) == "undefined") {
			trabalhador = new Worker("07_web_worker_2.js");
		}
		trabalhador.onmessage = function(event) {
			document.getElementById("saida").innerHTML = event.data;
		};
	}
	else {
		document.getElementById("saida").innerHTML = "Seu navegador não suporta Web Workers";
	}
}

// Este método para o web worker
function parar() {
	trabalhador.terminate();
	trabalhador = undefined;
}