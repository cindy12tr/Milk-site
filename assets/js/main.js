/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header=document.getElementById('header')
    this.scrollY>=50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scrollUp')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections= document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
                sectionTop=current.offsetTop-50,
                sectionId=current.getAttribute('id'),
                sectionClass=document.querySelector('.nav-menu a[href*='+ sectionId+']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.right-con,.products-right,.steps-content,.footer-con`)
sr.reveal(`.soy-image`, {origin: 'bottom'})
sr.reveal(`.products-card`, {interval: 150})
sr.reveal(`.about-right,.right-test`, {origin: 'right'})
sr.reveal(`.about-left,.left-test`, {origin: 'left'})

/* FOOTER */
const year = document.getElementById('year')
year.innerHTML= (new Date().getFullYear());