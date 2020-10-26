const navList = document.querySelectorAll('.typhoon-side-nav--list');

export const navHighlight = navList.forEach(navCol => {
  const link = navCol.querySelector('.typhoon-side-nav--main-link');

  const currentURL = window.location.pathname;
  const getHREF = link.getAttribute('href');

  const cleanURL = currentURL.replace(/^\/|\/$/g, '');
  const cleanHREF = getHREF.replace(/^\/|\/$/g, '');

  if (cleanURL === cleanHREF) {
    navCol.classList.add('js-current');
  }
});
