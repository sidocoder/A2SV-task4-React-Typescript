import { Trash2 } from 'lucide-react';

interface DeleteButtonProps {
  onDelete: () => void;
}

function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <button onClick={onDelete} className=" delete-btn">
      <Trash2 size={18} />
    </button>
  );
}

export default DeleteButton;
