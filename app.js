const downBtn = document.querySelector(".down-button");
const upBtn = document.querySelector(".up-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slideCount = mainSlide.querySelectorAll("div").length - 1; // получаем кол во дивов
const container = document.querySelector(".container").clientHeight; // получаем высоту контейнера

let activeSlideIndex = 0;
sidebar.style.top = `-${slideCount * 100}vh`;

upBtn.addEventListener("click", () => {
    changeSlide("up");
});
downBtn.addEventListener("click", () => {
    changeSlide("down");
});

function changeSlide(direction) {
    if (direction === "up" && activeSlideIndex <= slideCount - 1) {
        activeSlideIndex++;
        console.log("up1", activeSlideIndex);
    } else if (direction === "down" && activeSlideIndex >= 1) {
        activeSlideIndex--;
        console.log("down2", activeSlideIndex);
    }

    const height = container;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
