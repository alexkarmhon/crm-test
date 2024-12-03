const currentLink = document.querySelector(".current");
const currentPageTitle = document.querySelector(".page-title");

const setCurrentPageTitle = () => {
  if (!currentLink) return;
  currentPageTitle.textContent = currentLink.textContent;
};

window.addEventListener("DOMContentLoaded", setCurrentPageTitle);
