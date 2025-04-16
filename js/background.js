//array con las rutas de las imágenes de fondo
const imagenes = [];

for (let i = 1; i <= 12; i++) {
  imagenes.push(`./assets/ciudadnocturna${i}.jpg`);
}

//función para cambiar el fondo aleatoriamente
function cambiarFondo() {
  const index = Math.floor(Math.random() * imagenes.length);
  const imagen = imagenes[index];
  document.body.style.backgroundImage = `url("${imagen}")`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
}

//cambiar el fondo al cargar la página
cambiarFondo();

//cambiar el fondo cada 15 segundos
setInterval(cambiarFondo, 15000);
