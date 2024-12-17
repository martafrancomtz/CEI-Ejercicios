var container = document.getElementById('container');
var carrousel = document.getElementById('carrousel');
var carrousels = document.getElementsByClassName('carrousel').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var carrouselsPerPage = 0;
var carrouselsCount = carrousels - carrouselsPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        carrouselsPerPage = 1;
    } else {
        if (w < 901) {
            carrouselsPerPage = 2;
        } else {
            if (w < 1101) {
                carrouselsPerPage = 3;
            } else {
                carrouselsPerPage = 4;
            }
        }
    }

    carrouselsCount = carrousels - carrouselsPerPage;

    if (currentPosition > carrouselsCount) {
        currentPosition -= carrouselsPerPage;
    }

    currentMargin = - (currentPosition * (100 / carrouselsPerPage));
    carrousel.style.marginLeft = currentMargin + "%";

    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }

    if (currentPosition < carrouselsCount) {
        buttons[1].classList.remove('inactive');
    }

    if (currentPosition >= carrouselsCount) {
        buttons[1].classList.add('inactive');
    }

    if (currentPosition <= 0) {
        buttons[0].classList.add('inactive');
    }
}

setParams(container.offsetWidth);

function carrouselRight() {
    if (currentPosition != 0) {
        carrousel.style.marginLeft = currentMargin + (100 / carrouselsPerPage) + '%';
        currentMargin += (100 / carrouselsPerPage);
        currentPosition--;
    }

    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }

    if (currentPosition < carrouselsCount) {
        buttons[1].classList.remove('inactive');
    }
}

function carrouselLeft() {
    if (currentPosition != carrouselsCount) {
        carrousel.style.marginLeft = currentMargin - (100 / carrouselsPerPage) + '%';
        currentMargin -= (100 / carrouselsPerPage);
        currentPosition++;
    }

    if (currentPosition == carrouselsCount) {
        buttons[1].classList.add('inactive');
    }

    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
}
