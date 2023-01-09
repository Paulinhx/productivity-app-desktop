import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(index) {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  function updateTodo(index, todo) {
    setTodos(
      todos.map((t, i) => {
        if (i === index) {
          return todo;
        }
        return t;
      })
    );
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo.text}
          <button onClick={() => deleteTodo(index)}>Delete</button>
          <button onClick={() => updateTodo(index, todo)}>Update</button>
        </div>
      ))}
      <button onClick={() => addTodo({ text: 'New todo' })}>Add Todo</button>
    </div>
  );
}
