function onLoad() {
  var cat = document.getElementById('cat');
  var duration = 1000;
  cat.animate([
    { backgroundPosition: '0 0' },
    { backgroundPosition: '0 -2400px' }
  ], {
    duration: duration,
    iterations: Infinity,
    easing: 'steps(12, end)'
  });
}
