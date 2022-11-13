const btn = document.getElementById('btn1');
let loading = document.querySelector('.loading-screen');
let title = document.getElementById('title');
let text1 = document.querySelector('.text1');
let logo = document.querySelector('.logo');
let staticText = document.querySelector('.static-text');

let func1 = () => {
    title.innerText = 'Albin Idrizi'
    loading.style.opacity = 0;
}
let func2 = () => {
    loading.style.display = 'none'
}
let func3 = () => {
    logo.style.transform = "translateY(0px)";
    logo.style.opacity = 1;
}
let func4 = () => {
    text1.style.transform = "translateX(0px)";
    text1.style.opacity = 1;

    staticText.style.transform = "translateX(0px)";
    staticText.style.opacity = 1;

    btn.style.transform = "translateX(0px)";
    btn.style.opacity = 1;
}


let interval1 = setInterval(() => {
    func1();
    clearInterval(interval1);
}, 5100);

let interval2 = setInterval(() => {
    func2();
    clearInterval(interval2);
}, 5500);

let interval3 = setInterval(() => {
    func3();
    clearInterval(interval3);
}, 5500);

let interval4 = setInterval(() => {
    func4();
    clearInterval(interval4);
}, 5200);