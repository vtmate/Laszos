const navLinks = document.querySelector('.nav-links')

function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-0')
    navLinks.classList.toggle('top-[-100%]')
}