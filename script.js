document.addEventListener("DOMContentLoaded", function() {
  const bpmInput = document.getElementById("bpm");
  const heart = document.querySelector(".heart");

  function updateAnimation() {
    let bpm = parseFloat(bpmInput.value);
    if (isNaN(bpm) || bpm <= 0) {
      bpm = 60; // default value if input is invalid
    }
    // Calculate duration in seconds for one beat (one cycle)
    let duration = 60 / bpm;
    heart.style.animationDuration = duration + "s";
  }

  bpmInput.addEventListener("input", updateAnimation);

  // Set initial animation duration
  updateAnimation();
});
