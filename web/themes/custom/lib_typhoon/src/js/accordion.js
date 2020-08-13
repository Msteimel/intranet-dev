import anime from 'animejs/lib/anime.es.js';

const showItems = document.querySelectorAll('.lib-show--item');
let showAccordionAnimations = [];
let hideAccordionAnimations = [];

export function handleAccordionClick(e) {
  const showItem = e.currentTarget;
  const button = showItem.querySelector('.lib-show--title');
  const content = showItem.querySelector('.lib-show--content');
  const ariaValue = button.getAttribute('aria-selected');
  const contentNum = content.dataset.box;

  function showAccordion() {
    showAccordionAnimations[contentNum].play();
  }

  function hideAccordion() {
    hideAccordionAnimations[contentNum].play();
  }

  if (ariaValue === 'false') {
    showItem.classList.add('js-open');
    button.setAttribute('aria-selected', true);
    content.setAttribute('aria-expanded', true);
    showAccordion();
  } else {
    showItem.classList.remove('js-open');
    button.setAttribute('aria-selected', false);
    content.setAttribute('aria-expanded', false);
    hideAccordion();
  }
}

export const accordionAnimation = showItems.forEach(item => {
  const contentEl = item.querySelector('.lib-show--content');
  const contentNum = contentEl.dataset.box;
  const contentHeight = anime.get(contentEl, 'height', 'px');
  anime.set(contentEl, { height: 0 });

  showAccordionAnimations[contentNum] = anime({
    targets: contentEl,
    height: contentHeight,
    autoplay: false,
    easing: 'linear',
    duration: 100,
  });

  hideAccordionAnimations[contentNum] = anime({
    targets: contentEl,
    height: 0,
    autoplay: false,
    easing: 'linear',
    duration: 500,
  });

  item.addEventListener('click', handleAccordionClick);
});
