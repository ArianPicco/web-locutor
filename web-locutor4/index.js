


document.addEventListener('DOMContentLoaded', (event) => {


  
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



  scrollToMethodSobreMi();
  scrollToMethodTrabajos();
  scrollToMethodContact();


  playCero();
  

function scrollToMethodSobreMi(){
  const sobreMiButton = document.querySelector('#sobre-mi');
  const presentationToScroll = document.querySelector('.presentation');
  sobreMiButton.addEventListener('click', function(){
  presentationToScroll.scrollIntoView({behavior: "smooth", block: "start", inline: "end"});
  });
}

function scrollToMethodTrabajos(){
  const trabajosRbutton = document.querySelector('#trabajos-realizados');
  const trabajosRtoScroll = document.querySelector('#grid-section');
  trabajosRbutton.addEventListener('click', function(){
    trabajosRtoScroll.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  });
}

function scrollToMethodContact(){
  const contactButton = document.querySelector('#Contacto');
  const contacttoScroll = document.querySelector('#contact-box');
  contactButton.addEventListener('click', function(){
    contacttoScroll.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
  });
}


function playCero(){
  const audio0223 = document.querySelector('.audio');
  const play0223 = document.querySelector('#play0223');

  play0223.addEventListener('click', function(){
    audio0223.play();
  });
};

function pauseCero(){
  const audio0223 = document.querySelector('.audio');
  const play0223 = document.querySelector('#play0223');

  play0223.addEventListener('click', function(){
    audio0223.pause();
  });
};






});















