//elementos del DOM
const tituloInput = document.getElementById("titulo");
const urlInput = document.getElementById("url");
const agregarBtn = document.getElementById("agregar");
const lista = document.getElementById("lista-links");

//cargar los links al cargar la pagina
document.addEventListener("DOMContentLoaded", mostrarLinks);

//añadir link
agregarBtn.addEventListener("click", () => {
  const titulo = tituloInput.value.trim();
  const url = urlInput.value.trim();

  if (!titulo || !url) return;

  const nuevoLink = { titulo, url };
  guardarEnLocalStorage(nuevoLink);
  crearElementoLink(nuevoLink);
  tituloInput.value = "";
  urlInput.value = "";
});

//guardar en localStorage
function guardarEnLocalStorage(link) {
  const links = JSON.parse(localStorage.getItem("links")) || [];
  links.push(link);
  localStorage.setItem("links", JSON.stringify(links));
}

//mostrar los links guardados
function mostrarLinks() {
  const links = JSON.parse(localStorage.getItem("links")) || [];
  lista.innerHTML = ""; //limpiar antes de mostrar
  links.forEach(link => crearElementoLink(link));
}

//crear un link en el DOM
function crearElementoLink({ titulo, url }) {
  const div = document.createElement("div");
  div.className = "item";

  const enlace = document.createElement("a");
  enlace.href = url;
  enlace.textContent = titulo;
  enlace.target = "_blank";

  const botonEliminar = document.createElement("button");
  botonEliminar.innerText = "✖"; 
  botonEliminar.classList.add("eliminar");

  botonEliminar.addEventListener("click", () => {
    eliminarLink(titulo);
    div.remove();
  });

  div.appendChild(enlace);
  div.appendChild(botonEliminar);
  lista.appendChild(div);
}

//eliminar del localStorage
function eliminarLink(titulo) {
  let links = JSON.parse(localStorage.getItem("links")) || [];
  links = links.filter(link => link.titulo !== titulo);
  localStorage.setItem("links", JSON.stringify(links));
}
