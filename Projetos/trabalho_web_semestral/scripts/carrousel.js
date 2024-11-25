
let buttonLeft = document.querySelector(".carousel_button_left");
let buttonRight = document.querySelector(".carousel_button_right");
let carousel = document.querySelector(".carousel");
let itensCarousel = document.querySelectorAll(".carousel > li");

let positionCarousel = 1;

let rolarEsquerda = () => {
    if(positionCarousel == itensCarousel.length) {
        carousel.scroll(0,0);
        positionCarousel= 1;
    } else {
        carousel.scrollBy({
        top: 0,
        left: 1,
        behavior: "smooth",
        });
        positionCarousel++; 
    }
}

let timer = window.setInterval(() => {
    console.log(itensCarousel.length)
    rolarEsquerda();
}, 5000)

