(() => {
  const filters = document.querySelector('.project-filters');
  if (!filters) return;

  const cards = [...document.querySelectorAll('.project-card')];
  const status = document.querySelector('#filter-status');
  filters.hidden = false;

  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;

    filters.querySelectorAll('button').forEach((filter) => {
      filter.setAttribute('aria-pressed', String(filter === button));
    });

    let visible = 0;
    cards.forEach((card) => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.kind !== button.dataset.filter;
      if (!card.hidden) visible++;
    });
    status.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'} shown`;
  });
})();

(() => {
  const gallery = document.querySelector('.art-gallery');
  const lightbox = document.querySelector('#art-lightbox');
  if (!gallery || !lightbox || typeof lightbox.showModal !== 'function') return;

  const image = document.createElement('img');
  image.className = 'art-lightbox-image';
  image.alt = '';
  lightbox.append(image);
  const close = lightbox.querySelector('.art-lightbox-close');
  let opener = null;

  gallery.querySelectorAll('a').forEach((link) => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.setAttribute('aria-controls', lightbox.id);
  });

  gallery.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    opener = link;
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    lightbox.showModal();
    document.documentElement.classList.add('art-lightbox-open');
  });

  close.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('close', () => {
    document.documentElement.classList.remove('art-lightbox-open');
    image.removeAttribute('src');
    opener?.focus({ preventScroll: true });
    opener = null;
  });
})();
