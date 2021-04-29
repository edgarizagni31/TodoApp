import React, { useRef } from 'react';

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
        <form className = 'form'>
            <h2 className = 'form__title'>Agregar Todo </h2>
            <input 
                type = 'text'
                name = 'desc'
                placeholder = 'Aprender ...'
                ref = {inputEl}
                autoComplete = 'off'
                className = 'form-control'
            />
            <button className = 'btn btn-outline-primary form__btn' onClick = {handleSubmit}>
                Agregar
            </button>
        </form>
    )
}