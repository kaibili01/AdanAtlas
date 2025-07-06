document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const heroSection = document.querySelector('.hero-section');
  const heroOverlay = document.querySelector('.hero-overlay');

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `${r}, ${g}, ${b}`;
  }

  function updateSpotlightColor() {
    const newColor = getRandomColor();
    root.style.setProperty('--spotlight-color-base', newColor);
  }

  function updateSpotlightPosition() {
    // Get bounding rectangles
    const sectionRect = heroSection.getBoundingClientRect();
    const overlayRect = heroOverlay.getBoundingClientRect();

    // Calculate center of heroOverlay relative to heroSection as percentage
    const centerX = ((overlayRect.left + overlayRect.width / 2) - sectionRect.left) / sectionRect.width * 100;
    const centerY = ((overlayRect.top + overlayRect.height / 2) - sectionRect.top) / sectionRect.height * 100;

    // Set CSS variables with % units
    root.style.setProperty('--spotlight-x', `${centerX}%`);
    root.style.setProperty('--spotlight-y', `${centerY}%`);
  }

  // Initial set
  updateSpotlightColor();
  updateSpotlightPosition();

  // Update color every 4s (matches animation duration)
  setInterval(updateSpotlightColor, 4000);

  // Update position on resize (in case window size changes)
  window.addEventListener('resize', updateSpotlightPosition);
});
