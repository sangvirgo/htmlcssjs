let countdownDate;

function startCountdown() {
  const inputElement = document.getElementById("countdown-input");
  countdownDate = new Date(inputElement.value).getTime();

  if (isNaN(countdownDate)) {
    alert("Invalid date/time format. Please enter a valid date/time.");
    return;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  if (!countdownDate) {
    return;
  }

  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}
