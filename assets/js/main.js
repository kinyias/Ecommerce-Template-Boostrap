const back_to_top = document.querySelector('.back-to-top');
const header_top = document.querySelector('.header-top');
//Xu ly header top fixed và back to top
window.addEventListener('scroll', () => {
  console.log(back_to_top);
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header_top.classList.add('sticky');
    header_top.classList.add('navbar-stuck');
    back_to_top.classList.add('show');
  } else {
    header_top.classList.remove('sticky');
    header_top.classList.remove('navbar-stuck');
    back_to_top.classList.remove('show');
  }
});
$('.back-to-top').click(function () {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    800
  );
  return false;
});
