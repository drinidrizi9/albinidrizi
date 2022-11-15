const img1 = document.querySelector(".instagram");
const img2 = document.querySelector(".behance");
const img3 = document.querySelector(".linked-in");

const links = [img1, img2, img3];

let startFunction = () => {
    for (let i = 0; i <= links.length; i++) {
        setInterval(() => {

            if (links[i].classList.contains("behance")) {
                links[i].style.transform = 'scale(1.2) translateY(0px)';
                links[i].style.opacity = 1;
            } else {
                links[i].style.transform = 'translateY(0px)';
                links[i].style.opacity = 1;
            }

        }, i * 100);

        if(i === 2){
            console.log("Loop Done.");
            break;
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    let interval = setInterval(() => {
    startFunction();
    // clearInterval(interval);
    }, 5200);
})