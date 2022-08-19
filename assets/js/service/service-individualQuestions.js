const servicesQuestions = (()=>{

  const services = document.querySelectorAll(".service-questions__title")
  services?.forEach(item => {
    item.addEventListener("click", ()=> {

      //Verifica se o item já estga ativo
      if(item
      ?.closest(".service-questions__item")
      ?.classList
      .contains("service-questions__active")) {
        removeClassAtivo();
      return;
      }
      
      removeClassAtivo()
      ativaNovoItem()
      
      //Fecho qualquer outro item que esteja aberto
      function removeClassAtivo() {
        document.querySelector(".service-questions__active")
        ?.classList.remove("service-questions__active");
      }

      //Adiciona a classe no novo item
      function ativaNovoItem() {
        item
        ?.closest(".service-questions__item")
        ?.classList.add("service-questions__active");
      }

    })
  })

})()
