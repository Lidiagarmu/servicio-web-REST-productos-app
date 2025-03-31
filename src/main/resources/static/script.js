const url = "http://localhost:8080/productos";

// Obtener productos
async function cargarProductos() {
    const response = await fetch(url);
    const productos = await response.json();

    const tabla = document.getElementById("productos-list");
    tabla.innerHTML = "";
    productos.forEach(p => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${p.nombre}</td>
            <td>${p.precio} € </td>
            <td>
                <button class="btn btn-warning" onclick="editarProducto(${p.id}, '${p.nombre}', ${p.precio})">✏️ Editar</button>
                <button class="btn btn-danger" onclick="eliminarProducto(${p.id})">🗑 Eliminar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });
}


// Función para agregar el producto
async function agregarProducto() {
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;

    // Validar que los campos no estén vacíos
    if (nombre.trim() === "" || precio.trim() === "") {
        alert("Por favor, ingresa un nombre y un precio válidos.");
        return;
    }

    // Enviar el producto al servidor
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, precio: parseFloat(precio) })
    });

    // Limpiar los campos de entrada
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";

    // Recargar la lista de productos
    cargarProductos();
}

// Función para editar el producto
function editarProducto(id, nombre, precio) {
    // Rellenar el formulario de edición en el modal
    document.getElementById("edit-id").value = id;
    document.getElementById("edit-nombre").value = nombre;
    document.getElementById("edit-precio").value = precio;

    // Abrir el modal de edición
    const editModal = new bootstrap.Modal(document.getElementById('editModal'));
    editModal.show();
}

// Guardar los cambios al editar
async function guardarEdicion() {
    const id = document.getElementById("edit-id").value;
    const nombre = document.getElementById("edit-nombre").value;
    const precio = document.getElementById("edit-precio").value;

    if (nombre.trim() === "" || precio.trim() === "") {
        alert("Por favor, ingresa un nombre y un precio válidos.");
        return;
    }

    await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, precio: parseFloat(precio) })
    });

    // Volver a cargar la lista de productos
    cargarProductos();

    // Cerrar el modal
    const editModal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
    editModal.hide();
}

// Función para eliminar el producto
function eliminarProducto(id) {
    // Rellenar el id del producto a eliminar en el modal
    document.getElementById("delete-id").value = id;

    // Abrir el modal de confirmación
    const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    deleteModal.show();
}

// Confirmar eliminación del producto
async function confirmarEliminacion() {
    const id = document.getElementById("delete-id").value;

    await fetch(`${url}/${id}`, { method: "DELETE" });

    // Volver a cargar la lista de productos
    cargarProductos();

    // Cerrar el modal de eliminación
    const deleteModal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
    deleteModal.hide();
}

// Cargar productos al iniciar
window.onload = cargarProductos;
