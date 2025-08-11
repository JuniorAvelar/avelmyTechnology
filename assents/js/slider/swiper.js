var swiper = new Swiper('.swiper.portifolio', {
slidesPerView: 3,
direction: getDirection(),
navigation: {
  nextEl: '.next',
  prevEl: '.prev',
},
on: {
  resize: function () {
    swiper.changeDirection(getDirection());
  },
},  
});

// logica que ativa e desativa botões do slider
const cards = document.querySelectorAll(".swiper-slide.portifolio-card")
let contador = (cards.length - 3)

document.addEventListener('DOMContentLoaded' , () =>{
  if(contador == cards.length - 3) {
    document.querySelector('.prev').classList.add("disable")
  }
})

// button next
const nextBtn = document.querySelector('.next').addEventListener("click" , () => {
  contador -= 1
  if(contador != cards.length - 3) {
    document.querySelector('.prev').classList.remove("disable")
  }

  if(contador ==  0 ) {
    document.querySelector('.next').classList.add("disable")
  }
})

// button prev
  const prevBtn = document.querySelector(".prev").addEventListener('click' , () => {
  contador += 1
  if(contador > 0) {
    document.querySelector('.next').classList.remove("disable")
  }

  if(contador == cards.length - 3) {
    document.querySelector('.prev').classList.add("disable")
  }
})


function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}


// testimonials 
 var swipertestimonials = new Swiper(".mySwiper.testimonials", {
      cssMode: true,
      navigation: {
        nextEl: ".testimonials-button-next",
        prevEl: ".testimonials-button-prev ",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });


const cardstestimonials = document.querySelectorAll(".testimonials-card-control")
let contadortestimonials = (cardstestimonials.length)
console.log(contadortestimonials)

document.addEventListener('DOMContentLoaded' , () =>{
  if(contadortestimonials == cardstestimonials.length) {
    document.querySelector('.testimonials-button-prev').classList.add("disable")
  }
})

// button next
const nextBtntestimonials = document.querySelector('.testimonials-button-next').addEventListener("click" , () => {
  contadortestimonials -= 1
  console.log(contadortestimonials)

  if(contadortestimonials != cards.length) {
    document.querySelector('.testimonials-button-prev').classList.remove("disable")
  }

  if(contadortestimonials ==  1 ) {
    document.querySelector('.testimonials-button-next').classList.add("disable")
  }
})

// button prev
  const prevBtntestimonials = document.querySelector(".testimonials-button-prev").addEventListener('click' , () => {
  contadortestimonials += 1

  console.log(contadortestimonials)

  if(contadortestimonials > 1) {
    document.querySelector('.testimonials-button-next').classList.remove("disable")
  }

  if(contadortestimonials == cardstestimonials.length) {
    document.querySelector('.testimonials-button-prev').classList.add("disable")
  }
})
