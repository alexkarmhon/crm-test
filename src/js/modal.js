const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelectorAll('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const overlay = document.querySelector('.modal__overlay');

const toggleModal = () => {
  document.body.classList.toggle('modal-open');
  modal.classList.toggle('modal--hidden');
};

openModalBtn.forEach(function (btn) {
  btn.addEventListener('click', toggleModal);
});
closeModalBtn.forEach(function (btn) {
  btn.addEventListener('click', toggleModal);
});

overlay?.addEventListener('click', toggleModal);
