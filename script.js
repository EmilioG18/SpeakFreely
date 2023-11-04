const nav2 = document.querySelector("#nav2");
const abrir = document.querySelector("#toggle");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav2
        .classList
        .add("visible");
})

cerrar.addEventListener("click", () => {
    nav2
        .classList
        .remove("visible");
})

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle');
    const menu = document.querySelector('.barra__nav2');
    const menuLinks = document.querySelectorAll('.barra__nav2 a');

    toggleButton.addEventListener('click', function () {
        if (nav2.style.display === 'block') {
            nav2.style.display = 'none';
        } else {
            nav2.style.display = 'block';
        }
    });

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this
                .getAttribute('href')
                .substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                nav2.style.display = 'none'; // Oculta el menú
                targetSection.scrollIntoView({behavior: 'smooth'}); // Desplaza a la sección
            }
        });
    });
});

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target
                    .offset()
                    .top
            }, 1000); // Ajusta la velocidad de desplazamiento según tus preferencias
        }
    });
});
