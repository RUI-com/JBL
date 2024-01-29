/*=============== SHOW SCROLL UP ===============*/ 

window.addEventListener('scroll',()=>{
    const scrollUp =document.getElementById('scroll-up')
    this.scrollY >= 350 ?scrollUp.classList.add('show-scroll')
    :scrollUp.classList.remove('show-scroll')
})
