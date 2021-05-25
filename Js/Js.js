let Btn = document.querySelector('.Btn');
let body = document.querySelector('body');
let darkMod = document.querySelector('.darkMod');
let contener = document.querySelector('.contener');
darkMod.addEventListener('click', () => {
    Btn.classList.toggle('active');
    body.classList.toggle('active');
    darkMod.classList.toggle('active');
    contener.classList.toggle('active');
});