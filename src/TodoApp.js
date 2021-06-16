import { useContext }  from 'react';

import { TodoContext } from './TodoContext';

import FilterTodos from './components/FilterTodos';
import TodoForm  from './components/TodoForm';
import TodoList from './components/TodoList';

const TodoApp = () => {
    const { listTodos, dispatch } = useContext(TodoContext);
    const deleteCompleted = () => dispatch( { type: 'delete-completed' } )
      
    return (
        <>
            <header className = 'header'>
                <h1 className = 'header__title'> Todo </h1>
            </header>
            <main>
                <TodoForm />
                <section className = 'todo-list'>
                    <article className = 'todo-list__items'>
                        <TodoList  listTodos = {listTodos}/>
                    </article>
                    <article className = 'todo-list__op'>
                        <p className = 'todo-list__total'>Total: { listTodos.length} </p>
                        <FilterTodos />
                        <p 
                          onClick = {deleteCompleted}
                          className = 'todo-list__delete-all'
                         >
                          Borrar completadas
                        </p>
                    </article>
                </section> 
            </main>
        </>
    )
}


export default TodoApp;
