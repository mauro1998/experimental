function onLoad() {
  var cat = document.getElementById('woman');
  var duration = 500;
  cat.animate([
    { backgroundPosition: '2048px 0' },
    { backgroundPosition: '0 0' }
  ], {
    duration: duration,
    iterations: Infinity,
    easing: 'steps(16, end)'
  });
}
