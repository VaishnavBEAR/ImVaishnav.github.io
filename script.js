/*=====================menu icons==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
   
};








/*==========scrolls section==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
        sections.forEach(sec =>{
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id=sec.getAttribute('id');

            if(top>= offset && top<offset+height){
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*='+ id +']').classList.add('active');
                });
            };
        });
       




    /*==========sticky nav bar==========*/






let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY>100);




menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*==========mode==========*/
let darkmodeIcon = document.querySelector('#dark-mode-icon');


darkmodeIcon.onclick = () =>{
    darkmodeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');

};

/*====================scroll reveal===========*/
ScrollReveal({// reset: true,
               distance: '80px',
                duration: 2000,
                delay: 200});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .heading', { origin:'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin:'right' });