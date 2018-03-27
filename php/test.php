<?php
  # IF Else no PHP

  # Esta função retorna se um número é maior que outro ou iguais
  function teste() {
    # Recebendo valores de um formulario
    $n1 = $_POST['n1'];
    $n2 = $_POST['n2'];

   if ($n1 > $n2) {
      echo "$n1 > $n2";
    } 
    else if ($n1 < $n2) {
      echo "$n1 < $n2";
    }
    else {
      echo "$n2 == $n1";
    }
  }
  teste();
?>
