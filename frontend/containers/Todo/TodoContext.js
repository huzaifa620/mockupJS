import React, { useState } from 'react';
import { TodoType } from './TodoType';

/**
 * fake Todo data generator
 */
const initial = Array.from({ length: 5 }, (v, k) => k).map(k => {
  const custom = {
    id: `id-${k}`,
    content: `Make a short list for invision`,
    status: 'pending', // "done" or "pending"
  };
  return custom;
});

export const TodoContext = React.createContext({});

const TodoProvider = (props) => {
  const [todos, setTodos] = useState(initial);

  const addTodo = (value) => {
    const newTodo = {
      id: `id-${Date.now()}`,
      content: `${value}`,
      status: 'pending',
    };
    todos.push(newTodo);
    setTodos([...todos]); // have to use this way [...todos]
  };

  const updateTodo = (todoItem) => {
    const index = todos.findIndex(todo => todo.id === todoItem.id);
    todos[index] = todoItem;
    setTodos([...todos]);
  };

  const removeTodo = (todoId) => {
    const index = todos.findIndex(todo => todo.id === todoId);
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        updateTodo,
        removeTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
