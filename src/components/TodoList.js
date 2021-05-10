import React from 'react';
import PropTypes from 'prop-types';

import {BsX} from 'react-icons/bs';
import './styles/TodoList.css';

export const TodoList = ({todos, deleteTodo, toogleTodo}) => {
  const handleRemoveTodo = id => deleteTodo(id);
  const handleToogleTodo = id => toogleTodo(id);

  return (
    <section className="todo-list">
      <div className='todo-list__items'>
        {
          todos.length === 0
          ? 
          <p className = 'todo-list--empty'>No se han registrados todos</p>
          : 
          todos.map(todo => (
            <div key={todo.id} className='todo-list__item'>
              <button 
                className='todo-list__btn' 
                onClick = { () => handleToogleTodo(todo.id) }
              >
              </button>
              <p className= { `${ todo.done && 'complete'} todo-list__text`}  >
                  {todo.desc}
              </p>
              <BsX className='todo-list__icon' onClick = { () =>  handleRemoveTodo(todo.id) }/>
            </div>
          ))
        }
      </div>
    </section>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toogleTodo: PropTypes.func.isRequired
}
