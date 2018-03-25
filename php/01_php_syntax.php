<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8"/>
    <meta name="Author" content="Rodrigo Costa"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="../css/02.css"/>
    <title>01 PHP Sintaxe</title>
  </head>
  <body>
    <?php
      # Isto é um comentário
      echo "<h1>Este é o meu primeiro arquivo PHP</h1>";
      echo "<hr/>";

      # Vamos criar uma variável
      # Esta variável é uma delícia huahauhauahuahauhahu
      $delicia = 10;

      # Exibindo o valor da variável
      echo "<p>O valor é $delicia</p>";
      
      # Nomes de variáveis são case-sensitive
      # O que acontece se der um echo em algo que não foi declarado?
      echo "<p>O valor é $DELICIA</p>";
      
      # O valor de uma variável que não foi declarada é NULL
      var_dump($DELICIA);
    ?>
  </body>
</html>
