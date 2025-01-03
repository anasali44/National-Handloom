document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const productElement = button.parentElement;
      const productId = productElement.getAttribute("data-id");
      const productName = productElement.getAttribute("data-name");
      const productPrice = productElement.getAttribute("data-price");

      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if product already exists in the cart
      const existingProduct = cart.find(item => item.id === productId);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${productName} added to cart!`);
    });
  });
});

//responsive
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector("ul");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});
