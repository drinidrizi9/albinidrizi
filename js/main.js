const btn = document.getElementById('btn1');
let loading = document.querySelector('.loading-screen');
let title = document.getElementById('title');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let logo = document.querySelector('.logo');

window.addEventListener('load', () => {
    setTimeout(() => {
        title.innerText = 'Albin Idrizi'
        loading.style.opacity = 0;
    }, 5100);
    setTimeout(() => {
        loading.style.display = 'none'
    }, 5500);
    setTimeout(() => {
        first.style.opacity = 1;
    }, 500);
    setTimeout(() => {
        second.style.opacity = 1;
    }, 600);
    setTimeout(() => {
        third.style.opacity = 1
    }, 700);
    setTimeout(() => {
        logo.style.transform = 'translateY(0px)'
        btn.style.transform = 'translateY(0px)'
        btn.style.opacity = 1
    }, 700);
})



btn.addEventListener('click', () => {
    first.style.transition = '0.5s';
    second.style.transition = '0.5s';
    third.style.transition = '0.5s';
    first.style.opacity = 0;
    setTimeout(() => {
        second.style.opacity = 0;
    }, 200);
    setTimeout(() => {
        third.style.opacity = 0;
    }, 400);
    setTimeout(() => {
        btn.style.opacity = 0;
    }, 400);
})