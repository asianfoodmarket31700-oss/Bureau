// === Sticky nav state ===
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 20) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// === Mobile menu ===
const burger = document.getElementById('burger');
const links = document.querySelector('.nav__links');
burger?.addEventListener('click', () => {
  const open = links.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav__links a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// === Reveal on scroll ===
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  }
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// === Year ===
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
