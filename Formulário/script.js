// vai retonar para o usuario que for logar  
function logar() {
    alert('Usuário logado com Sucesso!');
  }

 
 
function cadastrar() {
    // pegando o valor do nome pelos names
    var email = document.getElementById("email");
    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha")
  
    if (email.value == "") {
      alert("E-mail não informado");
      email.focus();
      return;
    }

     // verificar se o nome está vazio
     if (nome.value == "") {
        alert("Nome não informado");
    
        // Deixa o input com o focus
        nome.focus();
        // retorna a função e não olha as outras linhas
        return;
      }

    if (senha.value == "") {
      alert("Senha não informada");
      senha.focus();
      return;
    }
    alert("Formulário enviado!");
    // envia o formulário
    //formulario.submit();
  }