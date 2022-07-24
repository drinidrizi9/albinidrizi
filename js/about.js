let loading = document.querySelector('.loading-screen');
let title = document.getElementById('title');
let logo = document.querySelector('.logo');

let firstParagraph = document.querySelector('.first-paragraph')
let secondParagraph = document.querySelector('.second-paragraph')
let thirdParagraph = document.querySelector('.third-paragraph')

window.addEventListener('DOMContentLoaded', () => {
    loading.style.opacity = 0;
    title.innerText = 'Albin Idrizi - About'
    setTimeout(() => {
        loading.style.display = 'none'
    }, 5500);
    setTimeout(() => {
        logo.style.transform = 'translateY(0px)'
    }, 700);
    setTimeout(() => {
        firstParagraph.style.transform = 'translateX(0vw)'
    }, 200);
    setTimeout(() => {
        secondParagraph.style.transform = 'translateX(0vw)'
    }, 400);
    setTimeout(() => {
        thirdParagraph.style.transform = 'translateX(0vw)'
    }, 600);
})