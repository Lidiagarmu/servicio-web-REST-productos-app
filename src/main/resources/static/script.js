const url = "http://localhost:8080/productos";

// Obtener productos
async function cargarProductos() {
    const response = await fetch(url);
    const productos = await response.json();

    const lista = document.getElementById("productos-list");
    lista.innerHTML = "";
    productos.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.nombre} - $${p.precio}`;
        lista.appendChild(li);
    });
}

// Agregar producto
async function agregarProducto() {
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;

    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, precio })
    });

    cargarProductos();
}

// Cargar productos al iniciar
window.onload = cargarProductos;
