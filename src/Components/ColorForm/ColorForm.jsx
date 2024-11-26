import "./ColorForm.css";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "primary", hex: "#123456", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);
  }

  return (
    <div>
      <form className="Form-Card" onSubmit={handleSubmit}>
        <label htmlFor="role-name">Role</label>
        <input
          type="text"
          id="role-name"
          name="role-name"
          defaultValue={initialData.role}
        ></input>
        <label htmlFor="hex-color">Hex</label>
        <ColorInput
          id="hex-color"
          name="hex-color"
          defaultValue={initialData.hex}
        />
        <label htmlFor="contrast-color">Contrast Text</label>
        <ColorInput
          id="contrast-color"
          name="contrast-color"
          defaultValue={initialData.contrastText}
        />
        <button type="submit">ADD COLOR</button>
      </form>
    </div>
  );
}
