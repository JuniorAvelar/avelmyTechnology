
    function animation(el , duration = 1 , topStart = 'top 80%') {
      gsap.fromTo(el ,{
        opacity: 0,
        x: -20,
      } , {
        opacity:1,
        duration,
        x:0,
        scrollTrigger: {
          trigger:el,
          start:topStart,
          toggleActions:'play none none none'
        }
      })
    } 

    function animationCards() {
      document.querySelector('#lineSVG').style.opacity = 1

      // one
      setTimeout(() => {
      animation('.process-card.one' , 0.2 , 'top 80%')
      },0)
  
      // two
      setTimeout(() => {
        animation('.process-card.two' , 1 , 'top 80%')
      },400)
  
      // three
      setTimeout(() => {
        animation('.process-card.three' , 1 , 'top 80%')
      },1700)
  
      // four
    setTimeout(() => {
          animation('.process-card.four' , 1, 'top 80%')
      },3000)
  
        // five
    setTimeout(() => {
          animation('.process-card.five' , 1, 'top 80%')
      },4000)
  
        // sixe
    setTimeout(() => {
          animation('.process-card.six' , 1, 'top 80%')
      },5000)
    }

     ScrollTrigger.create({
      trigger: "#lineSVG",
      start: "top 80%",
      once: true, // só executa uma vez
      onEnter: () => {
        new Vivus('lineSVG', {
          type: 'delayed',
          duration: 500,
          start: 'autostart'
        });
        animationCards()
      }
    });
    

     function animationY( el , topStart = 'top 80%') {
      gsap.fromTo(el , {
        y: 30,
        opacity:0
      } , {
        y:0,
        opacity:1,
        duration:1,
        scrollTrigger: {
          trigger:el,
          start:topStart,
          toggleActions:'play none none none'
        }
      })
    }

    animationY('.process-title') 
    animationY('.process-sub-title')






    

