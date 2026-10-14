// Screen navigation
const screens = ["welcome", "birthday", "letter"];

function showScreen(screenId) {
  screens.forEach((id) => {
    document.getElementById(id).classList.toggle(
      "active",
      id === screenId
    );
  });
}

// Open birthday surprise
function openSurprise() {
  showScreen("birthday");
  createConfetti();
  burstHearts();
}

// Open birthday letter
function openMessage() {
  showScreen("letter");
  burstHearts();
}

// Reveal the final confession
function revealSecret() {
  const secret = document.getElementById("secret");
  const button = document.getElementById("revealButton");

  secret.classList.remove("hidden");
  button.style.display = "none";

  createConfetti();
  burstHearts();
}

// Start again
function restart() {
  document.getElementById("secret").classList.add("hidden");
  document.getElementById("revealButton").style.display = "";
  showScreen("welcome");
}

// Create floating hearts
function createHeart() {
  const container = document.getElementById("hearts");
  const heart = document.createElement("span");

  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = 15 + Math.random() * 20 + "px";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

// Heart burst effect
function burstHearts() {
  for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 70);
  }
}

// Keep hearts floating
setInterval(createHeart, 600);

// Birthday confetti
function createConfetti() {
  const container = document.getElementById("confetti");
  const colors = ["#ff8fab", "#ffd166", "#c9a7ff", "#f5a3c3"];

  for (let i = 0; i < 70; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDuration = 2 + Math.random() * 3 + "s";

    container.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 6000);
  }
}
