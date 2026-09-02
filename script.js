/* =================================
MENU MOBILE
================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("active");

if (navLinks.classList.contains("active")) {

    menuBtn.textContent = "✕";

} else {

    menuBtn.textContent = "☰";

}


});

/* =================================
FECHAR MENU AO CLICAR
================================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    menuBtn.textContent = "☰";

});


});

/* =================================
MOSTRAR ALIMENTOS
================================= */

const foodBtn = document.getElementById("foodBtn");
const foodList = document.getElementById("foodList");

foodBtn.addEventListener("click", () => {

foodList.classList.toggle("hidden");

if (foodList.classList.contains("hidden")) {

    foodBtn.textContent =
        "VER EXEMPLOS DE ALIMENTOS";

} else {

    foodBtn.textContent =
        "ESCONDER ALIMENTOS";

}


});

/* =================================
ANIMAÇÃO DAS SEÇÕES
================================= */

const sections =
document.querySelectorAll(".section");

const observer =
new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(section => {

observer.observe(section);


});

/* =================================
MENSAGEM NO CONSOLE
================================= */

const ano = new Date().getFullYear();

console.log(
🚀 Vida em Marte — Projeto ${ano}
);