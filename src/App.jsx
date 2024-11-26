import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";
// ADD COLOR
function App() {
  const [colors, setColor] = useLocalStorageState("NewColors", {
    defaultValue: initialColors,
  });

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

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleSubmitColorForm} />

      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDelete={handleDeleteColor}
            onEditColor={handleEditColor}
          />
        );
      })}
    </>
  );
}

export default App;
