(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
const adjustMainMargin = () => {
  const aside = document.querySelector("aside");
  const main = document.querySelector(".content");
  const wrapper = document.querySelector(".body-wrapper");
  const isWrapperBlock = getComputedStyle(wrapper).flexDirection === "column";
  if (aside && main && isWrapperBlock) {
    main.style.marginTop = `${aside.offsetHeight}px`;
    main.style.marginLeft = "0";
  } else {
    main.style.marginTop = "0";
    main.style.marginLeft = `${aside.offsetWidth}px`;
  }
};
window.addEventListener("load", adjustMainMargin);
window.addEventListener("resize", adjustMainMargin);
const currentLink = document.querySelector(".current");
const currentPageTitle = document.querySelector(".page-title");
const setCurrentPageTitle = () => {
  currentPageTitle.textContent = currentLink.textContent;
};
window.addEventListener("DOMContentLoaded", setCurrentPageTitle);
console.log("hello crm");
