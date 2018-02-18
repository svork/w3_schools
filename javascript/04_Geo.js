var a = document.getElementById("coordenada");

// Este m�todo escreve as coordenadas do usu�rio, longitude e latitude e cria um mapa usando Google Maps
function showPosition(position) {
	a.innerHTML = "Latitude: " + position.coords.latitude + 
		"<br> Longitude: " + position.coords.longitude;

	var coordenadas = position.coords.latitude + "," + position.coords.longitude;

	var mapa = "https://maps.googleapis.com/maps/api/staticmap?center="
	    	+ coordenadas + "&zoom=14&size=480x320&key=AIzaSyDiLv_P9a6ePQvUxuR3lbYmJEHm1ap0bi8";

	document.getElementById("imagem").innerHTML = "<img src='" + mapa + "' alt='Localiza��o do Usu�rio' style='border: 4px solid red'>";
}

// M�todo verifica se o navegador suporta geolocaliza��o e retorna a localiza��o do usu�rio
function getLocation() {	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, trataErro);
	}
	else {
		a.innerHTML = "O seu navegador n�o suporta geolocaliza��o.";
	}
}

// Este m�todo trata os erros que podem surgir da geolocaliza��o
function trataErro(error) {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			a.innerHTML = "Usu�rio n�o compartilhou sua localiza��o";
			break;

		case error.POSITION_UNAVAILABLE:
			a.innerHTML = "Localiza��o n�o dispon�vel";
			break;

		case error.TIMEOUT:
			a.innerHTML = "Tempo esgotado";
			break;

		case error.UNKNOWN_ERROR:
			a.innerHTML = "Erro desconhecido";
	}
}
