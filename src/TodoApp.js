import React from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './TodoContext'

export const TodoApp = () => {
    return (
        <TodoProvider>
            <header className = 'header'>
                <h1 className = 'header__title'> Todo </h1>
            </header>
            <main>
                <TodoForm />
                <TodoList />
            </main>
        </TodoProvider>
    )
}