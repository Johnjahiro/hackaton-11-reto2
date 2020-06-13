let lista = document.getElementById("lista"),
  tareaInput = document.getElementById("tareaInput"),
  btnNuevaTarea = document.getElementById("btn-agregar");

let agregarTarea = () => {
  let tarea = tareaInput.value,
    nuevaTarea = document.createElement("li"),
    enlace = document.createElement("a"),
    contenido = document.createTextNode(tarea);

  nuevaTarea.appendChild(contenido);
  nuevaTarea.appendChild(enlace);
  enlace.setAttribute("href", "#");
  enlace.textContent = "Eliminar";
  lista.appendChild(nuevaTarea);

  tareaInput.value = "";

  for (let i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener("click", function () {
      this.parentNode.removeChild(this);
    });
  }
};

btnNuevaTarea.addEventListener("click", agregarTarea);
