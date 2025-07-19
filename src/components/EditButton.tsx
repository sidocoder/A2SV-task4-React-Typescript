import { Pencil } from 'lucide-react';

interface EditButtonProps {
  onEdit: () => void;
}

function EditButton({ onEdit }: EditButtonProps) {
  return (
    <button onClick={onEdit} className="edit-btn">
      <Pencil size={18} />
    </button>
  );
}

export default EditButton;
