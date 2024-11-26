import "./Color.css";
import DeleteColor from "../DeleteColor/DeleteColor";
import { useState } from "react";

export default function Color({ color, onDelete }) {
  //useState handleDelete
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleDeleteClick() {
    setShowConfirmation(true);
  }

  function handleConfirmDelete() {
    onDelete(color.id);
    setShowConfirmation(false);
  }

  function handleCancelDelete() {
    setShowConfirmation(false);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <DeleteColor onDelete={handleDeleteClick} id={color.id} />
      {showConfirmation && (
        <div>
          <p>Are you sure?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}
    </div>
  );
}
