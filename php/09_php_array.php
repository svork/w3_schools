<?php
  # Arrays no PHP

  # Esta função ordena um vetor
  function ordenar(){

    # Criar um array, índice numérico, começando em zero
    $girls = ["Jussara", "Thaina", "Lilian", "Juliana", "Fernanda"];
    sort($girls);

    for($i = 0; $i < count($girls); $i++){
      echo $girls[$i];
      echo "<br/>";
    }
  }

  # Array assossiativo, key:value, semelhante a um dicionário em Python
  $car = ["Modelo"=>"VW", "Motor"=>"AP", "Ano"=>89];
?>
<!doctype html>
<html>
  <head>
    <title>Arrays no PHP</title>
  </head>
  <body>
    <h1>Arrays no PHP</h1>
    <hr/>
    <p>Elementos do vetor: <?php ordenar(); ?></p>
    <p>Elementos do vetor: <?php var_dump($car); ?></p>
    <p>Número de elementos do vetor: <?php echo count($car); ?></p>
    <p>Ordenação do vetor: <?php sort($car); ?></p>
  </body>
</html>
