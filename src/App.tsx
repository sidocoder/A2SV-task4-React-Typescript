import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { v4 as uuidv4 } from 'uuid';
import './App.css';



interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id: string, newText: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const handleToggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  return (
    <div className="App">
      <div className="header">
        <h3>Welcome to My Cute <span className = "spann">Todo app 💖</span></h3>
        <hr className='line'/>
        <h1>List of items to do</h1>
      </div>
      <TodoForm onAdd={handleAddTodo} />
      <div className='todo-list'>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            onDelete={() => handleDeleteTodo(todo.id)}
            onEdit={() => handleEditTodo(todo.id, prompt('Edit task:', todo.text) || todo.text)}
            completed={todo.completed}
            onToggle={() => handleToggleTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
