/////////////      Slider      ///////////////
let slideIndex = 0;
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

function showSlide() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
}   

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide();
}

prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide();
})

nextBtn.addEventListener('click', () => {nextSlide()})

// Automatic slide change 
setInterval(() => {nextSlide();}, 7000);


///////////////        BurgerMenu          ////////////
function clickBurgerMunu () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('show')});
 
    navLinks.addEventListener('click', () => {
        navLinks.classList.remove('show')});
}

clickBurgerMunu();    

    
//////////////////     Login / Logout      /////////////////
const loginForm = document.querySelector('#loginForm');
const logoutBtn = document.querySelector('#logout');

loginForm.addEventListener('submit', (event) => {
    const adminName = 'kk';
    const adminPassword = '111';
    const usernameInput = document.querySelector('#username').value;
    const passwordInput = document.querySelector('#password').value;

    if (usernameInput === adminName && passwordInput === adminPassword) {
        showHideSections('admin');
        loginForm.reset();
    } else {
        event.preventDefault;
        alert('Invalid username or password. Please try again.');
    }
})

logoutBtn.addEventListener('click', () => {showHideSections('home')})


//////////////   Site navigation    ///////////
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const projectBtn = document.querySelector('#projectBtn');
const contactsBtn = document.querySelector('#contactsBtn');
const logoBtn = document.querySelector('#logoBtn');

function findCurrent() {
    for (let section of sections) {
        if (!section.classList.contains('hidden')) {
            return section;            
        }
    }
}

function showHideSections(linkId) {
    const currentSection = findCurrent(); 
    const footer = document.querySelector('footer');

    if (!currentSection.classList.contains(linkId)){
        currentSection.classList.add('hidden');

        if (currentSection.classList.contains('home')) {     // change
            footer.classList.remove('footer-for-home');      // footer
        }                                                    // background
        if (linkId == 'home') {                              // for
            footer.classList.add('footer-for-home');         // home
        }                                                    // page

        for (let section of sections) {
            if (section.classList.contains(linkId)) {
                section.classList.remove('hidden');
                break;
            }
        }
    }        
}

navLinks.forEach((link) => link.addEventListener('click', () => {showHideSections(link.id)}));

projectBtn.addEventListener('click', () => {showHideSections('projects')});

contactsBtn.addEventListener('click', () => {showHideSections('contacts')});

logoBtn.addEventListener('click', () => {showHideSections('home')});