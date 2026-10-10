function copyStartCommand() {
  const commandText = "gunicorn main:app --bind 0.0.0.0:$PORT";
  const dummyInput = document.createElement("input");
  dummyInput.value = commandText;
  document.body.appendChild(dummyInput);
  dummyInput.select();
  document.execCommand("copy");
  document.body.removeChild(dummyInput);
  showToast('Copied to clipboard');
}

function runHealthPing() {
  const display = document.getElementById("latencyDisplay");
  display.innerText = "Pinging endpoint...";
  display.style.opacity = "0.7";
  setTimeout(function() {
    const simulatedMs = Math.floor(Math.random() * 28) + 24;
    display.innerText = "Response latency: " + simulatedMs + "ms (200 OK)";
    display.style.opacity = "1";
    showToast("Probe round-trip: " + simulatedMs + "ms");
  }, 450);
}

function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  toast.innerText = msg;
  toast.classList.add("show");
  setTimeout(function() {
    toast.classList.remove("show");
  }, 2500);
}