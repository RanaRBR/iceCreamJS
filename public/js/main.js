let image = document.getElementById('movingImage');
let isMovingUp = true;

setInterval(() => {
    if (isMovingUp) {
        image.style.bottom = '100%'; // Déplace l'image vers le haut
    } else {
        image.style.bottom = '0'; // Ramène l'image à sa position initiale
    }
    isMovingUp = !isMovingUp; // Inverse la direction
}, 750); // Change la direction toutes les 750 ms (0,75 seconde)
//CAROUSSEL


document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let textContainer = document.querySelector('.texteCar');
    let prevButton = document.getElementById('previous');
    let nextButton = document.getElementById('next');
    let currentSlide = 0;
    let autoPlayInterval;

    let texts = [
        {
            content: "La dégustation de glaces artisanales était un vrai régal. Les saveurs étaient uniques, et l'accueil chaleureux a rendu l'expérience encore plus mémorable.",
            author: "Marri Fen"
        },
        {
            content: "Une expérience gustative inoubliable chez Romik ! Leurs sorbets aux fruits frais sont d'une fraîcheur incroyable, et l'accueil est toujours chaleureux.",
            author: "Julie Decoster"
        },
        {
            content: "Les glaces de Romik sont tout simplement divines ! Leur texture onctueuse et leurs saveurs originales m'ont complètement conquise. Un vrai régal pour les papilles !",
            author: "Jane Doe"
        }
    ];

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        slides[index].classList.add('active');
        textContainer.innerHTML = `
            <p>${texts[index].content}</p>
            <p class="fw-bold">${texts[index].author}</p>
        `;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 3000); 
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    nextButton.addEventListener('click', () => {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
    });

    startAutoPlay();

    showSlide(currentSlide);
});