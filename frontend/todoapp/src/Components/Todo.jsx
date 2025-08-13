import React, { useRef, useState } from 'react';

const Todo = () => {
  const inputRef = useRef(null);         
  const [todos, setTodos] = useState([]); 

  const handleAddTodo = () => {
    const todoText = inputRef.current.value.trim();
    if (todoText === '') return;

    setTodos([...todos, todoText]);
    inputRef.current.value = '';         
    inputRef.current.focus();            
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo App (useRef)</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter a todo"
        onKeyDown={handleKeyPress}
        style={{ marginRight: 10 }}
      />
      <button onClick={handleAddTodo}>submit</button>

      <ul style={{ marginTop: 20 }}>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
