import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { useState } from "react";

// ADD COLOR
function App() {
  const [colors, setColor] = useState(initialColors);

  function handleSubmitColorForm(newColor) {
    const formattedColor = {
      id: Date.now(),
      role: newColor["role-name"],
      hex: newColor["hex-color"],
      contrastText: newColor["contrast-color"],
    };

    setColor([...colors, formattedColor]);
  }

  // handleDelete with window

  // function handleDeleteColor(id) {
  //   //Window confirm
  //   const confirmed = window.confirm("Are you sure?");
  //   confirmed ? setColor(colors.filter((color) => color.id !== id)) : null;
  // }

  function handleDeleteColor(id) {
    setColor(colors.filter((color) => color.id !== id));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleSubmitColorForm} />

      {colors.map((color) => {
        return (
          <Color key={color.id} color={color} onDelete={handleDeleteColor} />
        );
      })}
    </>
  );
}

export default App;
