


function animation( element,top, duration = 1 ) {
    gsap.fromTo(element , {
        y:30,
        opacity:0,
    } , {
        opacity:1,
        y:0,
        duration,
        scrollTrigger: {
            trigger:element,
            start:top,
            toggleActions:'play none none none'
        }
    })
}

function animationX( element,top, duration = 1 ) {
    gsap.fromTo(element , {
        x:- 30,
        opacity:0,
    } , {
        opacity:1,
        x:0,
        duration,
        scrollTrigger: {
            trigger:element,
            start:top,
            toggleActions:'play none none none'
        }
    })
}

function animationXN( element,top, duration = 1 ) {
    gsap.fromTo(element , {
        x:30,
        opacity:0,
    } , {
        opacity:1,
        x:0,
        duration,
        scrollTrigger: {
            trigger:element,
            start:top,
            toggleActions:'play none none none'
        }
    })
}

animation('.differences-title' , 'top 90%' ) 
animation('.differences-description' , 'top 90%' ) 

// cards 

animation('.differences-card.one' , 'top 90%')
animation('.differences-card.two' , 'top 70%' , )
animation('.differences-card.three' , 'top 50%',)


// shapes
animation('.shape-differences-1' , 'top 90%')
animation('.shape-differences-2' , 'top 70%' )
animation('.shape-differences-3' , 'top 50%' )

animationX('.differences-element-1' , 'top 60%' )
animationXN('.differences-element-2' , 'top 60%')






