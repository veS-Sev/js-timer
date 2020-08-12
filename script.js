let deadline = '2020-08-17';


function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date()),

    seconds = Math.floor((t / 1000) % 60),
    minutes = Math.floor((t / (1000 * 60)) % 60),
    hours = Math.floor((t / (1000 * 60 * 60)) % 60);

  return {
    'total': t,
    'seconds': seconds,
    'minutes': minutes,
    'hours': hours,
  };
}

function setTimer(id, endtime) {
  let timer = document.getElementById(id),
    seconds = timer.querySelector('.seconds'),
    minutes = timer.querySelector('.minutes'),
    hours = timer.querySelector('.hours'),
  timeInterval = setInterval(updateClock, 1000);
  console.log(seconds);

  function updateClock() {
    let t = getTimeRemaining(endtime);


    function addZero(num) {
      if (num <= 9) {
        return '0' + num;
      } else return num;
    }

    hours.textContent = addZero(t.hours);
    minutes.textContent = addZero(t.minutes);
    seconds.textContent = addZero(t.seconds);


    console.log(t.hours);

    if (t.total <= 0) {
      clearInterval(timeInterval);
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';

    }
  }
}
setTimer('timer', deadline);
