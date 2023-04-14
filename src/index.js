(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-icecream]'),
    closeModalBtn: document.querySelector('[data-modal-close-icecream]'),
    modal: document.querySelector('[data-modal-icecream]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('modal--is-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-icecoffee]'),
    closeModalBtn: document.querySelector('[data-modal-close-icecoffee]'),
    modal: document.querySelector('[data-modal-icecoffee]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('modal--is-hidden');
  }
})();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-milkshake]'),
    closeModalBtn: document.querySelector('[data-modal-close-milkshake]'),
    modal: document.querySelector('[data-modal-milkshake]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('modal--is-hidden');
  }
})();
