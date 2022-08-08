function initServices(elem, option) {
  document.addEventListener("click", function (e) {
    if (!e.target.matches(elem + " .services-header")) return;
    else {
      if (
        !e.target.parentElement.classList.contains("services-column__active")
      ) {
        if (option == true) {
          var elementList = document.querySelectorAll(
            elem + " .services-items"
          );
          Array.prototype.forEach.call(elementList, function (e) {
            e.classList.remove("services-column__active");
          });
        }
        e.target.parentElement.classList.add("services-column__active");
      } else {
        e.target.parentElement.classList.remove("services-column__active");
      }
    }
  });
}

initServices(".services-column", true);
