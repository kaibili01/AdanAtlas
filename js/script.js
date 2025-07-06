document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('spotlight-canvas');
  const ctx = canvas.getContext('2d');

  // Resize canvas to fill the viewport
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  // Pulsate radius bounds
  const radiusMin = 160;
  const radiusMax = 190;
  let radius = radiusMin;
  let growing = true;

  // Current spotlight color
  let color = getRandomColor();

  // Change color every 6 seconds smoothly
  setInterval(() => {
    color = getRandomColor();
  }, 6000);

  // Generate random rgba color with fixed opacity
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = 0.8;
    return `rgba(${r},${g},${b},${a})`;
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update radius for smooth pulsating effect
    if (growing) {
      radius += 0.4;
      if (radius >= radiusMax) growing = false;
    } else {
      radius -= 0.4;
      if (radius <= radiusMin) growing = true;
    }

    // Draw radial gradient centered spotlight
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.25, centerX, centerY, radius);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(animate);
  }

  animate();
});
