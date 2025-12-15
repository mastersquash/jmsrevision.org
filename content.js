// -------------------- SUBJECT CARDS --------------------
const subjects = [
  { title: "Maths", description: "Algebra, Geometry & more", icon: "📐", link: "subpages/maths.html" },
  { title: "Science", description: "Biology, Physics, Chemistry", icon: "🔬", link: "subpages/science.html" },
  { title: "History", description: "World events & timelines", icon: "📚", link: "subpages/history.html" },
  { title: "Coding", description: "Programming & algorithms", icon: "💻", link: "subpages/coding.html" }
];

const subjectsContainer = document.getElementById("subjects");

subjects.forEach(subject => {
  const card = document.createElement("div");
  card.className = "subject-card";

  const link = document.createElement("a");
  link.href = subject.link;

  const icon = document.createElement("div");
  icon.className = "icon";
  icon.textContent = subject.icon;

  const title = document.createElement("h2");
  title.textContent = subject.title;

  const desc = document.createElement("p");
  desc.textContent = subject.description;

  link.appendChild(icon);
  link.appendChild(title);
  link.appendChild(desc);
  card.appendChild(link);
  subjectsContainer.appendChild(card);
});

// -------------------- HIGHLIGHT UNLOCK --------------------
let unlocked = false;

document.querySelectorAll('.highlightable').forEach(el => {
  el.addEventListener('mouseup', () => {
    if (unlocked) return; // already unlocked
    const selection = window.getSelection().toString().trim();

    // Phrase trigger (example: "Energy" in Physics)
    if (selection === "Energy") {
      unlocked = true;
      alert("Resource Viewer unlocked"); // subtle alert
      el.style.color = "#2a9d8f"; // visual hint
    }
  });
});
