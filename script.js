// Efecto máquina de escribir
const text = "Hoy 21 de septiembre, que tengas un hermoso día asi como tu ❤️";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 70);
  }
}
window.onload = typeWriter;

// Mostrar sorpresa al hacer clic
document.getElementById("abrirBtn").addEventListener("click", () => {
  document.querySelector(".regalo-container").style.display = "none";
  document.getElementById("sorpresa").style.display = "block";

  // Reproducir música
  let musica = document.getElementById("musica");
  musica.style.display = "block";
  musica.play();
});

// Animación de pétalos cayendo
const canvas = document.getElementById("petalos");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const petalos = [];
for (let i = 0; i < 30; i++) {
  petalos.push({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1
  });
}

function dibujarPetalos() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "yellow";

  petalos.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
    ctx.fill();

    p.y += p.speed;
    if (p.y > height) {
      p.y = 0;
      p.x = Math.random() * width;
    }
  });

  requestAnimationFrame(dibujarPetalos);
}

dibujarPetalos();

// Mostrar sorpresa al hacer clic
document.getElementById("abrirBtn").addEventListener("click", () => {
  document.querySelector(".regalo-container").style.display = "none";
  document.getElementById("sorpresa").style.display = "block";

  // Reproducir música
  let musica = document.getElementById("musica");
  musica.play();
});

// Al abrir el regalo → ir a sorpresa.html
document.getElementById("abrirBtn").addEventListener("click", () => {
  window.location.href = "sorpresa.html";
});
