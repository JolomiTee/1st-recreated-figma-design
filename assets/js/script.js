const nav = document.getElementById("navbar");

window.addEventListener('scroll', ()=>{
    nav.classList.toggle('scrolled', window.scrollY > 0)
})