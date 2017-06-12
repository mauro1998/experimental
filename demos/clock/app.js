function onLoad() {
  var date = new Date();
  var curSec = date.getSeconds();
  var curMin = date.getMinutes();
  var curHour = (date.getHours() - 12) + (curMin * 1 / 60);

  var lap = 360;
  var initDegHours = (curHour * lap) / 12;
  var initDegMin = curMin * lap / 60;
  var initDegSec = curSec * lap / 60;

  var seconds = document.getElementById('seconds');
  var minutes = document.getElementById('minutes');
  var hours = document.getElementById('hours');

  minutes.style.transform = 'rotate(' + initDegMin + 'deg)';
  hours.style.transform = 'rotate(' + initDegHours + 'deg)';

  var nHours = 12;
  var nMins = 60;
  var nSecs = 60;
  var milisec = 1000;

  // Adjust seconds:
  var rest = lap - initDegSec;
  var animSec = seconds.animate([
    { transform: 'rotate(' + initDegSec + 'deg)' },
    { transform: 'rotate(' + lap + 'deg)' }
  ], {
    duration: rest * (nSecs * milisec) / lap,
    easing: 'steps(' + (rest * 60 / lap) + ', end)'
  });

  // Normalize:
  animSec.onfinish = function() {
    seconds.animate([
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(' + lap + 'deg)' }
    ], {
      duration: nSecs * milisec,  // 1 Minute
      easing: 'steps(60, end)', // Show 60 frames in 1 minute - 1 frame per second
      iterations: Infinity
    });

    minutes.animate([
      { transform: 'rotate(' + (initDegMin += 6) + 'deg)' },
      { transform: 'rotate(' + (initDegMin + lap) + 'deg)' }
    ], {
      duration: nMins * nSecs * milisec, // 1 Hour
      easing: 'steps(60, end)', // Show 60 frames in 1 hour, 1 frame per minute
      iterations: Infinity
    });

    hours.animate([
      { transform: 'rotate(' + (initDegHours) + 'deg)' },
      { transform: 'rotate(' + (initDegHours + 30) + 'deg)' }
    ], {
      duration: nHours * nMins * nSecs * milisec, // 12 Hours
      easing: 'steps(60, end)', // Show 60 frames in 12 hours, 5 frames per hour
    });
  };
}
