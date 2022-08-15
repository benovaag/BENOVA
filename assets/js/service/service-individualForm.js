function openForm() {
  document
    .querySelector(".service-talk__button")
    .classList.toggle("service-talk__open");
  document.querySelector(".contact").classList.toggle("contact-open");
  document.querySelector(".footer").classList.toggle("footer-close");

  if (document.querySelector(".footer").classList.contains("footer-close")) {
    document.querySelector(".service-talk__button").innerHTML =
      "Fechar formulário";
  } else {
    document.querySelector(".service-talk__button").innerHTML =
      "Quero conversar com um consultor";
  }
}
