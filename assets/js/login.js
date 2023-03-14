const warapper = document.querySelector('.form_login')
const openLogin = document.querySelector('.login')
const openLogin2 = document.querySelector('.login-moble')
const hocNgay = document.querySelector('.hoc-ngay')
const openSignup = document.querySelector('.signup')
const closeLogin = document.querySelector('.bx-x')
const closeSigup = document.querySelector('.signup-menu>i')
const cardForm = document.querySelector('.card-form');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    cardForm.classList.add('active')
});

loginLink.addEventListener('click', ()=> {
    cardForm.classList.remove('active')
});

openLogin.addEventListener('click', ()=> {
    warapper.classList.add('show')
    cardForm.classList.remove('active') 
});

openLogin2.addEventListener('click', ()=> {
    warapper.classList.add('show')
    cardForm.classList.remove('active')
});

closeLogin.addEventListener('click', ()=> {
    warapper.classList.remove('show')
});

openSignup.addEventListener('click', ()=> {
    warapper.classList.add('show')
    cardForm.classList.add('active')
});

hocNgay.addEventListener('click', ()=> {
    warapper.classList.add('show')
    cardForm.classList.add('active')
});

closeSigup.addEventListener('click', ()=> {
    warapper.classList.remove('show')
});

