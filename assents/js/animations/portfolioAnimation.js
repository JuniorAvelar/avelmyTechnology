

function animation( el , topStart = 'top 80%') {
    gsap.fromTo(el , {
        y: 30,
        opacity:0,
    },{
      y:0,
      opacity:1,
      duration:1,
      scrollTrigger: {
        trigger: el,
        start: topStart,
        toggleActions: 'play none none none'
      }
    })
}

animation('.portifolio-title') 
animation('.portifolio-sub-title') 




