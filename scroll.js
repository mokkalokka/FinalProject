var frame = document.getElementById('module-frame');
var sections = frame.getElementsByTagName('section');

function slideTransition(i, n) {
  currentSection = sections[n];
  var offsetTop = currentSection.getBoundingClientRect();
  var scrolledDown = currentSection.offsetTop;
  window.scroll({
    top: (i * offsetTop.height) + scrolledDown,
    left: 0,
    behavior: 'smooth'
  });
}
