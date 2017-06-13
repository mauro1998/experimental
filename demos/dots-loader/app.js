function onLoad() {
  var dots = document.getElementsByClassName('dot');

  for (var i = 0; i < dots.length; i++) {
    var dot = dots[i];
    dot.animate([
      {
        transform: 'translateY(0px)',
        opacity: .5,
        offset: 0
      },
      {
        transform: 'translateY(-20px)',
        opacity: 1,
        offset: 0.777
      },
      {
        transform: 'translateY(-60px)',
        opacity: 0,
        offset: 1
      },
    ], {
      duration: 1500,
      iterations: Infinity,
      easing: 'ease',
      delay: (i * 0.15) * 1000
    });
  }
}
