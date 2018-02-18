// Este m�todo verifica se o navegador suporta Web Storage e guarda um valor de teste
function guarda() {
	if (typeof(Storage) !== "undefined") {
		// Guardar dados
		localStorage.setItem("nome", "Pepeka do Mal");

		// Recuperar dados
		document.getElementById("resultado").innerHTML = localStorage.getItem("nome");
	}
	else {
		document.getElementById("resultado").innerHTML = "Seu navegador n�o suporta Web Storage";
	}
}

// Este m�todo conta quantas vezes um bot�o foi clicado. Ao fechar a aba do navegador, o valor permane�e(localStorage)
function conta_click() {
	if (typeof(Storage) !== "undefined") {
		if (localStorage.clickcount) {
			localStorage.clickcount = Number(localStorage.clickcount) + 1;
		}
		else {
			localStorage.clickcount = 1;
		}
		document.getElementById("numero_click").innerHTML = "Voc� clicou " + localStorage.clickcount + " vezes.";
	}
	else {
		document.getElementById("numero_click").innerHTML = "Seu navegador n�o suporta Web Storage";
	}
}

// Este m�todo zera o contador de clicks
function zerar_click() {
	localStorage.clickcount = 0;
}

// Este m�todo conta o n�mero de clicks, usando sessionStorage, ou seja o dado � guardado enquanto a aba do navegador estiver aberta
function conta_click2() {
	if (typeof(Storage) !== "undefined") {
		if (sessionStorage.clickcount) {
			sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
		}
		else {
			sessionStorage.clickcount = 1;
		}
		document.getElementById("numero_click2").innerHTML = "Voc� clicou " + sessionStorage.clickcount + " vezes";
	}
	else {
		document.getElementById("numero_Click2").innerHTML = "Seu navegador n�o suporta Web Storage";
	}
}