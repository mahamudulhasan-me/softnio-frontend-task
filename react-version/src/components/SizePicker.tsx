import React from "react";

type SizePickerProps = {
  handleSizeChange: (item: { size: string; price: number }) => void;
  selectedSize: string;
};

const SizePicker: React.FC<SizePickerProps> = ({
  handleSizeChange,
  selectedSize,
}) => {
  return (
    <section className="my-4">
      <h2 className="text-lg font-[500] text-gray-700 mb-1">Wrist Size</h2>
      <ul className="flex items-center gap-x-4 flex-wrap">
        {[
          { size: "S", price: 69 },
          { size: "M", price: 69 },
          { size: "L", price: 89 },
          { size: "XL", price: 99 },
        ].map((item) => (
          <li key={item.size}>
            <button
              onClick={() => handleSizeChange(item)}
              id={`size-${item.size}`}
              className={`size-btn border border-blue-200 md:px-4 px-2 py-1 rounded-md hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-slate-500 text-sm md:text-base ${
                selectedSize === item.size
                  ? "border-blue-600 text-blue-600"
                  : ""
              }`}
            >
              <span className="font-[500] text-gray-700 mr-1 md:text-lg">
                {item.size}
              </span>
              ${item.price}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SizePicker;
