function animateOnScroll(selector, offset = "top 70%", duration = 1) {
  gsap.fromTo(selector, {
    y: 30,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration,
    scrollTrigger: {
      trigger: selector,
      start: offset,
      toggleActions: "play none none none"
    }
  });
}

animateOnScroll(".service-title", "top 60%", 2);
animateOnScroll(".service-subtitle", "top 65%", 2);
animateOnScroll(".list-service-content", "top 60%", 2);
animateOnScroll(".service-info-control", "top 55%", 2);

animateOnScroll(".servivce-shape-4", "top 55%", 2);
animateOnScroll(".servivce-shape-5", "top 55%", 2);
animateOnScroll(".servivce-shape-6", "top 55%", 2);
animateOnScroll(".servivce-shape-7", "top 55%", 2);
animateOnScroll(".servivce-shape-8", "top 55%", 2);
animateOnScroll(".servivce-shape-9", "top 55%", 2);
