const homeServices = (()=>{

  const services = document.querySelectorAll(".services-header")
  services?.forEach(item => {
    item.addEventListener("click", ()=> {

      //Verifica se o item já estga ativo
      if(item
      ?.closest(".services-column")
      ?.classList
      .contains("services-column__active")) {
        removeClassAtivo();
      return;
      }
      
      removeClassAtivo()
      ativaNovoItem()
      
      //Fecho qualquer outro item que esteja aberto
      function removeClassAtivo() {
        document.querySelector(".services-column__active")
        ?.classList.remove("services-column__active");
      }

      //Adiciona a classe no novo item
      function ativaNovoItem() {
        item
        ?.closest(".services-column")
        ?.classList.add("services-column__active");
      }

    })
  })

})()
