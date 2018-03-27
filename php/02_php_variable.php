<?php
  # Variáveis de escopo Global
  # Inteiro
  $valor1 = 45;
  
  # Double
  $valor2 = 32.102;

  # Boolean
  $valor3 = TRUE;

  # Null
  $valor4;
  
  # String
  $valor5 = "Teste Testado";

  # Duas variaveis para somar e mostrar o resultado
  $n1 = 34;
  $n2 = 12.012;
  
  # Esta função retorna a diferença entre dois valores
  function diferenca($a1, $a2) {
    # Variáveis de escopo local
    return $a1 - $a2; 
  }
  
  # Esta função acessa uma variável global
  function acessa_global() {
    global $valor1, $valor2;
    $soma = $valor1 + $valor2;
    return $soma;
  }

  # Esta função acessa variáveis globais, mas agora através do array GLOBALS
  function vetor_global() {
    return $GLOBALS['valor1'] * $GLOBALS['valor2'];
  }
  
  # Esta função usa uma variável static, ou seja, ao final da funçao, os valores são mantidos
  function estatico() {
    static $n1 = 0;
    echo $n1;
    $n1++;
  }
?>

<!doctype html>
<html>
  <head>
    <title>Variaveis</title>
  </head>
  <body>
    <h1>Variáveis em PHP</h1>
    <hr/>
    <p>Este é o valor de uma variável integer: <?php echo "$valor1"; ?></p>
    <p>Este é o valor de uma variável double: <?php echo "$valor2"; ?></p>
    <p>Este é o valor de uma variável boolean: <?php echo "$valor3"; ?></p>
    <p>Este é o valor de uma variável null: <?php echo "$valor4"; ?></p>
    <p>Este é o valor de uma variável string: <?php echo "$valor5"; ?></p>
    <hr/>
    <p>A soma é: <?php echo $n1 + $n2; ?></p>
    <hr/>
    <p>A diferença é: <?php echo diferenca(34, 12.012); ?></p>
    <br/>
    <p>A soma de duas variáveis globais: <?php echo acessa_global(); ?></p>
    <br/>
    <p>O produto de duas variáveis globais: <?php echo vetor_global(); ?></p>
    <br/>
    <p>Uma variável estática: <?php estatico(); estatico(); estatico(); ?></p>
  </body>
</html>
