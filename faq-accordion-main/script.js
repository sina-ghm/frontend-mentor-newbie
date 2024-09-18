document.querySelectorAll('.accordion__question').forEach((item) => {
  item.addEventListener('click', function () {
    let next = item.nextElementSibling;

    next.classList.toggle('open');
    let plusIcon = item.children[0].getElementsByTagName('img')[0];
    let minusIcon = item.children[0].getElementsByTagName('img')[1];

    if (!next.classList.contains('open')) {
      plusIcon.style.display = 'block';
      minusIcon.style.display = 'none';
    }
    if (next.classList.contains('open')) {
      minusIcon.style.display = 'block';
      plusIcon.style.display = 'none';
    }
  });
});
