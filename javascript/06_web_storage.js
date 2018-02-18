// Este método verifica se o navegador suporta Web Storage e guarda um valor de teste
function guarda() {
	if (typeof(Storage) !== "undefined") {
		// Guardar dados
		localStorage.setItem("nome", "Pepeka do Mal");

		// Recuperar dados
		document.getElementById("resultado").innerHTML = localStorage.getItem("nome");
	}
	else {
		document.getElementById("resultado").innerHTML = "Seu navegador não suporta Web Storage";
	}
}

// Este método conta quantas vezes um botão foi clicado. Ao fechar a aba do navegador, o valor permaneçe(localStorage)
function conta_click() {
	if (typeof(Storage) !== "undefined") {
		if (localStorage.clickcount) {
			localStorage.clickcount = Number(localStorage.clickcount) + 1;
		}
		else {
			localStorage.clickcount = 1;
		}
		document.getElementById("numero_click").innerHTML = "Você clicou " + localStorage.clickcount + " vezes.";
	}
	else {
		document.getElementById("numero_click").innerHTML = "Seu navegador não suporta Web Storage";
	}
}

// Este método zera o contador de clicks
function zerar_click() {
	localStorage.clickcount = 0;
}

// Este método conta o número de clicks, usando sessionStorage, ou seja o dado é guardado enquanto a aba do navegador estiver aberta
function conta_click2() {
	if (typeof(Storage) !== "undefined") {
		if (sessionStorage.clickcount) {
			sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
		}
		else {
			sessionStorage.clickcount = 1;
		}
		document.getElementById("numero_click2").innerHTML = "Você clicou " + sessionStorage.clickcount + " vezes";
	}
	else {
		document.getElementById("numero_Click2").innerHTML = "Seu navegador não suporta Web Storage";
	}
}