// -------------------- HIGHLIGHT UNLOCK --------------------
let unlocked = false;

document.querySelectorAll('.highlightable').forEach(el => {
  el.addEventListener('mouseup', () => {
    if (unlocked) return; // already unlocked
    const selection = window.getSelection().toString().trim();

    // Phrase trigger: "b"
    if (selection === "b") {
      unlocked = true;
      alert("Resource Viewer unlocked"); // subtle alert
      el.style.color = "#2a9d8f"; // visual hint
    }
  });
});
