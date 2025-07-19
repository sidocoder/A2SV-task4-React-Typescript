import { Pencil } from 'lucide-react';

interface EditButtonProps {
  onEdit: () => void;
}

function EditButton({ onEdit }: EditButtonProps) {
  return (
    <button onClick={onEdit} className="text-blue-400 hover:text-blue-600 transition">
      <Pencil size={18} />
    </button>
  );
}

export default EditButton;
