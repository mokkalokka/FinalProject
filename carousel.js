var slideIndex = 0;
showModule(slideIndex);

function changeModule(n) {
  showModule(slideIndex += n);
}

function showModule(n) {
  var modules = document.getElementsByClassName("module");
  slideIndex = ((slideIndex + modules.length) % modules.length);

  for (i = 0; i < modules.length; i++) {
    modules[i].style.display = "none"
  }
  modules[slideIndex].style.display = "grid"
}
