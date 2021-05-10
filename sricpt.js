const menufield = document.querySelector('.navbar')
const menubtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const upbnt = document.querySelector('.scroll-up-btn')


document.addEventListener('scroll', () => {
    if(window.scrollY > 20){
    menufield.classList.add("active")
    } else {
        menufield.classList.remove('active')
    }
    if(window.scrollY > 900){
        upbnt.classList.add('show')
    }else {
        upbnt.classList.remove('show')
    }
}) 

menubtn.addEventListener('click', () => {
    menu.classList.toggle('active') 
})

/* slide-up script */
upbnt.addEventListener('click', () => {
    document.body.scrollTop = 0;
})

/* typing animation script */
const typed = new Typed(".typing", {
    strings: ["Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})