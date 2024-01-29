const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset: true,

})
sr.reveal(`.home__social , .favorite__container,.sponsor__container,footer`)
sr.reveal(`.home__title span:nth-child(1)`,{origin:'left',opacity:1})
sr.reveal(`.home__title span:nth-child(3)`,{origin:'right',opacity:1})
sr.reveal(`.home__tooltip, .home__button , .model__button`,{origin:'bottom'})
sr.reveal(`.about__data`,{origin:'left'})
sr.reveal(`.about__img,.model__tooltip`,{origin:'right'})