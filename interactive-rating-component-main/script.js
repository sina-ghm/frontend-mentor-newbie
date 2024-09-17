const sectionRate = document.querySelector('.section-rate');
const sectionThank = document.querySelector('.section-thank');
const submitBtn = document.querySelector('.submit');
const ratings = document.querySelectorAll('.btn');
const num = document.querySelector('.num');

submitBtn.addEventListener('click', function () {
  sectionThank.classList.remove('hidden');
  sectionRate.style.display = 'none';
});

ratings.forEach((rate) => {
  rate.addEventListener('click', () => {
    num.textContent = rate.textContent;
  });
});
