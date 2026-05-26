(() => {
  const root = document.querySelector('#es-rc #es-rc-content');
  if (!root) return;

  const swiper = new Swiper(root.querySelector('.es-swiper'), {
    loop: true,
    autoHeight: true,
    pagination: {
      el: '.es-swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();
