// Nav Bar

let box = document.querySelector(".one")
let toggleMenu = document.querySelector(".bars");
let menulinks = document.querySelector(".menu .container .links");
let bars = document.querySelector(".menu .container .one .bars");

toggleMenu.onclick = function () {
    menulinks.classList.toggle("show");
    bars.classList.toggle("show");
}

document.addEventListener("click", (e) => {
    if (e.target !== box) {
        menulinks.classList.remove("show");
        bars.classList.remove("show");
    };
});

box.onclick = function (e) {
    e.stopPropagation();
};

document.onkeyup = function (e) {
    if (e.key === "Escape") {
        menulinks.classList.remove("show");
        bars.classList.remove("show");
    };
};

// Contact Btn

let contactBtn = document.querySelector(".contact");
let contactBtnF = document.querySelector(".contact i:first-of-type");
let contactBtnL = document.querySelector(".contact i:last-of-type");
let contactBox = document.querySelector(".landing-page .contact-card");

contactBtn.onclick = function () {
    contactBtnL.classList.toggle("show");    
    contactBtnF.classList.toggle("show");    
    contactBox.classList.toggle("show")
}

// Show The Product With The Related Icon

let cards = document.querySelectorAll(".illustration .cards img");
let card1 = document.querySelectorAll(".illustration .cards:first-of-type");
let card4 = document.querySelectorAll(".illustration .cards:last-of-type");
let illustrationBox = document.querySelectorAll(".illustration .info .box")

cards.forEach(card => {
    card.addEventListener("click", (e) => {
        cards.forEach(card => {;
            card.classList.remove("active")
        });
        e.target.classList.add("active");
        illustrationBox.forEach(box => {
            illustrationBox.forEach(box => {
                box.classList.remove("active")
            });
            document.querySelector(e.target.dataset.relate).classList.toggle("active");
        });
    });
});

// Product Arrow Function

let leftProductArrow = document.querySelector(".illustration .options .left-arrow img");
let rightProductArrow = document.querySelector(".illustration .options .right-arrow img");

leftProductArrow.onclick = function () {
    cards.forEach(card => {
        if (card.classList.contains("active")) {
            if (card.parentElement.previousElementSibling === null) {
                return false;              
            };
            card.parentElement.previousElementSibling.firstElementChild.classList.add("active");
            illustrationBox.forEach(box => {
                box.classList.remove("active");
            });
            document.querySelector(card.parentElement.previousElementSibling.firstElementChild.dataset.relate).classList.add("active");
        };
        card.classList.remove("active");
    });
    return true;
};

rightProductArrow.onclick = function () {
    cards.forEach(card => {
        if (card.classList.contains("active")) {
            if (card.parentElement.nextElementSibling === null) {
                return false;
            };
            card.classList.remove("active");
            card.parentElement.nextElementSibling.classList.add("active");
        };
        if (card.parentElement.classList.contains("active")) {
            card.classList.add("active");
            illustrationBox.forEach(box => {
                box.classList.remove("active");
            });
            document.querySelector(card.dataset.relate).classList.add("active");
            card.parentElement.classList.remove("active");
        };
    });
    return true;
};

// Testimonials Arrow Function

let leftTestemolialArrow = document.querySelector(".testemonials .left-arrow");
let rightTestemolialArrow = document.querySelector(".testemonials .right-arrow");
let testemonialsSlide = document.querySelector(".testemonials .slider .slide");

let portion = 0;

rightTestemolialArrow.onclick = function () {
    if (window.innerWidth <= 768) {
        if (portion >= 188.69) {
            return false;
        }
        portion += 11.1;
        testemonialsSlide.style.cssText = `margin-left: -${portion}%;`;
    } else {
        if (portion >= 88.79) {
            return false;
        }
        portion += 5.55;
        testemonialsSlide.style.cssText = `margin-left: -${portion}%;`;
    };
    return true;
};

leftTestemolialArrow.onclick = function () {
    if (portion <= 0) {
        return false;
    };
    if (window.innerWidth <= 768) {
        portion -= 11.1;
        testemonialsSlide.style.cssText = `margin-left: -${portion}%;`;
    } else {
        portion -= 5.55;
        testemonialsSlide.style.cssText = `margin-left: -${portion}%;`;
    };
    return true;
};

let discountBtn = document.querySelector(".discount");

window.onscroll = function () {
    console.log(window.pageYOffset)
    if (window.innerWidth >= 768) {
        if (window.pageYOffset >= 4816) {
            discountBtn.style.cssText = `
                bottom: 5px;
                left: 84%;
            `
        } else {
            discountBtn.style.cssText = `
                bottom: 10px;
                left: 10px;
            `
        }
    }
    if (window.innerWidth <= 768) {
        if (window.pageYOffset >= 6711) {
            discountBtn.style.cssText = `
                bottom: 5px;
                left: 50%;
                transform: translateX(-50%);
            `
        } else {
            discountBtn.style.cssText = `
                bottom: 10px;
                left: 10px;
            `
        }
    }
    
}









