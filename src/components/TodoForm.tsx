import React, { useState } from 'react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

function TodoForm({ onAdd }: TodoFormProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task todo . . ."
        />
        <button className="todo-button" type="submit">+</button>
      </form>
    </div>
  );
}

export default TodoForm;
