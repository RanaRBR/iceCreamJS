//MODAL

document.addEventListener("DOMContentLoaded", function () {
    function showModal(id) {
        // Ferme tous les modals ouverts avant d'afficher le nouveau
        document.querySelectorAll(".modal").forEach(modal => {
            modal.style.display = "none";
        });

        document.getElementById(id).style.display = "flex";
    }

    function closeModal(id) {
        document.getElementById(id).style.display = "none";
    }

    document.getElementById("login")?.addEventListener("click", () => showModal("loginModal"));

    document.querySelector(".lien")?.addEventListener("click", (event) => {
        event.preventDefault();
        showModal("registerModal");
    });

    document.querySelectorAll(".close").forEach(closeBtn => {
        closeBtn.addEventListener("click", function () {
            closeModal(this.closest(".modal").id);
        });
    });

    window.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal")) {
            closeModal(event.target.id);
        }
    });
});


//HOOVER

// let loginButton = document.querySelector('#login');

// loginButton.addEventListener("mouseover", function() {
//     loginButton.style.color = "#ffbedd"; 
// });

// loginButton.addEventListener("mouseout", function() {
//     loginButton.style.color = ""; 
// });


//DARK MODE 

// let mode = document.querySelector("body");
// let dark = document.querySelector("#boutonDark");
// let light = document.querySelector("#boutonLight");

// dark.addEventListener("click", function () {
//     if (mode.className === "lightMode") {
//         mode.className = "darkMode";
//     } else {
//         mode.className = "lightMode";
//     }
// });


let mode = document.querySelector("body");
let dark = document.querySelector("#boutonDark");
let light = document.querySelector("#boutonLight");

function toggleMode() {
    mode.classList.toggle("darkMode");
    mode.classList.toggle("lightMode");
    dark.style.display = mode.classList.contains("darkMode") ? "none" : "block";
    light.style.display = mode.classList.contains("darkMode") ? "block" : "none";
}

dark.addEventListener("click", toggleMode);
light.addEventListener("click", toggleMode);

window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    mode.classList.toggle("darkMode", isDark);
    mode.classList.toggle("lightMode", !isDark);
    dark.style.display = isDark ? "none" : "block";
    light.style.display = isDark ? "block" : "none";
};


//CHANGEMENT COULEUR BACKGROUND

document.addEventListener('DOMContentLoaded', () => {
    const grisElements = document.querySelectorAll('.gris');
    grisElements.forEach(grisElement => {
        grisElement.addEventListener('mouseover', () => {
            grisElement.style.backgroundColor = '#f8ecbf';
        });

        grisElement.addEventListener('mouseout', () => {
            grisElement.style.backgroundColor = '#f0f0f4';
        });
    });
});

let grisSpec = document.querySelector('.grisSpec');

grisSpec.addEventListener("mouseover", function(){
    grisSpec.style.backgroundColor = '#f8ecbf';
})


grisSpec.addEventListener("mouseout", function(){
    grisSpec.style.backgroundColor = '#f0f0f4';
})



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



//MENU BURGER


function toggleMenu() {
    const navbar = document.querySelector('.navB');
    const burger = document.querySelector('.burger');

    // Écouteur d'événements pour le bouton burger
    burger.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav'); // Ajoute ou enlève la classe show-nav
    });

    // Bonus : Ferme le menu lorsque l'on clique sur un lien
    const navbarLinks = document.querySelectorAll('.navB a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navbar.classList.remove('show-nav'); // Enlève la classe show-nav
        });
    });
}

// Appel de la fonction pour activer le menu
toggleMenu();