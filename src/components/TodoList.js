import React  from 'react';
import PropTypes from 'prop-types';

import { TodoListItem } from './TodoListItem';

import './styles/TodoList.css';

export const TodoList = ({ todos, deleteTodo, toogleTodo }) => {

  const handleViewAll = () => {
     
  };

  const handleViewActives = () => {
  };

  const handleViewComplete = () => {
  };

  return (
    <section className='todo-list'>
      <article className='todo-list__items'>
        {
          todos.map( todo => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toogleTodo={toogleTodo}
            />
          ))
        }
      </article>
      <article className='todo-list__op'>
        <p className='todo-list__total'>Total: {todos.length}</p>
        <div className='todo-list__options'>
          <p className='todo-list__option' onClick={handleViewAll}>
            Todas
          </p>
          <p className='todo-list__option' onClick={handleViewActives}>
            Activas
          </p>
          <p className='todo-list__option' onClick={handleViewComplete}>
            Completadas
          </p>
        </div>
        <p className='todo-list__delete-all'>Borrar completadas</p>
      </article>
    </section>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toogleTodo: PropTypes.func.isRequired,
};
