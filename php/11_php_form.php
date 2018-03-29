<?php
  # Formulários no PHP

  # Esta função valida um dado enviado
  function valida_dado($dado) {
    # Remover espaços e tabs
    $dado = trim($dado);

    # Remover barras
    $dado = stripslashes($dado);

    # Remover tags HTML
    $dado = htmlspecialchars($dado);

    # Retornar dado limpo
    return $dado;
  }

  # Esta função exibe os dados que foram submetidos via formulário
  function exibir_dados() {
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
      $nome = valida_dado($_POST['nome']);
      $telefone = valida_dado($_POST['telefone']);
      $email = valida_dado($_POST['email']);
      $tipo = valida_dado($_POST['tipo']);
    }
  }
?>
<!doctype html>
<html>
  <head>
    <title>Formulários no PHP</title>
  </head>
  <body>
    <h1>Formulários no PHP</h1>
    <hr/>
    <p>Aqui veremos como validar um formulário</p>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
      <label>Nome <br/>
      <input name="nome" type="text" maxlength="50" placeholder="Digite seu nome"> <br/>
      <label>Telefone <br/>
      <input name="telefone" type="text" maxlength="11" placeholder="Digite seu telefone"> <br/>
      <label>Email <br/>
      <input name="email" type="email" maxlength="50" placeholder="Digite seu email"> <br/>
      <input name="tipo" type="radio" value="casamento">Casamento <br/>
      <input name="tipo" type="radio" value="new_born">New Born <br/>
      <input type="submit" value="Enviar">
    </form>
    <hr/>
    <h2>Os dados enviados foram estes</h2>
    <p><?php exibir_dados(); ?></p>
  </body>
</html>
