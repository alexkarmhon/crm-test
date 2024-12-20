const adjustMainMargin = () => {
  const aside = document.querySelector('aside');
  const main = document.querySelector('.content');
  const wrapper = document.querySelector('.body__wrapper');

  const isWrapperBlock = getComputedStyle(wrapper).flexDirection === 'column';

  if (aside && main && isWrapperBlock) {
    main.style.marginTop = `${aside.offsetHeight}px`;
    main.style.marginLeft = '0';
  } else {
    main.style.marginTop = '0';
    main.style.marginLeft = `${aside.offsetWidth}px`;
  }
};

window.addEventListener('load', adjustMainMargin);
window.addEventListener('resize', adjustMainMargin);
