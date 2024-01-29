/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

   

window.addEventListener('scroll', () =>{
  const scrollDown = window.scrollY

  document.querySelectorAll('section[id]').forEach(current =>{
const sectionHeight = current.offsetHeight,
  sectionTop = current.offsetTop - 58,
  sectionId = current.getAttribute('id'),
  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
sectionsClass.classList.add('active-link')
}else{
sectionsClass.classList.remove('active-link')
}                                                   
})
})
