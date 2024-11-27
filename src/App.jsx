import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

// ADD COLOR
function App() {
  const [colors, setColor] = useLocalStorageState("NewColors", {
    defaultValue: initialColors,
  });

  const [copiedColor, setCopiedColor] = useState("");

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

  function handleEditColor(updatedColor) {
    setColor(
      colors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color
      )
    );
    console.log("handleEditColor: ", colors);
    console.log("handleEditColor: ", updatedColor);
  }

  async function handleCopyColor(colorHex) {
    try {
      await navigator.clipboard.writeText(colorHex);
      setCopiedColor("Color is copied!");
      setTimeout(() => setCopiedColor(""), 3000);
      console.log(`${colorHex} copied to clipboard!`);
    } catch (error) {
      setCopiedColor("Failed to copy");
      setTimeout(() => setCopiedColor(""), 3000);
      console.error("Failed to copy color: ", error);
    }
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleSubmitColorForm} />
      {copiedColor && <p className="copiedColorElement">{copiedColor}</p>}
      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDelete={handleDeleteColor}
            onEditColor={handleEditColor}
            onCopy={handleCopyColor}
          />
        );
      })}
    </>
  );
}

export default App;
