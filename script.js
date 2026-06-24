const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelectorAll('.nav a');

menuButton?.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
  menuButton.textContent = document.body.classList.contains('menu-open') ? 'Fechar' : 'Menu';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    if (menuButton) menuButton.textContent = 'Menu';
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section-reveal').forEach(section => revealObserver.observe(section));

const visual = document.querySelector('.hero-visual');
if (visual) {
  window.addEventListener('mousemove', event => {
    if (window.innerWidth < 1000) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;
    visual.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  });
}
