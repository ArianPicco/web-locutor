window.addEventListener('scroll', function() {
    
    navbarScroll();
  });
  
  function navbarScroll() {
    var y = window.scrollY;
    if (y > 2) {
      $('.header-container').addClass('small');
    } else if (y < 2) {
      $('.header-container').removeClass('small');
    }
  }