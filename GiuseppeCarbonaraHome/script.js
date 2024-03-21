/* icona menù e navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Spostarsi attraverso i section => menù inerente illuminato */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* menù quando si scorre verso il basso o si riduce finestra */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* togliere icona menù e navbar quando si clicca su link navbar (scendendo) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* animazioni quando si arriva alla sezione interessata */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .istruzione-container, .esperienze-box, .contatti form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .chi-sono-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .chi-sono-content', { origin: 'right' });

/* scritte che appaiono */
const type = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Software Developer'],
    typeSpeed: 150,
    backSpeed: 75,
    backDelay: 500,
    loop: true
});