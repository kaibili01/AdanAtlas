document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-section");

  // Track mouse position for spotlight
  document.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    hero.style.setProperty("--mouse-x", `${x}%`);
    hero.style.setProperty("--mouse-y", `${y}%`);
  });

  // Random spotlight tint colors
  const colors = [
    "rgba(255, 100, 100, 0.8)",  // red
    "rgba(100, 255, 200, 0.8)",  // mint
    "rgba(100, 150, 255, 0.8)",  // blue
    "rgba(200, 100, 255, 0.8)",  // violet
    "rgba(255, 220, 100, 0.8)",  // amber
    "rgba(255, 255, 255, 0.6)"   // soft white
  ];

  setInterval(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    hero.style.setProperty("--spotlight-color", randomColor);
  }, 4000); // Change every 4 seconds
});
