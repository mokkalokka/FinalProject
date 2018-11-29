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
  var menyKnapp = document.getElementsByClassName("roundBorder")[0];
  if (x.style.display === "block") {
    x.style.display = "none";
    menyKnapp.style.display = "block";
  } else {
    x.style.display = "block"
    menyKnapp.style.display = "none";
  }
}
