

window.addEventListener('load', function () {
  window.scrollTo(0, 0);
  
});


window.addEventListener('scroll', function () {
  navbarScroll();
});


function navbarScroll() {
  var y = window.scrollY;
  if (y > 2) {
    $('.header-container').addClass('small');
  } else if (y < 2) {
    $('.header-container').removeClass('small');
  }
};

/*

function scrollTo1() {
  var trabajosRealizadosButton = document.querySelector('#sobre-mi');
  var trabajosRealizadosSection = document.querySelector('#container-form');
  trabajosRealizadosButton.addEventListener('click', function () {
    window.scrollTo(200,200);
    console.log(trabajosRealizadosSection);
  });
};


scrollTo1();

*/ 