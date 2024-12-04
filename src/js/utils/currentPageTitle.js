const currentLink = document.querySelector('.nav-bar__link--current');
const currentPageTitle = document.querySelector('.header__page-title');

const setCurrentPageTitle = () => {
  if (!currentLink) return;
  currentPageTitle.textContent = currentLink.textContent;
};

window.addEventListener('DOMContentLoaded', setCurrentPageTitle);
