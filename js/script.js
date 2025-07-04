document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.hero-section::before'); // won't work directly

  // So we target the .hero-section and use inline style
  const hero = document.querySelector('.hero-section');

  hero.addEventListener('mousemove', (e) => {
    const { left, top } = hero.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    hero.style.setProperty('--mouse-x', `${x}px`);
    hero.style.setProperty('--mouse-y', `${y}px`);
  });
});
