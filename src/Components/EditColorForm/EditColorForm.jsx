import ColorInput from "../ColorInput/ColorInput";

export default function EditColorForm({ onEditColor, initialData }) {
  function handleEdit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedColor = Object.fromEntries(formData);
    updatedColor.id = initialData.id;
    onEditColor(updatedColor);
    console.log("EditColorForm: ", updatedColor);
  }

  return (
    <div>
      <form className="Form-Card" onSubmit={handleEdit}>
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        ></input>
        <label htmlFor="hex">Hex</label>
        <ColorInput id="hex" name="hex" defaultValue={initialData.hex} />
        <label htmlFor="contrastText">Contrast Text</label>
        <ColorInput
          id="contrastText"
          name="contrastText"
          defaultValue={initialData.contrastText}
        />
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
}
