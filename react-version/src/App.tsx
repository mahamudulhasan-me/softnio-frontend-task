import React, { useState } from "react";
import CartModal from "./components/CartModal";
import ColorPicker from "./components/ColorPicker";
import SizePicker from "./components/SizePicker";

export interface ICart {
  color: string;
  size: string;
  quantity: number;
  image: string;
  name: string;
  price: number;
}
const App: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<ICart[]>([]);
  const [selectedColor, setSelectedColor] = useState("violet");
  const [selectedSize, setSelectedSize] = useState("M");
  const [price, setPrice] = useState(0);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    setCart([
      ...cart,
      {
        color: selectedColor,
        size: selectedSize,
        quantity,
        image: `./assets/${selectedColor}.png`,
        name: "Classy Modern Smart Watch",
        price,
      },
    ]);
  };
  const handleRemoveFromCart = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (item: { size: string; price: number }) => {
    setSelectedSize(item.size);
    setPrice(quantity * item.price);
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
            I must explain to you how all this mistaken idea of denoun cing
            pleasure praising pain was born and I will give you a complete
            account of the system, and expound the actual teaching.
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

          <ColorPicker
            handleColorChange={handleColorChange}
            selectedColor={selectedColor}
          />

          {/* Wrist Size */}
          <SizePicker
            handleSizeChange={handleSizeChange}
            selectedSize={selectedSize}
          />

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
      <CartModal
        cartDetails={cart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      {/* Cart Preview Modal */}
    </main>
  );
};

export default App;
