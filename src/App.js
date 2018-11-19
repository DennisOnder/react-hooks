import React, { useState } from 'react';
// useState is the React Hooks addition to the core React library
import './App.css';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">
      { todo.text }
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
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
    // todos is the ref to the values set in state, and setTodos is the method for adding new todos
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

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }
  
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  
  return (
    <div className="App">
      <div className="todo-list">
        {
          todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
          ))
        }
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;
