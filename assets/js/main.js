// Mejoras progresivas: con JavaScript desactivado la navegación y las tarjetas siguen visibles.
document.documentElement.classList.add('js');

const toggle = document.querySelector('.nav-toggle');
const navigation = document.getElementById('site-navigation');

if (toggle && navigation) {
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú de navegación');
    navigation.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    navigation.classList.toggle('is-open', open);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
}

// Cada curso tiene sus propios botones y tarjetas para evitar filtros cruzados.
document.querySelectorAll('.portfolio-year-section').forEach((yearSection) => {
  const filterButtons = yearSection.querySelectorAll('.filter-button');
  const projectCards = yearSection.querySelectorAll('.project-detail-card');
  const filterStatus = yearSection.querySelector('.filter-status');
  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((current) => {
        const active = current === button;
        current.classList.toggle('is-active', active);
        current.setAttribute('aria-pressed', String(active));
      });
      let visibleCount = 0;
      projectCards.forEach((card) => {
        const categories = (card.dataset.category || '').split(/\s+/);
        card.hidden = filter !== 'all' && !categories.includes(filter);
        if (!card.hidden) visibleCount++;
      });
      if (filterStatus) filterStatus.textContent = visibleCount
        ? `${visibleCount} ${visibleCount === 1 ? 'práctica disponible' : 'prácticas disponibles'} en esta selección.`
        : 'Todavía no hay memorias verificadas para este módulo.';
    });
  });
});
