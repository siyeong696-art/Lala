const modal = document.querySelector('#bookingModal');
const toast = document.querySelector('#toast');
document.querySelectorAll('[data-booking]').forEach(el => el.addEventListener('click', () => {
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
  setTimeout(() => modal.querySelector('select').focus(), 180);
}));
document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); }
document.querySelector('#bookingForm').addEventListener('submit', e => {
  e.preventDefault(); closeModal(); e.target.reset(); toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
});
document.querySelector('#menuButton').addEventListener('click', () => document.querySelector('#services').scrollIntoView({behavior:'smooth'}));
document.querySelector('#infoLink').addEventListener('click', e => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); });
