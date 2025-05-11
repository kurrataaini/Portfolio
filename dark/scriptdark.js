// Dark/Light mode toggle
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  toggleButton.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Project filter
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    cards.forEach(card => {
      const match = category === "all" || card.getAttribute("data-category") === category;
      card.style.display = match ? "block" : "none";
    });
  });
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Init AOS animation
AOS.init();
