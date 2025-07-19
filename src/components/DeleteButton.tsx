
interface DeleteButtonProps {
  onDelete: () => void;
}

function DeleteButton({ onDelete }: DeleteButtonProps) {
  return <button onClick={onDelete}>Delete</button>;
}

export default DeleteButton;
