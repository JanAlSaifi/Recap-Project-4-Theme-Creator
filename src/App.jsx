import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";

function App() {
  const [colors, setColor] = useState(initialColors);

  function handleSubmitColorForm(newColor) {
    console.log("New Color Submitted:", newColor);

    const formattedColor = {
      id: Date.now(),
      role: newColor["role-name"],
      hex: newColor["hex-color"],
      contrastText: newColor["contrast-color"],
    };
    console.log("Formatted Color:", formattedColor);

    setColor([...colors, formattedColor]);
  }
  console.log(colors);
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleSubmitColorForm} />
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
