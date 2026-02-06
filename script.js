const noBtn = document.getElementById("noBtn");
const heading = document.querySelector("h1");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("click", () => {
    document.body.classList.add("choice-made");
  heading.textContent = "Wrong answer 😌 Try again.";
});

yesBtn.addEventListener("click", () => {
    document.body.classList.add("choice-made");

  heading.style.opacity = 0;
  heading.style.transform = "translateY(-10px)";

  setTimeout(() => {
    heading.textContent = "See you on Feb 14 ❤️";
    heading.style.opacity = 1;
    heading.style.transform = "translateY(0)";
  }, 400);

  yesBtn.disabled = true;
  noBtn.disabled = true;

  launchConfetti(200);
});

function launchConfetti(amount = 150) {
  const colors = ["#ff4d6d", "#ffd166", "#cdb4db", "#bde0fe", "#ffafcc"];

  for (let i = 0; i < amount; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.opacity = Math.random();
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}