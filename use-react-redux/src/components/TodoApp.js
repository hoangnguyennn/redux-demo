import { useEffect, useState } from 'react';

const TodoApp = ({ todos, addTodo, fetchTodos }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  useEffect(() => fetchTodos(), [fetchTodos]);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
