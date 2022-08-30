const btn = document.getElementById('btn1');
let loading = document.querySelector('.loading-screen');
let title = document.getElementById('title');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let logo = document.querySelector('.logo');

window.addEventListener('DOMContentLoaded', () => {
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


const modal = document.getElementById('modal')
let modalHeaderText = document.getElementById('modal-header-text')

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
    setTimeout(() => {
        modal.style.opacity = 1;
    }, 1000);
    setTimeout(() => {
        modalHeaderText.style.opacity = 1;
        modalHeaderText.style.transform = 'translateX(0px)'
    }, 1500);
    

})

const close = document.getElementById('close');
close.addEventListener('click', () => {

    modalHeaderText.style.opacity = 0;
    modalHeaderText.style.transform = 'translateX(-50px)'
    setTimeout(() => {
        modal.style.opacity = 0;
    }, 500);
    setTimeout(() => {
        btn.style.opacity = 1;
    }, 700);
    setTimeout(() => {
        third.style.opacity = 1;
    }, 900);
    setTimeout(() => {
        second.style.opacity = 1;
    }, 1200);
    setTimeout(() => {
        first.style.opacity = 1;
    }, 1400);
})
const gmailText = document.querySelector(".gmail");

gmailText.addEventListener('click', async () => {
    const content = document.getElementById('gmail').textContent;
    await navigator.clipboard.writeText(content)

    gmailText.style.color = 'var(--primary-color)'
    setTimeout(() => {
        gmailText.style.color = '#fff'
    }, 1000);
})