/*// Seleccionar todos los botones del acordeón
const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Obtener el contenido asociado al botón
        const content = button.nextElementSibling;

        // Alternar la clase activa
        button.classList.toggle("active");

        if (content.style.maxHeight) {
            // Si el acordeón está abierto, cerrarlo
            content.style.maxHeight = null;
        } else {
            // Si el acordeón está cerrado, abrirlo
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});*/
/*<script>
// Inicializar la cesta
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

    if (!cart || !userData) {
        alert("No se pudo cargar el carrito o los datos del usuario.");
        return;
    }
    cargarProductos();
    cargarDatosUsuario();
});

// Enlaces de botones
document.querySelector(".btn.editar").addEventListener("click", () => {
    console.log("Botón de editar clickeado");
    alert("Redirigiendo al formulario para editar información.");
    window.location.href = "personal-info.html"; // Redirige a personal-info.html
});

document.querySelector(".btn.confirmar").addEventListener("click", () => {
    if (confirm("¿Confirmar el pedido?")) {
        alert("¡Pedido confirmado!");
        localStorage.removeItem("cart"); // Limpiar solo el carrito
        window.location.href = "../pages/confirmation.html"; // Si index.html está en la raíz
    }
});
    </script>*/