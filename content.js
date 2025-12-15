// -------------------- HIGHLIGHT UNLOCK --------------------
window.unlocked = false; // global for extras.js

// Select elements that can trigger the unlock
document.querySelectorAll('.highlightable').forEach(el => {
  el.addEventListener('mouseup', () => {
    if (window.unlocked) return; // already unlocked

    const selection = window.getSelection().toString().trim();

    // Trigger if any part of the full title is selected
    const targetPhrase = "Revision Hub";
    if (targetPhrase.toLowerCase().includes(selection.toLowerCase()) && selection.length > 0) {
      window.unlocked = true;
      alert("Resource Viewer unlocked"); // subtle alert
      // Optional: flash the element
      el.style.transition = "color 0.3s";
      el.style.color = "#2a9d8f";
    }
  });
});
