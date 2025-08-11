
function animateOnScroll(element , top ) {
    gsap.fromTo(element , {
        x: 20,
        opacity: 0
    } ,{
        x:0,
        opacity: 1 ,
        duration:1,
        scrollTrigger: {
            trigger: element,
            start:top,
            toggleActions: "play none none none"
        }
    })
}

animateOnScroll(".range-cta-title" , "top 80%")
animateOnScroll(".butom-cta" , "top 80%")
