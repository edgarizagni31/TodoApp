import React, { useContext, useState }  from 'react';

import { TodoListItem } from './TodoListItem';

import './styles/TodoList.css';

import FilterTodos from './FilterTodos';

import { TodoContext } from '../TodoContext';

export const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const [ filter, setFilter ] = useState({ isFilter: false, type: ''});

  const handleViewAll = () => {
    setFilter( {isFilter: false, type: ''} );
  }; 

  const handleViewActives = () => {
    setFilter( {isFilter: true, type: 'actives'} );
  };

  const handleViewComplete = () => {
    setFilter( {isFilter: true, type: 'complete'} );
  };

  const deleteCompleted = () => dispatch( { type: 'delete-completed' } )

  return (
    <section className='todo-list'>
      <article className='todo-list__items'>
        {
          !filter.isFilter ?
          todos.map( todo => (
            <TodoListItem key = { todo.id } todo = {todo} />
          ))
          :
          <FilterTodos 
            type = {filter.type}
          />
        }
      </article>
      <article className='todo-list__op'>
        <p className='todo-list__total'>Total: { todos.length} </p>
        <div className='todo-list__options'>
          <p 
            className={ `${!filter.isFilter && 'option--active' } todo-list__option `} 
            onClick={handleViewAll}
          >
            Todas
          </p>
          <p 
            className={ `${filter.type === 'actives' && 'option--active' } todo-list__option `} 
            onClick={handleViewActives}
          >
            Activas
          </p>
          <p 
            onClick={handleViewComplete}
            className={ `${filter.type === 'complete' && 'option--active' } todo-list__option `} 
          >
            Completadas
          </p>
        </div>
        <p 
          onClick = {deleteCompleted}
          className='todo-list__delete-all'
        >
          Borrar completadas
        </p>
      </article>
    </section>
  );
};
