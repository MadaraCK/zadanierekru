const mobileNav = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');
const language = document.querySelector('.flags');
const language2 = document.querySelector('.flags2');

burgerIcon.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active'); 
})

language.addEventListener('click', function(){
    language2.classList.toggle('add_flags')
})