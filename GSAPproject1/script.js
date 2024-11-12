function sectionOneAnim() {
  let tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    delay: 0.8,
  });

  gsap.from("nav i", {
    rotate: 360,
    duration: 0.6,
    opacity: 0,
    delay: 0.8,
    y: -30,
  });

  tl.from("#center .part1 h1", {
    opacity: 0,
    x: -300,
    duration: 0.7,
  });

  tl.from("#center .part1 p, #center button", {
    opacity: 0,
    x: -200,
    duration: 0.7,
  });

  tl.from(
    "#center .part2 img",
    {
      opacity: 0,
      duration: 0.4,
      ease: "power3.out",
    },
    "-=0.5"
  );

  tl.from(".imgBanner img", {
    y: 30,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    delay: 0.2,
  });
}

sectionOneAnim();

function sectionTwoAnim() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    },
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.8,
  });

  tl2.from(
    ".card.line1",
    {
      x: -200,
      opacity: 0,
      duration: 0.8,
    },
    "top"
  );

  tl2.from(
    ".card.black.line2",
    {
      x: 200,
      opacity: 0,
      duration: 0.8,
    },
    "top"
  );

  tl2.from(
    ".card.black.line3",
    {
      x: -200,
      opacity: 0,
      duration: 0.8,
    },
    "bottom"
  );

  tl2.from(
    ".card.line4",
    {
      x: 200,
      opacity: 0,
      duration: 0.8,
    },
    "bottom"
  );
}

sectionTwoAnim();

