import React, { useState }  from 'react';
import PropTypes from 'prop-types';

import { TodoListItem } from './TodoListItem';

import './styles/TodoList.css';
import FilterTodos from './FilterTodos';

export const TodoList = ({ todos, deleteTodo, toogleTodo }) => {

  const [ filter, setFilter ] = useState({ isFilter: false, type: ''});
  const [ count, setCount ] = useState( todos.length );

  const handleViewAll = () => {
   setFilter( {isFilter: false, type: ''} );
   setCount( todos.length );    
  }; 

  const handleViewActives = () => {
    let cont = 0;

    todos.forEach(todo => {
      !todo.done && cont++;
    });

    setCount(cont);

    setFilter( {isFilter: true, type: 'actives'} );
  };

  const handleViewComplete = () => {
    let cont = 0;

    todos.forEach(todo => {
      todo.done && cont++;
    });

    setCount(cont);

    setFilter( {isFilter: true, type: 'complete'} );
  };

  return (
    <section className='todo-list'>
      <article className='todo-list__items'>
        {
          !filter.isFilter ?
          todos.map( todo => (
            <TodoListItem
              key = {todo.id}
              todo = {todo}
              deleteTodo = {deleteTodo}
              toogleTodo = {toogleTodo}
            />
          ))
          :
          <FilterTodos 
            type = {filter.type}
            todos = {todos}
            deleteTodo = {deleteTodo}
            toogleTodo = {toogleTodo}
          />
        }
      </article>
      <article className='todo-list__op'>
        <p className='todo-list__total'>Total: {count} </p>
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
