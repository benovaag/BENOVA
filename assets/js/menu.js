function openMenu() {

  if(document.querySelector(".menu").classList.contains("menu-open")) {
    document.querySelector(".menu").classList.remove("menu-open");
    document.querySelector(".exibeConteudo").classList.remove("exibeConteudo")
  }else {
    document.querySelector(".menu").classList.add("menu-open");
    document.querySelector(".menu-item").classList.add("exibeConteudo")
  }
  document.querySelector(".header").classList.toggle("header-open");
  
}

function MouseOver(elem) {

  if(!elem?.classList?.contains("exibeConteudo")) {
    document.querySelector(".exibeConteudo").classList.remove("exibeConteudo")
    elem.classList.add("exibeConteudo")
  }

}

function MouseOut(elem) {
  console.log(elem)
  if(!document.querySelector(".menu-item").classList.contains("exibeConteudo")) {
    document.querySelector(".exibeConteudo").classList.remove("exibeConteudo")
    document.querySelector(".menu-item").classList.add("exibeConteudo")
  }

}