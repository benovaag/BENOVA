function validaFormulario() {
  document.querySelector(".formulario-botao").addEventListener("click", (e) => {
    e.preventDefault();
    let campos = document.querySelectorAll(".formulario-campo");
    //Verifica campos
    let campoObrigatorioVazio = false;
    campos.forEach(function (elemento, indice) {
      //Verifica se o campo é obrigatório e esta vazio
      if (campoObrigatorioVazio) return;
      if (
        elemento.classList.contains("campo-obrigatorio") &&
        elemento.value.length < 1
      ) {
        alert("Por favor, preencha os campos obrigatórios!");
        campoObrigatorioVazio = true;
      }
    });
    if (campoObrigatorioVazio) return;

    lert("Mensagem enviada com sucesso!");
    document.querySelector(".form").submit();
  });
}

// INICIA FUNÇÕES
validaFormulario();
