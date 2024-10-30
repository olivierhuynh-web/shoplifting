let selection = Splitting();

gsap.registerPlugin(ScrollTrigger);

gsap.from(selection[0].chars, {
  // transformOrigin: "bottom", // testez d'autres animations facilement
  // scaleY: 0,
  color: 'rgb(25,25,25)',
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.text-reveal',
    start: 'top 50%',
    end: 'bottom 50%',
    scrub: true,
  },
});

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 600);
});

gsap.ticker.lagSmoothing(0);
