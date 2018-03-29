<?php
  # Loops no PHP

  # Esta função faz um loop usando while
  function enquanto() {
    $i = 0;

    while ($i < 10) {
      echo $i;
      $i++;
    }
  }
  
  # Esta função usa um for para fazer um loop
  function para(){
    for ($i = 0; $i < 23; $i++) {
      echo "$i - ";
    }
  }

  # Esta função usa um foreach para iterar em um vetor
  function para_cada() {
    $girls = ["Juliana", "Jussara", "Layane"];
    foreach ($girls as $nome) {
      echo "Nome é $nome \n";
    }
  }

  # Esta função tem um valor default
  function padrao($n1 = 10) {
    echo var_dump($n1);
    echo $n1 + 5;
  }
?>
<!doctype html>
<html>
  <head>
    <title>Loops no PHP</title>
  </head>
  <body>
    <h1>Loops no PHP</h1>
    <hr/>
    <p>Enquanto: <?php enquanto(); ?></p>
    <p>Para: <?php para(); ?>
    <p>Para cada: <?php para_cada(); ?></p>
    <p>Valor Padrão: <?php padrao(23); ?></p>
  </body>
</html>
