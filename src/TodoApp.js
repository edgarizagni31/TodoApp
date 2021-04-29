import React, { useReducer, useEffect } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { todoReducer } from './helpers/todoReducer';

const init = () => JSON.parse( localStorage.getItem('todos') ) || [];

export const TodoApp = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const addTodo =  ( todo ) => {
        dispatch( { type: 'add', payload: todo } );
    }

    const deleteTodo = ( id ) => {
        dispatch( { type: 'delete', payload: id } );
    }

    const toogleTodo = ( id ) => {
        dispatch( { type: 'toogle', payload: id } );
    }

    useEffect( () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos] )

    return (
        <>
            <header className = 'header'>
                <h1 className = 'header__title'> Todo App <small className = 'header__title--count'> ( {todos.length} ) </small> </h1>
            </header>
            <div className = 'main'>
                <TodoList todos = {todos} deleteTodo = { deleteTodo } toogleTodo = { toogleTodo }/>
                <TodoForm addTodo = {addTodo}/>
            </div>
        </>
    )
}