


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

  playParrilla()
  playCero();
  playLang();
  playRDS();
  playSTR();
  playAT();

function scrollToMethodSobreMi(){
  const sobreMiButton = document.querySelector('#sobre-mi');
  const presentationToScroll = document.querySelector('.presentation');
  sobreMiButton.addEventListener('click', function(){
    $('.header-container').addClass('small');
    
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
  const audio0223 = document.querySelector('#audio0223');
  const play0223 = document.querySelector('#play0223');
  play0223.addEventListener('click',function(){
    if(audio0223.paused){
      audio0223.play();
    } else {
      audio0223.pause();
    }
  })};

function playLang(){
  const audioLang = document.querySelector('#audioLang');
  const playLang = document.querySelector('#playLang');
  playLang.addEventListener('click',function(){
    if(audioLang.paused){
      audioLang.play();
    } else {
      audioLang.pause();
    }
  })};
  
function playParrilla(){
  const audioParrilla = document.querySelector('#audioParrilla')
  const playParrilla = document.querySelector('#playParrilla')
  playParrilla.addEventListener('click',function(){
  if(audioLang.paused){
    audioParrilla.play();
    } else {
      audioParrilla.pause();
    }
});



};

function playRDS(){
  const audioRDS = document.querySelector('#audioRDS')
  const playRDS = document.querySelector('#playRDS')
  playRDS.addEventListener('click',function(){
  if(audioRDS.paused){
    audioRDS.play();
    } else {
      audioRDS.pause();
    }
});};

function playSTR(){
  const audioSTR = document.querySelector('#audioSTR')
  const playSTR = document.querySelector('#playSTR')
  playSTR.addEventListener('click',function(){
  if(audioSTR.paused){
    audioSTR.play();
    } else {
      audioSTR.pause();
    }
});};

function playAT(){
  const audioAT = document.querySelector('#audioAT')
  const playAT = document.querySelector('#playAT')
  playAT.addEventListener('click',function(){
  if(audioAT.paused){
    audioAT.play();
    } else {
      audioAT.pause();
    }
});}; 
  

});

