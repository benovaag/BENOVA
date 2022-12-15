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

//Carossel
$(function(){
  $('.platforms-items').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
})
