/*// Inicializar la cesta
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let userData = JSON.parse(localStorage.getItem('userData')) || {};

// Guardar la cesta en el Local Storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Guardar los datos del usuario
function saveUserData(event) {
    event.preventDefault(); // Prevenir la redirección automática

    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !address || !email) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const userData = {
        name,
        address,
        email
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Datos guardados correctamente.');

    // Redirección manual
    window.location.href = '../pages/verificacion.html';
}

// Añadir producto a la cesta
function addToCart(product) {
    const item = cart.find(p => p.id === product.id);
    if (item) {
        item.quantity += 1; // Incrementar cantidad si ya existe
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    alert('Producto añadido a la cesta');
}

// Obtener productos de la cesta
function getCart() {
    return cart;
}

// Eliminar producto de la cesta
function removeFromCart(productId) {
    cart = cart.filter(p => p.id !== productId);
    saveCart();
}

// Vaciar la cesta
function clearCart() {
    cart = [];
    saveCart();
}

// Renderiza el carrito en la tabla
function renderCart(containerId) {
    const cartContainer = document.getElementById(containerId);
    cartContainer.innerHTML = '';

    // Si el carrito está vacío
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <tr>
                <td colspan="5">Tu carrito está vacío.</td>
            </tr>`;
        return;
    }

    // Renderizar productos del carrito
    cart.forEach((item, index) => {
        const productRow = document.createElement('tr');
        
        productRow.innerHTML = `
            <td>${item.name}</td>
            <td>€${item.price.toFixed(2)}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" id="quantity-${index}" onchange="updateQuantity(${index})">
            </td>
            <td>€<span id="subtotal-${index}">${(item.price * item.quantity).toFixed(2)}</span></td>
            <td>
                <button class="btn" onclick="removeItem(${index})">Eliminar</button>
            </td>
        `;
        
        cartContainer.appendChild(productRow);
    });

    updateTotalPrice();
}

// Actualiza la cantidad de un producto basado en el input
function updateQuantity(index) {
    const newQuantity = document.getElementById(`quantity-${index}`).value;

    if (newQuantity < 1) {
        alert('La cantidad debe ser al menos 1.');
        return;
    }

    cart[index].quantity = parseInt(newQuantity);
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1); // Elimina el producto si la cantidad es 0 o menor
    }

    saveCart();
    renderCart('cart-container');
}

// Elimina un producto del carrito
function removeItem(index) {
    cart.splice(index, 1); // Elimina el producto en la posición index
    saveCart();
    renderCart('cart-container');
}

// Calcula el precio total
function updateTotalPrice() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('total-price').textContent = total.toFixed(2);
}

// Función para cargar los productos en la tabla
function cargarProductos() {
    const productosBody = document.getElementById("productos-body");
    let totalPedido = 0;

    // Si el carrito está vacío
    if (cart.length === 0) {
        productosBody.innerHTML = `
            <tr>
                <td colspan="4">Tu carrito está vacío.</td>
            </tr>`;
        document.getElementById("total-pedido").textContent = `0,00 €`;
        return;
    }

    // Renderizar productos del carrito
    productosBody.innerHTML = cart.map(item => {
        const subtotal = item.price * item.quantity;
        totalPedido += subtotal;

        return `
            <tr>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)} €</td>
                <td>${item.quantity}</td>
                <td>${subtotal.toFixed(2)} €</td>
            </tr>`;
    }).join("");

    // Actualizar el total
    document.getElementById("total-pedido").textContent = `${totalPedido.toFixed(2)} €`;
}

// Función para cargar los datos del usuario en la tabla
function cargarDatosUsuario() {
    const datosBody = document.getElementById("datos-body");

    // Si no hay datos del usuario
    if (!userData.name || !userData.address || !userData.email) {
        datosBody.innerHTML = `
            <tr><td colspan="2">No se han ingresado datos del usuario.</td></tr>
        `;
        return;
    }

    // Renderizar datos
    datosBody.innerHTML = `
        <tr>
            <td>Nombre:</td>
            <td>${userData.name}</td>
        </tr>
        <tr>
            <td>Dirección:</td>
            <td>${userData.address}</td>
        </tr>
        <tr>
            <td>Correo:</td>
            <td>${userData.email}</td>
        </tr>
    `;
}

// Cargar datos dinámicos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    userData = JSON.parse(localStorage.getItem("userData")) || {};

    cargarProductos();
    cargarDatosUsuario();
    renderCart('cart-container');
});

// Asociar el evento submit al formulario
document.getElementById('user-form').addEventListener('submit', saveUserData);

  // Aquí van tus funciones y eventos
document.querySelector(".btn.editar").addEventListener("click", () => {
    console.log("Botón de editar clickeado");
    window.location.href = "formulario.html";  // Si formulario.html está en la misma carpeta
});

document.querySelector(".btn.confirmar").addEventListener("click", () => {
    console.log("Botón de confirmar clickeado");
    if (confirm("¿Confirmar el pedido?")) {
        alert("¡Pedido confirmado!");
        localStorage.removeItem("cart");
        window.location.href = "../index.html"; // Si index.html está en la raíz
    }
});
    // Llamar a las funciones para mostrar los datos
    mostrarProductosCarrito();
    mostrarDatosUsuario();*/