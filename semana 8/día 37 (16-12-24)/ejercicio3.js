let currentIndex = 0;

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const itemList = document.getElementById("item-list");
const items = document.querySelectorAll(".item");

const totalItems = items.length;

function moveToSlide(index) {
    const angle = -index * 100;
    itemList.style.transform = `translateX(${angle}%)`; 
    currentIndex = index;
}

function autoMove() {
    currentIndex = (currentIndex + 1) % totalItems; 
    moveToSlide(currentIndex);
}


setInterval(autoMove, 3000);

prev.addEventListener("click", function () {
    currentIndex = (currentIndex === 0 ? totalItems - 1 : currentIndex - 1);
    moveToSlide(currentIndex);
});

next.addEventListener("click", function () {
    currentIndex = (currentIndex === totalItems - 1 ? 0 : currentIndex + 1); 
    moveToSlide(currentIndex);
});