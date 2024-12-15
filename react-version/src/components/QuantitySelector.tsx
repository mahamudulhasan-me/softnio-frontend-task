import React from "react";

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  setQuantity,
}) => {
  const updateQuantity = (delta: number) => {
    setQuantity(Math.max(0, quantity + delta));
  };

  return (
    <div className="quantity-selector">
      <button onClick={() => updateQuantity(-1)} className="minus-btn">
        -
      </button>
      <span className="quantity-display">{quantity}</span>
      <button onClick={() => updateQuantity(1)} className="plus-btn">
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
