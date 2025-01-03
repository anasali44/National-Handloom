document.addEventListener("DOMContentLoaded", () => {
    const cartElement = document.getElementById("cart");
    const totalElement = document.getElementById("total");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCart() {
        cartElement.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
          <h3>${item.name}</h3>
          <p>Price: ₹${item.price}</p>
          <p>Quantity: <input type="number" class="quantity" value="${item.quantity}" min="1" data-index="${index}"></p>
          <p>Subtotal: ₹<span class="subtotal">${itemTotal}</span></p>
          <button class="remove-btn" data-index="${index}">Remove</button>
        `;
            cartElement.appendChild(cartItem);
        });

        totalElement.textContent = total;
    }

    cartElement.addEventListener("change", (e) => {
        if (e.target.classList.contains("quantity")) {
            const index = e.target.getAttribute("data-index");
            cart[index].quantity = parseInt(e.target.value);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCart();
        }
    });

    cartElement.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-btn")) {
            const index = e.target.getAttribute("data-index");
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCart();
        }
    });

    updateCart();
});

//responsive
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector("ul");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
});  