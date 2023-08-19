const contactosList = document.getElementById("contactos");
const nombreApellidoInput = document.getElementById("nombreApellido");

function agregarContacto() {
  const nuevoContacto = nombreApellidoInput.value;
  if (nuevoContacto) {
    contactosList.innerHTML += `<li>${nuevoContacto}</li>`;
    nombreApellidoInput.value = "";
  }
}

function borrarContacto() {
  const ultimoContacto = contactosList.lastChild;
  if (ultimoContacto) {
    contactosList.removeChild(ultimoContacto);
  }
}
