function initServices(elem, option) {
  document.addEventListener("click", function (e) {
    if (!e.target.matches(elem + " .service-questions__title")) return;
    else {
      if (
        !e.target.parentElement.classList.contains("service-questions__active")
      ) {
        if (option == true) {
          var elementList = document.querySelectorAll(
            elem + " .service-questions__answer"
          );
          Array.prototype.forEach.call(elementList, function (e) {
            e.classList.remove("service-questions__active");
          });
        }
        e.target.parentElement.classList.add("service-questions__active");
      } else {
        e.target.parentElement.classList.remove("service-questions__active");
      }
    }
  });
}

initServices(".service-questions__item", true);
