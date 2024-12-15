document.addEventListener("DOMContentLoaded", () => {
  const quantityDisplay = document.getElementById("quantity-display");
  const minusBtn = document.getElementById("minus-btn");
  const plusBtn = document.getElementById("plus-btn");
  const colorButtons = document.querySelectorAll("button[data-color]");
  const productImage = document.getElementById("product-image");
  const sizeButtons = document.querySelectorAll(".size-btn");

  let quantity = 1; // Initial quantity
  let cartItemCount = 0;
  const cart = [];

  const colorToImageMap = {
    violet: "./assets/product-gallery.png",
    cyan: "./assets/cyan.png",
    skyblue: "./assets/blue.png",
    black: "./assets/black.png",
  };

  // Update quantity display
  const updateQuantity = (delta) => {
    quantity = Math.max(0, quantity + delta);
    quantityDisplay.textContent = quantity;
  };

  minusBtn.addEventListener("click", () => updateQuantity(-1));
  plusBtn.addEventListener("click", () => updateQuantity(1));

  // Set default color and image
  const defaultColorButton = document.getElementById("color-violet");
  defaultColorButton.classList.add("ring-1");
  productImage.src = colorToImageMap.violet;
  productImage.alt = "Selected Band Color - Violet";

  colorButtons.forEach((button) =>
    button.addEventListener("click", () => {
      colorButtons.forEach((btn) => btn.classList.remove("ring-1"));
      button.classList.add("ring-1");

      const selectedColor = button.dataset.color;
      productImage.src = colorToImageMap[selectedColor];
      productImage.alt = `Selected Band Color - ${selectedColor}`;
    })
  );

  // Set default size button
  const defaultSizeButton = document.getElementById("size-s");
  defaultSizeButton.classList.add("active");
  defaultSizeButton.querySelector("span").classList.add("text-blue-600");

  sizeButtons.forEach((button) =>
    button.addEventListener("click", () => {
      sizeButtons.forEach((btn) => {
        btn.classList.remove("border-blue-600", "text-blue-600", "active");
        btn
          .querySelector("span")
          .classList.replace("text-blue-600", "text-gray-700");
      });

      button.classList.add("border-blue-600", "text-blue-600", "active");
      button
        .querySelector("span")
        .classList.replace("text-gray-700", "text-blue-600");
    })
  );

  const addToCartBtn = document.querySelector("button.bg-blue-600");
  const checkoutBtn = document.getElementById("checkout-btn");
  const cartCount = document.getElementById("cart-count");

  const updateCartModal = () => {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    let totalQuantity = 0;
    let totalPrice = 0;

    cart.forEach((item, index) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;

      const row = document.createElement("tr");
      row.classList.add("border-b");
      row.innerHTML = `
        <tr class="border-b">
          <td class="py-3 text-sm text-gray-700">
            <div class="flex items-center gap-2">
              <img src="${item.image}" alt="${
        item.color
      }" class="w-12 h-12 rounded-md">
              <span class="py-3">${item.name}</span>
            </div>
          </td>
          <td class="text-center py-3 capitalize text-sm text-gray-700">${
            item.color
          }</td>
          <td class="text-center py-3 text-sm text-gray-700 font-[500]">${
            item.size.split(" ")[0]
          }</td>
          <td class="text-center py-3 text-sm text-gray-700 font-[500]">${
            item.quantity
          }</td>
          <td class="text-right py-3 text-sm text-gray-700 font-[500]">$${(
            item.price * item.quantity
          ).toFixed(2)}</td>
          <td class="text-right">
            <button class="text-red-500 remove-item" data-index="${index}">&#10005;</button>
          </td>
        </tr>
      `;

      cartItemsContainer.appendChild(row);
    });

    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
      <td colspan="3" class="pt-5 font-bold text-gray-700">Total</td>
      <td class="text-center pt-5 font-bold text-gray-700">${totalQuantity}</td>
      <td class="text-right pt-5 font-bold text-gray-700">$${totalPrice.toFixed(
        2
      )}</td>
      <td></td>
    `;
    cartItemsContainer.appendChild(totalRow);

    document.querySelectorAll(".remove-item").forEach((button) =>
      button.addEventListener("click", ({ target }) => {
        removeItemFromCart(target.dataset.index);
      })
    );
  };

  const removeItemFromCart = (index) => {
    cart.splice(index, 1);
    updateCartModal();

    cartCount.textContent = cart.length;
    if (cart.length === 0) {
      checkoutBtn.classList.add("hidden");
      document.getElementById("cart-modal").classList.add("hidden");
    }
  };

  const addToCartItem = (image, name, color, size, price, quantity) => {
    cart.push({ image, name, color, size, price, quantity });
    updateCartModal();
  };

  addToCartBtn.addEventListener("click", () => {
    const selectedColorButton = document.querySelector(
      "button.ring-1[data-color]"
    );
    const selectedSizeButton = document.querySelector("button.size-btn.active");

    addToCartItem(
      productImage.src,
      document.getElementById("product-name").textContent,
      selectedColorButton.dataset.color,
      selectedSizeButton.textContent.trim(),
      29.99,
      quantity
    );

    cartCount.textContent = ++cartItemCount;
    checkoutBtn.classList.remove("hidden");
  });

  const wishlistBtn = document.getElementById("wishlist-btn");
  let isAddedToWishlist = false;

  wishlistBtn.addEventListener("click", () => {
    isAddedToWishlist = !isAddedToWishlist;
    wishlistBtn.innerHTML = isAddedToWishlist ? "&#10084;" : "&#9825;";
    wishlistBtn.classList.toggle("text-red-600", isAddedToWishlist);
    wishlistBtn.classList.toggle("text-blue-600", !isAddedToWishlist);
  });

  const cartModal = document.getElementById("cart-modal");
  const closeModalBtn = document.getElementById("close-modal");

  document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length > 0) cartModal.classList.remove("hidden");
  });

  closeModalBtn.addEventListener("click", () =>
    cartModal.classList.add("hidden")
  );
});
