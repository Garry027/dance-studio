let controlls = document.querySelectorAll('.courses-controllers__btn');
let popups = document.querySelectorAll('.popup');
let popupClose = document.querySelectorAll('.popup__close');
let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.navigation');
let menuClose = document.querySelector('.navigation-close');
let formName = document.getElementById('name');
let formButton = document.querySelector('.form__submit');

let overlay = document.querySelector('.staff-popups-position');
let scrollPoint = document.querySelector('.staff');
let staffControlls = document.querySelectorAll('.staff-item__more');
let staffPopups = document.querySelectorAll('.staff-popup');
let staffClose = document.querySelectorAll('.staff-popup__btn')

let servicesHeadings = document.querySelectorAll('.services-mobile__title');

controlls.forEach(function(item, i){
    item.onclick = function(){
        popups[i].classList.add('popup-show');
    }
})

popupClose.forEach(function(item, i){
    item.onclick = function(){
        popups[i].classList.remove('popup-show');
    }
})

staffControlls.forEach(function(item, i){
    item.onclick = function(){
        staffPopups[i].classList.add('staff-popup-show');
        overlay.classList.add('staff-overlay');
        scrollPoint.scrollIntoView();
    }
})

staffClose.forEach(function(item, i){
    item.onclick = function(){
        staffPopups[i].classList.remove('staff-popup-show');
        overlay.classList.remove('staff-overlay');
    }
})
menuIcon.onclick = function(){
    menu.classList.add('show');
    menuIcon.classList.add('display-none');
};
menuClose.onclick = function(){
    menu.classList.remove('show');
    menuIcon.classList.remove('display-none');
}

servicesHeadings.forEach(function(item){
    item.onclick = function(){
        item.nextElementSibling.classList.toggle('display-block');
        item.classList.toggle('services-mobile--toggle')
    }
})
formName.oninput = function(){
    if(formName.value.length >= 20){
      formButton.disabled = true;
      formButton.classList.add('alert');
    }else{
      formButton.disabled = false;
      formButton.classList.remove('alert');
    }
  }; 
  
  let selector = document.querySelector('input[type="tel"]');
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(selector);
// Плавные якоря
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}