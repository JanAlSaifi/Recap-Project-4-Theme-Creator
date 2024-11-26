import DeleteInput from "../DeleteInput/DeleteInput";

export default function DeleteColor({ id, onDelete }) {
  return (
    <form className="delete-card">
      <label htmlFor="delete-button" />
      <DeleteInput onDelete={onDelete} id={id} />
    </form>
  );
}
