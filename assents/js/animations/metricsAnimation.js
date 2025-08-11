function animateFromToScroll(target, fromVars, toVars, scrollStart = "top 70%") {
  gsap.fromTo(target, fromVars, {
    ...toVars,
    scrollTrigger: {
      trigger: target,
      start: scrollStart,
      toggleActions: "play none none none"
    }
  });
}

function animateInfinite(target, toVars) {
  gsap.to(target, {
    ...toVars,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

function animateCounter(targetSelector, finalValue, duration = 2) {
  const obj = { val: 0 };

  ScrollTrigger.create({
    trigger: targetSelector,
    start: "top 100%",
    once: true,
    onEnter: () => {
      gsap.to(obj, {
        val: finalValue,
        duration,
        ease: "power2.out",
        snap: { val: 1 },
        onUpdate: () => {
          document.querySelector(targetSelector).innerText = obj.val + "+";
        }
      });
    }
  });
}

// Métricas
animateCounter(".metrics-title.title500", 500, 2);
animateCounter(".metrics-title.title13", 13, 3);
animateCounter(".metrics-title.title2", 2, 4);
animateCounter(".metrics-title.title15", 15, 3);

// Outros elementos da seção de métricas
animateFromToScroll(".metrics-icon", { x: -30, opacity: 0 }, { x: 0, duration: 2, opacity: 1 }, "top 80%");
animateFromToScroll(".metrics-description", { y: 30, opacity: 0 }, { y: 0, duration: 2, opacity: 1 }, "top 90%");
