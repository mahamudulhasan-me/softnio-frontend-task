import React, { useState } from "react";

// A mock cart array for demonstration
const initialCart = [
  {
    name: "Classy Modern Smart Watch",
    image: "/assets/product-gallery.png",
    color: "violet",
    size: "M",
    price: 79.0,
    quantity: 2,
  },
  {
    name: "Elegant Watch",
    image: "/assets/product-gallery.png",
    color: "cyan",
    size: "L",
    price: 69.0,
    quantity: 1,
  },
];

const CartModal: React.FC = () => {
  // State for cart items and the modal visibility
  const [cart, setCart] = useState(initialCart);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Calculate total quantity and total price
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Remove an item from the cart
  const removeItem = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* Modal for Cart */}
      {isModalVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-5 rounded-2xl md:w-[600px]">
            <h3 className="font-[500] text-xl mb-4 text-gray-700">Your Cart</h3>

            {/* Table for Cart Items */}
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-gray-500 text-sm font-[400]">
                  <th className="py-2 md:min-w-48 min-w-20">Item</th>
                  <th className="py-2 text-center md:min-w-16 min-w-10">
                    Color
                  </th>
                  <th className="py-2 text-center md:min-w-16 min-w-10">
                    Size
                  </th>
                  <th className="py-2 text-center md:min-w-16 min-w-10">
                    Quantity
                  </th>
                  <th className="py-2 text-right md:min-w-16 min-w-10">
                    Price
                  </th>
                  <th className="md:min-w-10"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 text-sm text-gray-700">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.image}
                          alt={item.color}
                          className="w-12 h-12 rounded-md"
                        />
                        <span className="py-3">{item.name}</span>
                      </div>
                    </td>
                    <td className="text-center py-3 capitalize text-sm text-gray-700">
                      {item.color}
                    </td>
                    <td className="text-center py-3 text-sm text-gray-700 font-[500]">
                      {item.size}
                    </td>
                    <td className="text-center py-3 text-sm text-gray-700 font-[500]">
                      {item.quantity}
                    </td>
                    <td className="text-right py-3 text-sm text-gray-700 font-[500]">
                      ${item.price * item.quantity}
                    </td>
                    <td className="text-right">
                      <button
                        onClick={() => removeItem(index)}
                        className="text-red-500 remove-item"
                      >
                        &#10005;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Total Row */}
            <tr>
              <td colSpan={3} className="pt-5 font-bold text-gray-700">
                Total
              </td>
              <td className="text-center pt-5 font-bold text-gray-700">
                {totalQuantity}
              </td>
              <td className="text-right pt-5 font-bold text-gray-700">
                ${totalPrice.toFixed(2)}
              </td>
              <td></td>
            </tr>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-x-4 mt-5">
              <button
                onClick={() => setIsModalVisible(false)}
                className="bg-white border border-gray-400 text-gray-800 py-2 px-4 rounded-md text-xs font-[500] hover:bg-blue-50 transition-all duration-300"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => alert("Proceeding to checkout...")}
                className="bg-blue-600 border border-gray-400 text-white py-2 px-4 rounded-md text-xs font-[500] hover:bg-blue-700 transition-all duration-300"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;
