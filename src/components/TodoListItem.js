import React from "react";

import { BsX } from "react-icons/bs";

export const TodoListItem = ({ todo, deleteTodo, toogleTodo }) => {
  const handleRemoveTodo = (id) => deleteTodo(id);
  const handleToogleTodo = (id) => toogleTodo(id);

  return (
    <div className='todo-list__item'>
      <button
        className={`${todo.done && "todo-list__btn--active"} todo-list__btn `}
        onClick={() => handleToogleTodo(todo.id)}
      ></button>
      <p className={`${todo.done && 'complete'} todo-list__text`}>
        {todo.desc}
      </p>
      <BsX
        className='todo-list__icon'
        onClick={() => handleRemoveTodo(todo.id)}
      />
    </div>
  );
};
