import React from 'react';
import PropTypes from 'prop-types';

export const TodoList = ( { todos, deleteTodo, toogleTodo } ) => {

    const handleDelete = ( id ) => deleteTodo(id); 
    const handleComplete = ( id )  => toogleTodo(id); 
    
    return (
        <table className = 'table'>
            <thead className = 'table-primary'>
                <tr>
                    <th>Todo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map( todo =>  (
                        <tr key = { todo.id }>
                            <td 
                                onClick = { () => handleComplete( todo.id ) } 
                                className = { `${ todo.done && 'complete'} todo` } 
                            >
                                { todo.desc }
                            </td>
                            <td>
                                <button 
                                    className = 'btn btn-danger' 
                                    onClick = { () => handleDelete( todo.id ) }
                                >
                                    Borrar
                                </button>
                            </td>
                        </tr>   
                    ))
                }
            </tbody>
        </table>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toogleTodo: PropTypes.func.isRequired
}
