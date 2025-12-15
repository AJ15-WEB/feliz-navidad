const boton = document.getElementById("btnMensaje");
const mensaje = document.getElementById("mensaje");
const musica = document.getElementById("musica");

boton.addEventListener("click", () => {
    mensaje.innerHTML = "🎅 Que esta Navidad esté llena de amor, salud y nuevos sueños por cumplir 🎁✨";
    mensaje.style.opacity = "1";

    musica.volume = 0.3;
    musica.play();

    boton.disabled = true;
    boton.textContent = "🎄 Felices Fiestas 🎄";
});
