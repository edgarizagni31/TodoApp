import React from 'react'
import { TodoListItem } from './TodoListItem'

const FilterTodos = ( { type, todos, deleteTodo, toogleTodo } ) => {

    return (
        <>
            {
                type === 'actives'
                ?
                todos.map( todo => (
                    !todo.done &&
                    <TodoListItem
                        key = {todo.id}
                        todo = {todo}
                        deleteTodo = {deleteTodo}
                        toogleTodo = {toogleTodo}
                    />
                ))
                :
                todos.map( todo => (
                    todo.done &&
                    <TodoListItem
                        key = {todo.id}
                        todo = {todo}
                        deleteTodo = {deleteTodo}
                        toogleTodo = {toogleTodo}
                    />
                ))
            }
        </>
    )
}

export default FilterTodos