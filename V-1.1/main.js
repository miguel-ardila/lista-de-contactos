const listaDeContactos = [];

function agregarContacto(id, nombres, apellidos, telefono, ubicacion, ciudad, direccion) {
  const contacto = {
    id,
    nombres,
    apellidos,
    telefono,
    ubicacion,
    ciudad,
    direccion
  };
  listaDeContactos.push(contacto);
}
//funcione para borrar contacto
function borrarContacto(id) {
  const indice = listaDeContactos.findIndex(contacto => contacto.id === id);
  if (indice !== -1) {
    listaDeContactos.splice(indice, 1);
  }
}

function imprimirContactos() {
  console.log("Lista de Contactos:");
  listaDeContactos.forEach(contacto => {
    console.log(`ID: ${contacto.id}`);
    console.log(`Nombres: ${contacto.nombres}`);
    console.log(`Apellidos: ${contacto.apellidos}`);
    console.log(`Teléfono: ${contacto.telefono}`);
    console.log(`Ubicación: ${contacto.ubicacion}`);
    console.log(`Ciudad: ${contacto.ciudad}`);
    console.log(`Dirección: ${contacto.direccion}`);
    console.log("-------------------");
  });
}

// Agregar contactos
agregarContacto(1, "Miguel", "Ardila", "3196670000", "Colombia", "Bogota", "Calle 188 # 9 - 87");
agregarContacto(2, "Amy", "Barrera", "30422366953", "Canada", "Ottawa", "2685 Iris St, Ottawa, ON K2C 3S4, Canadá");

// Imprimir la lista de contactos
imprimirContactos();

// Borrar un contacto
borrarContacto(2);

// Imprimir la lista de contactos después de borrar
imprimirContactos();
