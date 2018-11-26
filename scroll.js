var frame = document.getElementById('module-frame');
var sections = frame.getElementsByTagName('section');
var transitionFormula = 'top .8s cubic-bezier(0.77, 0, 0.175, 1)';
frame.style.transition = transitionFormula;

function slideTransition(i, n) {

  currentSection = sections[n];
  var offsetTop = currentSection.getBoundingClientRect();
  var scrolledDown = currentSection.offsetTop;
  // Magisk formel, ikke rør, virker nå
  frame.style.top = (i * (-offsetTop.height - offsetTop.top)) + 'px';

  setTimeout(function() {
    // Flytt ordenlig scrollbar etter transistion
    frame.style.transition = 'none';
    frame.style.top = '';
    window.scrollTo(0, (i * offsetTop.height) + scrolledDown);
    frame.style.transition = transitionFormula;


    //Timeout lik som transistion time 0,8 s
  }, 800);
}
