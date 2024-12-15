import React from "react";

interface SizePickerProps {
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  sizes: string[];
}

const SizePicker: React.FC<SizePickerProps> = ({
  selectedSize,
  setSelectedSize,
  sizes,
}) => {
  return (
    <div className="size-picker">
      {sizes.map((size) => (
        <button
          key={size}
          className={`size-btn ${
            selectedSize === size ? "active border-blue-600" : ""
          }`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizePicker;
