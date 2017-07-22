function onLoad() {
  var cat = document.getElementById('cat');
  var duration = 500;
  cat.animate([
    { backgroundPosition: '4096px 0' },
    { backgroundPosition: '0 0' }
  ], {
    duration: duration,
    iterations: Infinity,
    easing: 'steps(8, end)'
  });
}
