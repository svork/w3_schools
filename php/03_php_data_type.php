<?php
  # Aqui vamos ver os tipos de dados no PHP

  # String
  $texto = "Isto é um texto";
  
  # Integer
  $numero = 0;

  # Float or Double
  $flutuante = 3.14159;

  # Boolean
  $logico = FALSE;

  # Array
  $vetor = ["Juliana", "Jussara", "Antonia"];

  # Object
  # Criando uma classe
  class Animal {

    # Construtor
    function Animal() {
      $this -> nome = "Lobo";
    }
  }

  # Instanciando um objeto da class Animal
  $canideo = new Animal();

  # Mostrar um atributo do objeto 
  echo $canideo -> nome;

  # Null
  $nulo;
?>

<!doctype html>
<html>
  <head>
    <title>Tipos de Dados</title>
  </head>
  <body>
    <h1>Tipos de Dados em PHP</h1>
    <hr/>
    <p>Exemplo: <?php echo $texto; ?></p>
    <p>Tipo de Dado: <?php var_dump($texto); ?></p>
    <br/>
    <p>Exemplo: <?php echo $numero; ?></p>
    <p>Tipo de Dado: <?php var_dump($numero); ?></p>
    <br/>
    <p>Exemplo: <?php echo $flutuante; ?></p>
    <p>Tipo de Dado: <?php var_dump($flutuante); ?></p>
    <br/>
    <p>Exemplo: <?php echo $logico; ?></p>
    <p>Tipo de Dado: <?php var_dump($logico); ?></p>
    <br/>
    <p>Exemplo: <?php echo $vetor; ?></p>
    <p>Tipo de Dado: <?php var_dump($vetor); ?></p>
    <br/>
    <p>Exemplo: <?php #echo $canideo; ?></p>
    <p>Tipo de Dado: <?php var_dump($canideo); ?></p>
    <br/>
    <p>Exemplo: <?php echo $nulo; ?></p>
    <p>Tipo de Dado: <?php var_dump($nulo); ?></p>
    <br/>
  </body>
</html>
