import { useContext, useRef } from 'react';
import { TodoContext } from '../TodoContext';

import './styles/TodoForm.css';

const TodoForm = () => {
    const inputEl = useRef(null);
    const { dispatch } = useContext(TodoContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let todo;

        if (inputEl.current.value !== '') {
            todo = {
                id: Date.now(),
                desc: inputEl.current.value,
                done: false
            };

            dispatch( {  type: 'add', payload: todo } );
            inputEl.current.value = '';
        }else {
            alert('Este campo no puede estar vacio');
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

export default TodoForm;

