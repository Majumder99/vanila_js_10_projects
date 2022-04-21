const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 Jan 2023";

const countDown = () => {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalseconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalseconds / 3600 / 24);
  const minutes = Math.floor(totalseconds / 60) % 60;
  const hours = Math.floor(totalseconds / 3600) % 24;
  const seconds = Math.floor(totalseconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEL.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
};

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);
