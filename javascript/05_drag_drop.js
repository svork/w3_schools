// Este método permite o uso arrastar e soltar
function allowDrop(ev) {
	ev.preventDefault();
}

// Este método implementa a função de arrastar
function arrastar(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

// Este método implementa a função de soltar
function soltar(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}