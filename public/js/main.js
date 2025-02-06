// let buttons = document.querySelectorAll(".btnC");
// let slides = document.querySelectorAll(".slide");

// buttons.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     let calcul = e.target.id === "next" ? 1 : -1;
//     let slideActive = document.querySelector(".active");

//     newIndex = calcul + [...slides].indexOf(slideActive);
//     if (newIndex < 0) newIndex = [...slides].length - 1;
//     if (newIndex >= [...slides].length) newIndex = 0;

//     slides[newIndex].classList.add("active");

//     slideActive.classList.remove("active");
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide'); // Toutes les images
    const textContainer = document.querySelector('.texteCar'); // Conteneur du texte
    const prevButton = document.getElementById('previous'); // Bouton Précédent
    const nextButton = document.getElementById('next'); // Bouton Suivant
    let currentSlide = 0;

    // Données pour les textes (à adapter selon vos besoins)
    const texts = [
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

    // Afficher le slide actif
    function showSlide(index) {
        // Masquer tous les slides
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });

        // Mettre à jour le texte
        textContainer.innerHTML = `
            <p>${texts[index].content}</p>
            <p class="fw-bold">${texts[index].author}</p>
        `;
    }

    // Passer au slide suivant
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Revenir au slide précédent
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Écouteurs d'événements pour les boutons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Afficher le premier slide au chargement de la page
    showSlide(currentSlide);
});