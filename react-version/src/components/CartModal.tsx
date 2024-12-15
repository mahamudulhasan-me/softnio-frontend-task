import React, { useState } from "react";
import { ICart } from "../App";

type CartModalProps = {
  cartDetails: ICart[];
  handleRemoveFromCart: (index: number) => void;
};

const CartModal: React.FC<CartModalProps> = ({
  cartDetails,
  handleRemoveFromCart,
}: CartModalProps) => {
  // State for cart items and the modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Calculate total quantity and total price
  const totalQuantity = cartDetails.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = cartDetails.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Remove an item from the cart
  const handleRemoveItem = (index: number) => {
    handleRemoveFromCart(index);
  };

  return (
    <>
      <button
        id="checkout-btn"
        onClick={() => setIsModalVisible(true)}
        className={`fixed bottom-1/2 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg ${
          cartDetails.length === 0 ? "hidden" : ""
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
          {cartDetails?.length}
        </span>
      </button>
      {/* Modal for Cart */}
      {isModalVisible && cartDetails?.length !== 0 && (
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
                {cartDetails?.map((item, index) => (
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
                        onClick={() => handleRemoveItem(index)}
                        className="text-red-500 remove-item"
                      >
                        &#10005;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
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
            </table>

            {/* Total Row */}

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
