/* Botão que está nas paginas individuais de cada serviço e na página outsourcing */

function openForm() {
  document
    .querySelector(".form-talk__button")
    .classList.toggle("form-talk__open");
  document.querySelector(".contact").classList.toggle("contact-open");
  document.querySelector(".footer").classList.toggle("footer-close");

  if (document.querySelector(".footer").classList.contains("footer-close")) {
    document.querySelector(".form-talk__button").innerHTML =
      "Fechar formulário";
  } else {
    document.querySelector(".form-talk__button").innerHTML =
      "Quero conversar com um consultor";
  }
}
