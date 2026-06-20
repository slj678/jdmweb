import { createCarouselControls } from './controls.js';

const carousel = document.getElementById('homepage-carousel');
if (carousel) {
  const slides = Array.from(carousel.querySelectorAll('.slide'));
  const total = slides.length;
  if (total === 0) throw new Error('No slides found');

  let idx = 0;

  const { dots } = createCarouselControls(carousel);

  const dotEls = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', `第 ${i + 1} 张`);
    dot.addEventListener('click', () => goTo(i));
    dots.appendChild(dot);
    return dot;
  });

  function render() {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${(i - idx) * 100}%)`;
    });
    dotEls.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  function goTo(i) {
    dir = i >= idx ? 1 : -1;
    idx = i;
    render();
    resetAuto();
  }

  carousel.addEventListener('carousel-prev', () => {
    idx = (idx - 1 + total) % total;
    dir = -1;
    render();
    resetAuto();
  });

  carousel.addEventListener('carousel-next', () => {
    idx = (idx + 1) % total;
    dir = 1;
    render();
    resetAuto();
  });

  const AUTO_MS = 4000;
  let dir = 1;
  let timer = setInterval(() => {
    if (dir === 1 && idx === total - 1) dir = -1;
    else if (dir === -1 && idx === 0) dir = 1;
    idx = idx + dir;
    render();
  }, AUTO_MS);

  function resetAuto() {
    clearInterval(timer);
    timer = setInterval(() => {
      if (dir === 1 && idx === total - 1) dir = -1;
      else if (dir === -1 && idx === 0) dir = 1;
      idx = idx + dir;
      render();
    }, AUTO_MS);
  }

  render();
}
