function getTime() {
  const hoursHand = document.querySelector('.clock__hand--hours');
  const minutesHand = document.querySelector('.clock__hand--minutes');
  const secondsHand = document.querySelector('.clock__hand--seconds');

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  console.log(hours, minutes, seconds);

  // Turn hours, minutes, and seconds into degrees
  hoursInDegrees = Math.trunc((hours / 12) * 360) + 90;
  minutesInDegrees = Math.trunc((minutes / 60) * 360) + 90;
  secondsInDegrees = Math.trunc((seconds / 60) * 360) + 90;
  console.log(hoursInDegrees, minutesInDegrees, secondsInDegrees);

  // Rotate clock hands according current time
  hoursHand.style.transform = `rotate(${hoursInDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesInDegrees}deg)`;
  secondsHand.style.transform = `rotate(${secondsInDegrees}deg)`;
}

setInterval(getTime, 1000);
