<?php
  # Super Globais no PHP - Variáveis que podem ser acessadas de qualquer lugar
  
  # Variáveis de teste
  $a = 2;
  $b = 7;
  $c = "test";
  
  # Esta função serve apenas para testar um GLOBALS
  function teste(){
    return $GLOBALS['a'] + $GLOBALS['b'];
  }

  # Esta função exibe informações sobre o servidor
  function servidor() {
    echo "Nome do Script: " . $_SERVER['PHP_SELF'] . "<br/>";
    echo "Versão CGI: " . $_SERVER['GATEWAY_INTERFACE'] . "<br/>";
    echo "IP do Servidor: " . $_SERVER['SERVER_ADDR'] . "<br/>";
    echo "Nome do Servidor: " . $_SERVER['SERVER_NAME'] . "<br/>";
    echo "Servidor Web: " . $_SERVER['SERVER_SOFTWARE'] . "<br/>";
    echo "Protocolo: " . $_SERVER['SERVER_PROTOCOL'] . "<br/>";
    echo "Método de envio de dados: " . $_SERVER['REQUEST_METHOD'] . "<br/>";
    echo "Horário do request: " . $_SERVER['REQUEST_TIME'] . "<br/>";
    echo "Texto do Request: " . $_SERVER['QUERY_STRING'] . "<br/>";
    echo "Cabeçalho do Request: " . $_SERVER['HTTP_ACCEPT'] . "<br/>";
    echo "Tipo de caracteres: " . $_SERVER['HTTP_ACCEPT_CHARSET'] . "<br/>";
    echo "Cabeçalho do Servidor: " . $_SERVER['HTTP_HOST'] . "<br/>";
    echo "URL da Página: " . $_SERVER['HTTP_REFERER'] . "<br/>";
    echo "A página usa criptografia? (HTTPS): " . $_SERVER['HTTPS'] . "<br/>";
    echo "Ip do Cliente: " . $_SERVER['REMOTE_ADDR'] . "<br/>";
    echo "Nome do Cliente: " . $_SERVER['REMOTE_HOST'] . "<br/>";
    echo "Porta do Cliente: " . $_SERVER['REMOTE_PORT'] . "<br/>";
    echo "Caminho do Script: " . $_SERVER['SCRIPT_FILENAME'] . "<br/>";
    echo "Administrador do Servidor: " . $_SERVER['SERVER_ADMIN'] . "<br/>";
    echo "Porta do Servidor: " . $_SERVER['SERVER_PORT'] . "<br/>";
    echo "Versão Servidor: " . $_SERVER['SERVER_SIGNATURE'] . "<br/>";
    echo "Caminho do script atual: " . $_SERVER['SCRIPT_NAME'] . "<br/>";
    echo "URL da página atual: " . $_SERVER['SCRIPT_URL'] . "<br/>";
    echo "Caminho do script atual2: " . $_SERVER['PATH_TRANSLATED'] . "<br/>";
  }

  # Esta função usa a global REQUEST para obter dados de um formulário
  function pedido() {
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      $texto = $_REQUEST['delicia'];

      # Se a variável estiver vazia, mostre um erro
      # Mas ainda é melhor validar usando HTML ou mesmo JavaScript
      if (empty($texto)) {
        echo "Você não digitou nada, seu animal de teta!";
      }
      else {
        echo $texto;
      }
    }
  }
?>
<!doctype html>
<html>
  <head>
    <title>Super Globais no PHP</title>
  </head>
  <body>
    <h1>Super Globais no PHP</h1>
    <hr/>
    <p>Informações sobre o servidor</p>
    <p><?php servidor(); ?></p>
    <hr/>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
      <label>Digite seu nome <br/>
      <input name="delicia" type="text" maxlength="50" placeholder="Digite seu nome" required> <br/>
      <input type="submit" value="OK">
    </form>
    <p><?php pedido(); ?></p>
  </body>
</html>
