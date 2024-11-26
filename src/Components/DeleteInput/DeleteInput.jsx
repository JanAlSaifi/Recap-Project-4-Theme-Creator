export default function DeleteInput({ id, onDelete }) {
  return (
    <button
      type="button"
      id="delete-button"
      name="delete-button"
      onClick={() => onDelete(id)}
    >
      DELETE
    </button>
  );
}
