document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleNav');
  const nav = document.getElementById('navigation');
  const darkToggle = document.getElementById('darkToggle');
  const body = document.body;
  const showcase = document.getElementById('showcase');

  // Nav Toggle
  toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Dark Mode
  darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    darkToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
  });

  // Parallax Fallback (mobile/JS)
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    showcase.style.backgroundPositionY = `${scrollY * 0.5}px`;
  });
});
