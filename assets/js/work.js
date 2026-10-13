const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    toggle.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    toggle.textContent = '☰';
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.classList.toggle('active', item === button));
  const filter = button.dataset.filter;
  projects.forEach(card => card.classList.toggle('hide', filter !== 'all' && !card.dataset.category.split(' ').includes(filter)));
}));