/*

function closeMenu() {
    var x = document.getElementById("dropdown");
    x.style.display = "none";
}

function openMenu() {
    var x = document.getElementById("dropdown");
    x.style.display = "block";

}

*/

function toggleMenu() {
  var x = document.getElementById("dropdown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block"
  }
}
