import React, { useState } from "react";

const App: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [selectedColor, setSelectedColor] = useState("violet");
  const [selectedSize, setSelectedSize] = useState("M");

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + quantity);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <main className="container mx-auto h-screen max-w-[1000px] flex justify-center items-center">
      <section className="grid md:grid-cols-2 gap-x-10 items-center p-2">
        {/* Image Display Section */}
        <figure className="w-full h-full">
          <img
            id="product-image"
            src={`./assets/${selectedColor}.png`}
            alt={`Selected Band Color - ${selectedColor}`}
          />
        </figure>

        {/* Product Details */}
        <section className="flex flex-col mt-4 md:mt-0">
          {/* Product Name */}
          <header>
            <h1
              id="product-name"
              className="md:text-4xl text-2xl font-semibold text-gray-700"
            >
              Classy Modern Smart Watch
            </h1>
            {/* Product Rating */}
            <p className="flex text-xl text-orange-500 items-center gap-x-0.5">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>☆</span>
              <span className="text-gray-500 text-sm ml-1">
                4.0 (2 Reviews)
              </span>
            </p>
          </header>

          {/* Pricing Section */}
          <section className="my-4">
            <p>
              <span className="line-through md:text-xl text-gray-500">
                $99.00
              </span>
              <span className="md:text-2xl text-xl text-blue-600 font-[500]">
                $79.00
              </span>
            </p>
          </section>

          {/* Product Description */}
          <article className="text-gray-600 md:text-base text-sm">
            I must explain to you how all this mistaken idea of denouncing
            pleasure praising pain was born...
          </article>

          {/* Product Metadata */}
          <section className="flex items-center gap-x-10 my-4">
            <dl className="flex flex-col">
              <dt className="text-sm text-gray-500">Type</dt>
              <dd className="font-[500] text-gray-700">Watch</dd>
            </dl>
            <dl className="flex flex-col">
              <dt className="text-sm text-gray-500">Model Number</dt>
              <dd className="font-[500] text-gray-700">Forerunner 290XT</dd>
            </dl>
          </section>

          {/* Band Colors Section */}

          <section>
            <h2 className="md:text-lg font-[500] text-gray-700 mb-1">
              Band Color
            </h2>
            <ul className="flex items-center gap-2">
              <li>
                <button
                  onClick={() => handleColorChange("violet")}
                  className={`w-5 h-5 rounded-full border-2 border-white bg-violet-700 ${
                    selectedColor === "violet" ? "ring-1" : ""
                  }`}
                ></button>
              </li>
              <li>
                <button
                  onClick={() => handleColorChange("cyan")}
                  className={`w-5 h-5 rounded-full border-2 border-white bg-[#1FCEC9] ${
                    selectedColor === "cyan" ? "ring-1" : ""
                  }`}
                ></button>
              </li>
              <li>
                <button
                  onClick={() => handleColorChange("blue")}
                  className={`w-5 h-5 rounded-full border-2 border-white bg-blue-600 ${
                    selectedColor === "blue" ? "ring-1" : ""
                  }`}
                ></button>
              </li>
              <li>
                <button
                  onClick={() => handleColorChange("black")}
                  className={`w-5 h-5 rounded-full border-2 border-white bg-black ${
                    selectedColor === "black" ? "ring-1" : ""
                  }`}
                ></button>
              </li>
            </ul>
          </section>

          {/* Wrist Size */}
          <section className="my-4">
            <h2 className="text-lg font-[500] text-gray-700 mb-1">
              Wrist Size
            </h2>
            <ul className="flex items-center gap-x-4 flex-wrap">
              {["S", "M", "L", "XL"].map((size) => (
                <li key={size}>
                  <button
                    onClick={() => handleSizeChange(size)}
                    id={`size-${size}`}
                    className={`size-btn border border-blue-200 md:px-4 px-2 py-1 rounded-md hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-slate-500 text-sm md:text-base ${
                      selectedSize === size
                        ? "border-blue-600 text-blue-600"
                        : ""
                    }`}
                  >
                    <span className="font-[500] text-gray-700 mr-1 md:text-lg">
                      {size}
                    </span>
                    ${size === "XL" ? "99" : "69"}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Quantity and Actions */}
          <footer className="flex items-center gap-x-4">
            {/* Quantity Control */}
            <div className="border w-fit border-gray-300 flex items-center rounded-md">
              <button
                onClick={() => handleQuantityChange(-1)}
                id="minus-btn"
                className="md:size-10 size-8 border-r border-gray-300 md:text-4xl text-2xl text-gray-500 flex justify-center items-center"
              >
                &#8722;
              </button>
              <p
                id="quantity-display"
                className="md:w-16 w-12 text-center text-gray-700"
              >
                {quantity}
              </p>
              <button
                onClick={() => handleQuantityChange(1)}
                id="plus-btn"
                className="md:size-10 size-8 border-l border-gray-300 md:text-3xl text-2xl text-gray-500 flex justify-center items-center"
              >
                &#43;
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white md:px-5 px-4 md:py-2 py-1.5 rounded-md font-[500]"
            >
              Add to Cart
            </button>

            {/* Wishlist Button */}
            <button
              id="wishlist-btn"
              aria-label="Add to Wishlist"
              className="text-4xl text-blue-600"
            >
              &#9825;
            </button>
          </footer>
        </section>
      </section>

      {/* Floating Checkout Button (initially hidden) */}
      <button
        id="checkout-btn"
        className={`fixed bottom-1/2 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg ${
          cartCount === 0 ? "hidden" : ""
        } flex items-center gap-1 shadow-2xl`}
      >
        <svg
          viewBox="0 0 16 16"
          className="bi bi-cart-check"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
        >
          <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
        </svg>
        <span id="cart-count" className="ml-1 font-semibold">
          {cartCount}
        </span>
      </button>

      {/* Cart Preview Modal */}
      <div
        id="cart-modal"
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center hidden"
      >
        <div className="bg-white p-5 rounded-2xl md:w-[600px]">
          <h3 className="font-[500] text-xl mb-4 text-gray-700">Your Cart</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-500 text-sm font-[400]">
                <th className="py-2 md:min-w-48 min-w-20">Item</th>
                <th className="py-2 text-center md:min-w-16 min-w-10">Color</th>
                <th className="py-2 text-center md:min-w-16 min-w-10">Size</th>
                <th className="py-2 text-center md:min-w-16 min-w-10">
                  Quantity
                </th>
                <th className="py-2 text-right md:min-w-16 min-w-10">Price</th>
                <th className="md:min-w-10"></th>
              </tr>
            </thead>
            <tbody id="cart-items">
              {/* Dynamically filled with cart items */}
            </tbody>
          </table>
          {/* Close Modal Buttons */}
          <div className="flex items-center justify-end gap-x-4 mt-5">
            <button
              id="close-modal"
              className="bg-white border border-gray-400 text-gray-800 py-2 px-4 rounded-md text-xs font-[500] hover:bg-blue-50 transition-all duration-300"
            >
              Continue Shopping
            </button>
            <button
              id="checkout-button"
              className="bg-blue-600 border border-gray-400 text-white py-2 px-4 rounded-md text-xs font-[500] hover:bg-blue-700 transition-all duration-300"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
