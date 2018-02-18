// Este m�todo permite o uso arrastar e soltar
function allowDrop(ev) {
	ev.preventDefault();
}

// Este m�todo implementa a fun��o de arrastar
function arrastar(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

// Este m�todo implementa a fun��o de soltar
function soltar(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}