import anime from 'animejs/lib/anime.es.js';

export function mobileNavAnimation(e) {
  const sideNav = document.querySelector('.typhoon-side-nav--wrap');
  const mobileNavBtn = sideNav.querySelector('.typhoon-side-nav--mobile');
  const mobileNavEl = sideNav.querySelector('.typhoon-side-menu--wrap');
  const navHeight = anime.get(mobileNavEl, 'height', 'px');
  anime.set(mobileNavEl, { height: 0 });

  function openMobileNav() {
    anime({
      targets: mobileNavEl,
      height: navHeight,
      autoplay: false,
      easing: 'linear',
      duration: 200,
    }).play();
  }

  function closeMobileNav() {
    anime({
      targets: mobileNavEl,
      height: 0,
      autoplay: false,
      easing: 'linear',
      duration: 200,
    }).play();
  }

  function handleMobileNavClick(event) {
    const getAriaValue = mobileNavBtn.getAttribute('aria-expanded');
    const navLinks = sideNav.querySelectorAll('.typhoon-side-nav--sub-page');
    console.log(event.target);

    if (getAriaValue === 'false') {
      sideNav.classList.add('js-nav-open');
      mobileNavBtn.setAttribute('aria-expanded', true);
      openMobileNav();
    } else if (event.target === navLinks) {
      sideNav.classList.remove('js-nav-open');
      mobileNavBtn.setAttribute('aria-expanded', false);
      closeMobileNav();
    } else {
      sideNav.classList.remove('js-nav-open');
      mobileNavBtn.setAttribute('aria-expanded', false);
      closeMobileNav();
    }
  }

  sideNav.addEventListener('click', handleMobileNavClick);
}
