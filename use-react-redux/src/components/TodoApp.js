import { useState } from 'react';

const TodoApp = ({ todos, addTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
