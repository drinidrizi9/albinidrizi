const img1 = document.querySelector(".instagram");
const img2 = document.querySelector(".behance");
const img3 = document.querySelector(".linked-in");

const links = [img1, img2, img3];

// links.forEach(element => {
//     console.log(element);
//     element.style.transform = "translateY(0px)";
// });

let startFunction = () => {
    for(let i = 0; i <= links.length; i++){
        setInterval(() => {

            if(links[i].classList.contains("behance")){
                links[i].style.transform = 'scale(1.2) translateY(0px)';
                links[i].style.opacity = 1;
            } else {
                links[i].style.transform = 'translateY(0px)';
                links[i].style.opacity = 1;
            }

        }, i * 100);
    }
};

let interval = setInterval(() => {
    startFunction();
    clearInterval(interval);
}, 5200);
