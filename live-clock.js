function updateClock() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString('en-AU');
  const formattedDate = now.toLocaleDateString('en-AU');
  document.getElementById('clock').textContent = `${formattedDate} ${formattedTime}`;
}
setInterval(updateClock, 1000);
updateClock();
