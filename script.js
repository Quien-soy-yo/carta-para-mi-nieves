const boton = document.getElementById("abrirCarta");
const portada = document.querySelector(".portada");
const carta = document.getElementById("carta");


// =======================================
// ABRIR CARTA
// =======================================

boton.addEventListener("click", function () {

    // La portada empieza a desaparecer
    portada.classList.add("desaparecer");

    // Esperamos a que termine la animación
    setTimeout(function () {

        // Quitamos la portada
        portada.style.display = "none";

        // Mostramos la carta
        carta.classList.remove("oculto");

        // Animación de entrada
        carta.classList.add("aparecer");

        // Nos aseguramos de estar arriba
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Activamos las animaciones de las secciones
        activarAnimaciones();

    }, 600);

});


// =======================================
// ANIMACIONES AL HACER SCROLL
// =======================================

function activarAnimaciones() {

    const elementos = document.querySelectorAll(
        ".seccion-carta, .separador, .final-carta"
    );

    const observador = new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    elementos.forEach(function (elemento) {

        observador.observe(elemento);

    });

}