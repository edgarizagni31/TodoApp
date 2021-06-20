import { createContext, useEffect, useReducer, useState } from 'react';
import { todoReducer } from './helpers/todoReducer';

export const TodoContext = createContext();

const  TodoProvider = ( {children} ) => {
    const init = () => JSON.parse(localStorage.getItem('todos')) || [];
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );
    const [ listTodos, setListTodos ] = useState(todos);

    useEffect( 
        () => {
            localStorage.setItem('todos', JSON.stringify(todos));
            setListTodos( todos );
        }
    , [ todos ])
   
    const filterComplete =   () => {
      setListTodos( todos.filter( (t) => t.done === true ) );
    }
  
    const filterActives =  () => {
      setListTodos( todos.filter( (t) => t.done === false ) )
    }

    const resetTodos = () => {
      setListTodos( todos );
    }

    return (
        <TodoContext.Provider 
            value = {
                {
                    listTodos,
                    dispatch,
                    resetTodos,
                    filterActives,
                    filterComplete
                }
            }
        >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;
