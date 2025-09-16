// -------------------------------
// Texto inicial con máquina de escribir
// -------------------------------
const text = "Flores amarillas para quien llena de alegría mi vida ❤️";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}
window.onload = typeWriter;

// -------------------------------
// Al abrir el regalo → ir a sorpresa.html
// -------------------------------
document.getElementById("abrirBtn").addEventListener("click", () => {
  window.location.href = "sorpresa.html";
});

// -------------------------------
// 🌻 Girasoles cayendo en el fondo
// -------------------------------
function crearGirasol() {
  const girasol = document.createElement("span");
  girasol.textContent = "🌻";
  girasol.classList.add("girasol");

  // Posición horizontal aleatoria
  girasol.style.left = Math.random() * window.innerWidth + "px";

  // Tamaño aleatorio
  girasol.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(girasol);

  // Eliminar después de 10 segundos
  setTimeout(() => {
    girasol.remove();
  }, 10000);
}

// Generar un girasol cada 300ms
setInterval(crearGirasol, 300);
