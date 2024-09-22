const shareBtn = document.querySelector('.share__container');
const cardShare = document.querySelector('.card__share');


shareBtn.addEventListener('click', () => {
  shareBtn.classList.toggle('active');
  cardShare.classList.toggle('active');
});
