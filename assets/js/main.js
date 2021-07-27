/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL Inicio*/
sr.reveal('.inicio__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.inicio__img',{delay: 400}); 
sr.reveal('.inicio__social-icon',{ interval: 200}); 

/*SCROLL Sobre mim*/
sr.reveal('.sobremim__img',{}); 
sr.reveal('.sobremim__subtitle',{delay: 400}); 
sr.reveal('.sobremim__text',{delay: 400}); 

/*SCROLL Habilidades*/
sr.reveal('.habilidades__subtitle',{}); 
sr.reveal('.habilidades__text',{}); 
sr.reveal('.habilidades__data',{interval: 200}); 

/*SCROLL CONTATO*/
sr.reveal('.contato__input',{interval: 200}); 
btnEnviar.addEventListener('click', () => {
    /* Pega a div de carregamento */
    let carregamento = document.querySelector('#carregamento')
    /* Mostra a div de carregamento, adicionando o 'flex' ao display */
    carregamento.style.display = 'flex'
 
    /* Pega o Form */
    let form = document.querySelector('form')
    /* Esconde o Form, mudando o display pra 'none' */
    form.style.display = 'none'
 })