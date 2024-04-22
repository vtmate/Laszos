const navLinks = document.querySelector('.nav-links')

function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-0')
    navLinks.classList.toggle('top-[-100%]')
}

function openDonatePage(){
    window.location.href = './donate.html';
}

function openDonatePageFromIndex(){
    window.location.href = './src/donate.html';
}


// function toggleAccordion(){
//     // document.querySelector(".accordion-heading").classList.remove("hidden");
//     document.getElementById("accordion-collapse-body-1").classList.toggle("hidden");
// }

