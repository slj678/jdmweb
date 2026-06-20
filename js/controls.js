// 可复用轮播控制：左右箭头 + 圆点指示器
export function createCarouselControls(container) {
  // 箭头按钮
  const prev = document.createElement('button');
  prev.className = 'carousel-button prev';
  prev.setAttribute('aria-label', '上一张');
  prev.innerHTML = '&#8249;';

  const next = document.createElement('button');
  next.className = 'carousel-button next';
  next.setAttribute('aria-label', '下一张');
  next.innerHTML = '&#8250;';

  // 圆点指示器容器
  const dots = document.createElement('div');
  dots.className = 'carousel-dots';

  container.appendChild(prev);
  container.appendChild(next);
  container.appendChild(dots);

  prev.addEventListener('click', () => container.dispatchEvent(new CustomEvent('carousel-prev')));
  next.addEventListener('click', () => container.dispatchEvent(new CustomEvent('carousel-next')));

  return { prev, next, dots };
}
