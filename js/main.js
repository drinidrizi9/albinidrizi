const btn = document.getElementById('btn1');
let title = document.getElementById('title');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let logo = document.querySelector('.logo');

window.addEventListener('load', () => {
    setTimeout(() => {
        title.innerText = 'Albin Idrizi'
    }, 5100);
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







window.addEventListener('click touchstart', () => {
    let loadingscreen = document.querySelector('.loading-screen');
    if (loadingscreen.playing){

    }
    else {
        loadingscreen.play()
    }
})


// Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
//     get: function () {
//         return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
// }});

// .on('click touchstart', function () {
//     const videoElement = document.getElementById('home_video');
//     if (videoElement.playing) {
//         // video is already playing so do nothing
//     }
//     else {
//         // video is not playing
//         // so play video now
//         videoElement.play();
//     }
// });