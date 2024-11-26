import "./Color.css";
import DeleteColor from "../DeleteColor/DeleteColor";
// import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import EditColorForm from "../EditColorForm/EditColorForm";

export default function Color({ color, onDelete, onEditColor }) {
  // useState handleEditColor //
  const [showConfirmation, setShowConfirmation] = useLocalStorageState(
    "gurke",
    { defaultValue: false }
  );

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

  // END useState handleEditColor //

  // useState handleEditColor //

  const [showEditForm, setShowEditForm] = useLocalStorageState(false);

  function handleShowEditClick() {
    setShowEditForm(true);
  }

  function handleConfirmEdit(updatedColor) {
    onEditColor(updatedColor);
    setShowEditForm(false);
  }

  function handleCancelEdit() {
    setShowEditForm(false);
  }

  // END useState handleEditColor //

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
      <button onClick={handleShowEditClick}>EDIT</button>

      {showEditForm && (
        <div>
          <EditColorForm initialData={color} onEditColor={handleConfirmEdit} />
          <p>Are you sure?</p>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}

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
