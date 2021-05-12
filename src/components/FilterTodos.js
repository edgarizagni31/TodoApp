import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import { TodoListItem } from './TodoListItem'

const FilterTodos = ( { type } ) => {
    const { todos } = useContext(TodoContext);

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
                    />
                ))
                :
                todos.map( todo => (
                    todo.done &&
                    <TodoListItem
                        key = {todo.id}
                        todo = {todo}
                    />
                ))
            }
        </>
    )
}

export default FilterTodos