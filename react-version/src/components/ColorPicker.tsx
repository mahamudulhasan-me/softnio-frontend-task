import React from "react";

interface ColorPickerProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  colorToImageMap: Record<string, string>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  selectedColor,
  setSelectedColor,
  colorToImageMap,
}) => {
  return (
    <div className="color-picker">
      {Object.keys(colorToImageMap).map((color) => (
        <button
          key={color}
          data-color={color}
          className={`color-btn ${selectedColor === color ? "ring-1" : ""}`}
          onClick={() => setSelectedColor(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;
