import { useState } from "react";
import Checkbox from './Checkbox';
import Todotext from './Todotext';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

interface TodoItemProps {
  text: string;
  onDelete: () => void;
  onEdit: () => void;
  completed: boolean;
  onToggle: () => void;
}

function TodoItem({ text, onDelete, onEdit }: TodoItemProps) {
  const [completed, setCompleted] = useState(false);

  const handleToggle = () => {
    setCompleted(!completed);
  };

  return (
    <div className="item-box">
      <Checkbox checked={completed} onToggle={handleToggle} />
      <Todotext text={text} completed={completed} />
      <div className="editdelete-btn">
        <EditButton onEdit={onEdit} />
        <DeleteButton onDelete={onDelete} />
      </div>
    </div>
  );
}

export default TodoItem;
