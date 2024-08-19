const lista = document.getElementById("listaAgregar");
const input = document.getElementById("inputTexto");
const botonAgregar = document.getElementById("botonAgregar");
const botonEliminar = document.getElementById("botonEliminar");

botonAgregar.addEventListener("click", () => {
  let elementoLi = document.createElement("li");
  elementoLi.innerHTML = input.value;
  lista.appendChild(elementoLi);
  input.value = "";
})

botonEliminar.addEventListener("click", () => {
  const lastChild = lista.lastChild;
  lista.removeChild(lastChild);
})