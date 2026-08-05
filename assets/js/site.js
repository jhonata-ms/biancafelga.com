const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.gallery-full .art-card').forEach((card) => {
      card.classList.toggle('hidden', filter !== 'todas' && card.dataset.type !== filter);
    });
  });
});

const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = `Olá, Bianca! Meu nome é ${data.get('nome')}. ${data.get('mensagem')}`;
  window.open(`https://wa.me/447397077578?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  const status = form.querySelector('.form-status');
  status.textContent = 'A conversa foi preparada no WhatsApp. Até já!';
});

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
