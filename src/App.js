import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo, index }) => {
  return (
    <div className="todo">
      { todo.text }
    </div>
  )
}

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" placeholder="Add a new todo:" value={value} onChange={e => setValue(e.target.value)} />
    </form>
  )
}

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn React Hooks',
      isCompleted: false
    },
    {
      text: 'Meet friends for lunch',
      isCompleted: false
    },
    {
      text: 'Build damn cool apps',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="todo-list">
        {
          todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} />
          ))
        }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;
