'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalText = document.querySelector('.modal-text');
const btnClose = document.querySelector('.close-modal');
const btnsOpen = document.querySelectorAll('.show-modal');

// Open modal with different paragraph
btnsOpen.forEach(btn => {
  btn.addEventListener('click', function () {
    modalText.textContent = this.dataset.text; // CHANGE TEXT
    modal.classList.remove('hidden'); // SHOW MODAL
    overlay.classList.remove('hidden'); // SHOW BACKGROUND
  });
});

// Close modal
btnClose.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// Close when clicking overlay
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
