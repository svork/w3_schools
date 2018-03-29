<?php
  # Switch no PHP

  # Esta função mostra um mensagem de acordo com o dia da semana
  function semana() {

    # Variável dia recebe o dia da semana
    $dia = date("l");

    # Switch mostra o nome do dia
    switch ($dia) {
      case "Sunday":
        echo "Domingão do Faustão";
        break;
      case "Monday":
        echo "Vamos começar a semana";
        break;
      case "Tuesday":
        echo "Terça feira é dia de trabalhar";
        break;
      case "Wednesday":
        echo "Quarta é dia de BigMac";
        break;
      case "Thursday":
        echo "Quinta feira, sei la o que escrever...";
        break;
      case "Friday":
        echo "Que delícia de dia cara, vou tomar um suco de laranja";
        break;
      case "Saturday":
        echo "Sabadaço com Gilberto Barros, Kasinão hauhauhauahuah";
        break;
      default:
        echo "Deu ruim parceiro. Esta é a mensagem de erro do Renan Cascarano do UNASP";
    }
  }
?>

<!doctype html>
<html>
  <head>
    <title>Switch no PHP</title>
  </head>
  <body>
    <h1>Switch no PHP</h1>
    <hr/>
    <p>Mensagem do dia: <?php semana(); ?></p>
  </body>
</html>
