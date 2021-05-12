import { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "./helpers/todoReducer";

export const TodoContext = createContext();

export const TodoProvider = ( {children} ) => {
    const init = () => JSON.parse(localStorage.getItem('todos')) || [];
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect( 
        () => {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    , [ todos ])

    return (
        <TodoContext.Provider 
            value = {
                {
                    todos,
                    dispatch
                }
            }
        >
            {children}
        </TodoContext.Provider>
    )
}

