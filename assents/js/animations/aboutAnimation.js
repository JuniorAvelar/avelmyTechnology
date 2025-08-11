// Função para animações de entrada com scrollTrigger
function animateOnScroll(selector, options = {}) {
  const {
    start = "top 70%",
    duration = 1,
    y = 30,
    x = 0,
    opacity = 0
  } = options;

  gsap.fromTo(selector, {
    y,
    x,
    opacity
  }, {
    y: 0,
    x: 0,
    opacity: 1,
    duration,
    scrollTrigger: {
      trigger: selector,
      start,
      toggleActions: "play none none none"
    }
  });
}

// Função para animações infinitas com to()
function loopAnimation(selector, animation = {}) {
  gsap.to(selector, {
    ...animation,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

// === Animações de entrada ===
animateOnScroll(".about-section-title", { start: "top 100%" });
animateOnScroll(".about-section-subtitle", { start: "top 85%" });
animateOnScroll(".about-section-description", { start: "top 90%" });

animateOnScroll(".shape-0", { start: "top 60%", x: -30 });
animateOnScroll(".about-img", { start: "top 60%", x: -30 });
animateOnScroll(".shape-2", { start: "top 50%", x: -50, duration: 1 });
animateOnScroll(".shape-3", { start: "top 95%", x: -50, duration: 1 });

// === Animações contínuas ===
// loopAnimation(".shape-0", { y: -20, duration: 2 });

