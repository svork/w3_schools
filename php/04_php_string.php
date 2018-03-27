<?php
  # Vamos ver como o PHP lida com Strings

  # String de exemplo
  $t1 = "Isto é uma string, ou um vetor de char em C";
?>

<!doctype html>
<html>
  <head>
    <title>Strings no PHP</title>
  </head>
  <body>
    <h1>Strings no PHP</h1>
    <hr/>
    <p>String de Exemplo: <?php echo $t1; ?></p>
    <p>Comprimento: <?php echo strlen($t1); ?></p>
    <p>Quantidade de Palavras: <?php echo str_word_count($t1); ?></p>
    <p>Reverso: <?php echo strrev($t1); ?></p>
    <p>Posição: <?php echo strpos($t1, "vetor"); ?></p>
    <p>Substituir: <?php echo str_replace("vetor", "array", $t1); ?></p>
  </body>
</html>
