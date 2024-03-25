let tl = gsap.timeline()

tl.from("#nav img, #nav h3, #nav h4, #nav button", {
    y : -100,
    duration : 1,
    delay : 1,
    stagger : 0.5,
    opacity : 0
})

tl.from("#main h1", {
    y : 100,
    opacity : 0,
    stagger : 0.5
})

// tl.from("#main #left-img, #main #left-img2", {
//     opacity : 0,
//     stagger : 0.5,
//     scale : 0
// })

// tl.from("#main #right-img, #main #right-img2", {
//     opacity : 0,
//     stagger : 0.5,
//     scale : 0
// })

tl.from("#main>img", {
    scale : 0,
    opacity : 0,
    stagger : 0.3
})

tl.from("h5", {
    scale : 0,
    opacity : 0,
})

tl.to("h5", {
    y : 30,
    repeat : -1,
    yoyo : true,
    duration : 0.7
})
