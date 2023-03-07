import React, { Fragment } from "react";
import Todo from "./TodoItem";

export const TodoList = ({ todos }) => {
  return (
    <Fragment>
      {todos.map((todo, index) => (
        <Todo todo={todo} index={index} key={todo.id} />
      ))}
    </Fragment>
  );
};

React.memo(TodoList);