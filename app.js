//Toggle Menu//
let hamMenuOpen = document.querySelector(".toggle-btn");
let hamMenuClose = document.querySelector(".toggle-btn-primary")
let nav = document.querySelector("#nav");
let xBtn = document.querySelector(".menu-strip");


hamMenuOpen.addEventListener("click", () => {
    nav.classList.toggle("menu-close");
    xBtn.classList.remove("op");
})

hamMenuClose.addEventListener("click", () => {
    nav.classList.toggle("menu-close");
    xBtn.classList.toggle("op");
})

//Gsap Animation landing Page //

const tl = new TimelineMax();

tl.from(".landing-img-1", 2,
    {
        opacity: 0,
        ease: Power2.easeInOut
    })
    .from(".landing-img-2", 2,
        {
            opacity: 0,
            ease: Power2.easeInOut
        }, "-=2")
    .from(".intro-title-1", 1.5,
        {
            x: -10,
            opacity: 0,
            ease: Power2.easeInOut
        }, "-=.5")
    .from(".intro-title-2", 1.5,
        {
            x: 10,
            opacity: 0,
            ease: Power2.easeInOut
        }, "-=1.5")
    .from(".intro-subtitle", 1.5,
        {
            opacity: 0,
            ease: Power2.easeInOut
        }, "-=1")
    .from("#nav", 1,
        {
            opacity: 0,
            ease: Power2.easeInOut
        }, "-=1.5")
    .from(".logo", 1,
        {
            opacity: 0,
            ease: Power2.easeInOut
        }, "-=1.2")
    .from(".location-dir", 1.5,
        {
            y: 50,
            opacity: 0,
            ease: Power2.easeInOut
        }, "-=1.2")
    .from(".location-day", 1.5,
        {
            y: 50,
            opacity: 0,
            ease: Power2.easeInOut
        }, "-=1.1")

//ScrollMagic Animations//
const controller = new ScrollMagic.Controller();

//-------------------Scene-1-------------------//
const tl2 = new TimelineMax();
tl2.from(".wording-age", 2,
    {
        y: 20,
        ease: Power2.easeInOut
    })

let scene1 = new ScrollMagic.Scene({
    triggerElement: ".wording-age",
    triggerHook: 1,
    offset: 300
})
    .setTween(tl2)
    .addTo(controller);

//-------------------Scene-2-------------------//
const tl3 = new TimelineMax();
tl2.from(".menu-intro-img-vert", 2,
    {
        opacity: 0,
        ease: Power2.easeIn
    })
tl2.from(".menu-intro-img-hor", 2,
    {
        opacity: 0,
        ease: Power2.easeIn
    }, "-=2")
tl2.from(".menu-intro-text", 2,
    {
        y: 20,
        ease: Power2.easeIn
    }, "-=2.5")

let scene2 = new ScrollMagic.Scene({
    triggerElement: ".menu-intro",
    triggerHook: 1,
    offset: "200"
})
    .setTween(tl3)
    .addTo(controller);

//-------------------Scene-3-------------------//
const tl4 = new TimelineMax();
tl4.from(".menu-info", 1.5,
    {
        y: 50,
        ease: Power2.easeInOut
    })

let scene3 = new ScrollMagic.Scene({
    triggerElement: ".menu-info",
    triggerHook: 1,
    offset: 300
})
    .setTween(tl4)
    .addTo(controller);

//-------------------Scene-4-------------------//
const tl5 = new TimelineMax();
tl5.from(".about-img-1", 1,
    {
        x: -30,
        ease: Power2.easeIn
    })
tl5.from(".about-img-2", 1,
    {
        x: 30,
        ease: Power2.easeIn
    }, "-=1")
tl5.from(".about-intro", 1,
    {
        y: 20,
        ease: Power2.easeIn
    }, "-=.5")

let scene4 = new ScrollMagic.Scene({
    triggerElement: ".about",
    triggerHook: 1,
    offset: "300"
})
    .setTween(tl5)
    .addTo(controller);

//-------------------Scene-5-------------------//
const tl6 = new TimelineMax();
tl6.from(".feed", 1,
    {
        y: 100,
        ease: Power2.easeInOut
    })

let scene5 = new ScrollMagic.Scene({
    triggerElement: ".feed",
    triggerHook: 1,
    offset: 500

})
    .setTween(tl6)
    .addTo(controller);

//-------------------Scene-6-------------------//

const tl7 = new TimelineMax();
tl7.from(".contact", 1,
    {
        y: 100,
        ease: Power2.easeInOut
    })

let scene6 = new ScrollMagic.Scene({
    triggerElement: ".contact",
    triggerHook: 1,
    offset: 300

})
    .setTween(tl7)
    .addTo(controller);