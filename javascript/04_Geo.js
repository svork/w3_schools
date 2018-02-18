var a = document.getElementById("coordenada");

// Este método escreve as coordenadas do usuário, longitude e latitude e cria um mapa usando Google Maps
function showPosition(position) {
	a.innerHTML = "Latitude: " + position.coords.latitude + 
		"<br> Longitude: " + position.coords.longitude;

	var coordenadas = position.coords.latitude + "," + position.coords.longitude;

	var mapa = "https://maps.googleapis.com/maps/api/staticmap?center="
	    	+ coordenadas + "&zoom=14&size=480x320&key=AIzaSyDiLv_P9a6ePQvUxuR3lbYmJEHm1ap0bi8";

	document.getElementById("imagem").innerHTML = "<img src='" + mapa + "' alt='Localização do Usuário' style='border: 4px solid red'>";
}

// Método verifica se o navegador suporta geolocalização e retorna a localização do usuário
function getLocation() {	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, trataErro);
	}
	else {
		a.innerHTML = "O seu navegador não suporta geolocalização.";
	}
}

// Este método trata os erros que podem surgir da geolocalização
function trataErro(error) {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			a.innerHTML = "Usuário não compartilhou sua localização";
			break;

		case error.POSITION_UNAVAILABLE:
			a.innerHTML = "Localização não disponível";
			break;

		case error.TIMEOUT:
			a.innerHTML = "Tempo esgotado";
			break;

		case error.UNKNOWN_ERROR:
			a.innerHTML = "Erro desconhecido";
	}
}
