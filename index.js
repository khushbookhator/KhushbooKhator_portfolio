const menu = document.querySelector(".menu")
const navOpen = document.querySelector(".hamburger")
const navClose = document.querySelector(".close")
const navBar = document.querySelector(".navbar")
const navLink = document.querySelector(".nav-item")



navOpen.addEventListener('click', () => {
  menu.classList.add("show");
})

navClose.addEventListener('click', () => {
  menu.classList.remove("show")
})

navLink.addEventListener('click', () => {
  menu.classList.remove("show")
})

// const navLeft = menu.getBoundingClientRect().left; 
// navOpen.addEventListener("click", () => {
//   if (navLeft < 0) {
//     menu.classList.add("show");
//     document.body.classList.add("show");
//     navBar.classList.add("show");
//   }
// });

// navClose.addEventListener("click", () => {
//   if (navLeft < 0) {
//     menu.classList.remove("show");
//     document.body.classList.remove("show");
//     navBar.classList.remove("show");
//   }
// });



//navbar fixation 
const navHeight = navBar.getBoundingClientRect().height
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset
  if(scrollHeight > navHeight){
    navBar.classList.add('fix-nav')
  }else{
    navBar.classList.remove('fix-nav')
  }
})

//GlideJs

const glide = document.querySelector(".glide")
if(glide)
  new Glide(glide, {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunc: 'ease-in-out',
    breakpoints: {
      996:{
        perView: 2
      },
      768: {
        perView: 1
      },
    },
  }).mount()

new TypeIt("#type1", {
    speed: 120,
    loop: true,
    waitUntilVisible: true
}).type("Full Stack Developer", {delay: 400}).pause(500).delete(20).type('Web Developer', {delay: 400}).pause(500).delete(9).go()

gsap.from(".logo", {opacity : 0, duration: 1, delay:0.5, y:-10})
gsap.from(".hamburger", {opacity : 0, duration: 1, delay:1, x:20})
gsap.from(".banner", {opacity : 0, duration: 1, delay:1.5, x:-200})
gsap.from(".hero h3", {opacity : 0, duration: 1, delay:2, y:-50})
gsap.from(".hero h1", {opacity : 0, duration: 1, delay:2.5, y:-45})
gsap.from(".hero h4", {opacity : 0, duration: 1, delay:3, y:-30})
gsap.from(".hero a", {opacity : 0, duration: 1, delay:3.5, y:50})

gsap.from(".nav-item", {opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2})
gsap.from(".icons span", {opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2})


