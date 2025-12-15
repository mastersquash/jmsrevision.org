// Main revision content logic
// Currently handles select & release trigger for extras

let unlocked = false;

// Check selection
document.querySelectorAll('.highlightable').forEach(el => {
  el.addEventListener('mouseup', () => {
    if (unlocked) return; // already unlocked
    const selection = window.getSelection().toString().trim();
    
    // Phrase trigger (example: "Energy" in Physics)
    if (selection === "Energy") {
      unlocked = true;
      alert("Resource Viewer unlocked"); // subtle alert, can remove if desired
      // optional: visual indicator
      el.style.color = "#2a9d8f"; // subtle color hint
    }
  });
});
