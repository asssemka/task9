// App.jsx
const React = require('react');
const { useState, useEffect } = require('react');
const fetch = require('node-fetch');
const { useSsrEffect } = require('@issr/core');

const getTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching todos:', error.message);
    return []; // Return an empty array if there's an error
  }
};

const App = () => {
  const [todos, setTodos] = useState([]);

  // Use useSsrEffect for server-side rendering
  useSsrEffect(async () => {
    const fetchedTodos = await getTodos();
    setTodos(fetchedTodos);
  }, []); // Empty dependency array ensures the effect runs only once

  // Use useEffect for client-side rendering
  useEffect(() => {
    // Fetch todos again if component is mounted on the client side
    getTodos().then(fetchedTodos => {
      setTodos(fetchedTodos);
    });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Todo List</h1>
      {todos.length === 0 ? (
        <p>Loading todos...</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

module.exports = App;
