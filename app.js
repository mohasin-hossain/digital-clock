// Clock div Reference
const clock = document.querySelector(".clock"),
  date = document.querySelector(".date");

// This function will execute through setInterval after every 1 second to update the time
const tick = () => {
  const now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds(),
    dateString = now.toDateString();

  const time = `
      <span>${hours}</span> :
      <span>${minutes}</span> :
      <span>${seconds}</span>
      `;

  const todaysDate = `
    <span>${dateString}</span>
    `;

  clock.innerHTML = time;
  date.innerHTML = todaysDate;
};

setInterval(tick, 1000);
