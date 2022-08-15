function validaFormulario() {
  document
    .querySelector(".form-button__submit")
    .addEventListener("click", (e) => {
      e.preventDefault();
      let campos = document.querySelectorAll(".form-field");
      //Verifica campos
      let campoObrigatorioVazio = false;
      campos.forEach(function (elemento, indice) {
        //Verifica se o campo é obrigatório e esta vazio
        if (campoObrigatorioVazio) return;
        if (
          elemento.classList.contains("form-field__required") &&
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
