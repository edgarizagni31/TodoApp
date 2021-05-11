import React, { useRef } from 'react';

import './styles/TodoForm.css';

export const TodoForm = ( { addTodo }) => {
    const inputEl = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let todo;

        if (inputEl.current.value !== "") {
            todo = {
                id: Date.now(),
                desc: inputEl.current.value,
                done: false
            };
            addTodo( todo );
            inputEl.current.value = "";
        }else {
            alert("Este campo no puede estar vacio");
        }
    }

    return (
        <form className = 'form' onSubmit = {handleSubmit}>
            <input
                type = 'text'
                name = 'desc'
                placeholder = 'Crear un nuevo todo...'
                ref = {inputEl}
                autoComplete = 'off'
                className = 'form__input'
            />
        </form>
    )
}
