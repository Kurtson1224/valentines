let opened = false;
let i = 0;

const letterText = `Happy Valentine's Day!
I hope your day is filled with love and happiness.

Forever yours,
Kurt`;

const nextBtn = document.getElementById("nextButton");

nextBtn.addEventListener("click", () => {
  // Optional smooth fade
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "Flores_Nilverti/FLORES.html";
  }, 800);
});

function openLetter() {
  if (opened) return;

  const envelope = document.querySelector(".envelope");
  envelope.classList.add("open");

  // Hide front text and button
  const frontText = document.querySelector(".envelope-text");
  if (frontText) {
    frontText.style.display = "none";
  }

  opened = true;
  typeWriter();
}

function typeWriter() {
  const txt = document.getElementById("typedText");

  if (i < letterText.length) {
    txt.innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  } else {
    const nextBtnContainer = document.getElementById("nextButtonContainer");
    nextBtnContainer.style.display = "block";
    nextBtn.classList.add("show");
  }
}
