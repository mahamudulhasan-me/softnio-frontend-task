/**
 * A color picker component that lets the user select a band color.
 *
 * @param {{ handleColorChange: (color: string) => void, selectedColor: string }} props
 * @returns {JSX.Element}
 */
const ColorPicker = ({
  handleColorChange,
  selectedColor,
}: {
  handleColorChange: (color: string) => void;
  selectedColor: string;
}): JSX.Element => {
  return (
    <section>
      <h2 className="md:text-lg font-[500] text-gray-700 mb-1">Band Color</h2>
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
  );
};

export default ColorPicker;
