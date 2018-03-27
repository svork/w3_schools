<?php
  # Constantes no PHP, mantem sempre o mesmo valor

  # Criação de uma Constante
  define("lua", 1969, FALSE);

  # Constantes são sempre Globais, podem ser acessadas dentro de uma função
  # Esta função acessa uma constante
  function teste() {
    echo lua;
  }
?>

<!doctype html>
<html>
  <head>
    <title>Constantes no PHP</title>
  </head>
  <body>
    <h1>Constantes no PHP</h1>
    <hr/>
    <p>Constante, ano que o homem foi a Lua: <?php echo lua; ?></p>
    <p>Função teste(): <?php teste(); ?></p>
  </body>
</html>
