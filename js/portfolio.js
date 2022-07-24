let loading = document.querySelector('.loading-screen');
let title = document.getElementById('title');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let logo = document.querySelector('.logo');

window.addEventListener('load', () => {

    setTimeout(() => {
        loading.style.opacity = 0;
        title.innerText = 'Albin Idrizi'
    }, 2000);
    setTimeout(() => {
        loading.style.display = 'none'
    }, 2500);
    setTimeout(() => {
        first.style.opacity = 1;
    }, 2100);
    setTimeout(() => {
        second.style.opacity = 1;
    }, 2300);
    setTimeout(() => {
        third.style.opacity = 1
    }, 2500);
    setTimeout(() => {
        logo.style.transform = 'translateY(0px)'
    }, 2500);

})