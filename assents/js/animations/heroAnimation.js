
function rotationAnimation(el , duration = 1) {
  gsap.to(el, {
    rotation: 360,
    duration,
    repeat: -1,
    ease: "linear",
  });
}


rotationAnimation('.shape-hero-img-1' , 30)
rotationAnimation('.shape-hero-img' , 30)


function animation(el , duration = 1 ) {
  gsap.fromTo(el , {
    y:10,
    opacity:0
  } , {
    y:0,
    opacity:1,
    duration
  })
}

function animationX(el , duration = 1 ) {
  gsap.fromTo(el , {
    x:-20,
    opacity:0,
    display:'none'
  } , {
    x:0,
    opacity:1,
    duration,
    display:'flex'
  })
 }


animation('.hero-title')
setTimeout(() => {animation('.hero-description')},600)
setTimeout(() => {animation('.hero-sub-description')},1000)
setTimeout(() => {animation('.button-hero')},1400)

// img
setTimeout(() => {animationX('.hero-img')},2200)
