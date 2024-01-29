export let ShowMenu = () => {
    const navMenu = document.getElementById('nav-menu')
    addEventListener('click',()=>{
      navMenu.classList.add('show-menu')
  })
  }
export let HeddingMenu = () => {
    const navMenu = document.getElementById('nav-menu')
    addEventListener('click',()=>{
      navMenu.classList.remove('show-menu')
  })
  }
export let RmoveMenuMobile = () => {
    const navMenu = document.getElementById('nav-menu')
     addEventListener('click',()=>{
      navMenu.classList.remove('show-menu')
  })
}


